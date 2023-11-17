/*
Copyright 2022 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package client

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"net"
	"time"

	"github.com/gravitational/teleport/api/client/proto"
	"github.com/gravitational/teleport/api/types"
	"github.com/gravitational/teleport/api/utils/keys"
	"github.com/gravitational/teleport/lib/srv/alpnproxy"
	alpn "github.com/gravitational/teleport/lib/srv/alpnproxy/common"
	"github.com/gravitational/trace"
)

// ALPNAuthClient contains the required auth.ClientI methods to create a local ALPN proxy.
type ALPNAuthClient interface {
	// GetClusterCACert returns the PEM-encoded TLS certs for the local cluster.
	// If the cluster has multiple TLS certs, they will all be concatenated.
	GetClusterCACert(ctx context.Context) (*proto.GetClusterCACertResponse, error)

	// GetCurrentUser returns current user as seen by the server.
	// Useful especially in the context of remote clusters which perform role and trait mapping.
	GetCurrentUser(ctx context.Context) (types.User, error)

	// GenerateUserCerts takes the public key in the OpenSSH `authorized_keys` plain
	// text format, signs it using User Certificate Authority signing key and
	// returns the resulting certificates.
	GenerateUserCerts(ctx context.Context, req proto.UserCertsRequest) (*proto.Certs, error)
}

// ALPNAuthTunnelConfig contains the required fields used to create an authed ALPN Proxy
type ALPNAuthTunnelConfig struct {
	// MFAAuthenticateResponse is a response to MFAAuthenticateChallenge using one
	// of the MFA devices registered for a user.
	MFAResponse *proto.MFAAuthenticateResponse

	// AuthClient is the client that's used to interact with the cluster and obtain Certificates.
	AuthClient ALPNAuthClient

	// Listener to be used to accept connections that will go trough the tunnel.
	Listener net.Listener

	// InsecureSkipTLSVerify turns off verification for x509 upstream ALPN proxy service certificate.
	InsecureSkipVerify bool

	// Expires is a desired time of the expiry of the certificate.
	Expires time.Time

	// Protocol name.
	Protocol alpn.Protocol

	// PublicProxyAddr is public address of the proxy
	PublicProxyAddr string

	// ConnectionDiagnosticID contains the ID to be used to store Connection Diagnostic checks.
	// Can be empty.
	ConnectionDiagnosticID string

	// RouteToDatabase contains the destination server that must receive the connection.
	// Specific for database proxying.
	RouteToDatabase proto.RouteToDatabase
}

// RunALPNAuthTunnel runs a local authenticated ALPN proxy to another service.
// At least one Route (which defines the service) must be defined
func RunALPNAuthTunnel(ctx context.Context, cfg ALPNAuthTunnelConfig) error {
	tlsCert, err := getUserCerts(ctx, cfg.AuthClient, cfg.MFAResponse, cfg.Expires, cfg.RouteToDatabase, cfg.ConnectionDiagnosticID)
	if err != nil {
		return trace.BadParameter("failed to parse private key: %v", err)
	}

	lp, err := alpnproxy.NewLocalProxy(alpnproxy.LocalProxyConfig{
		InsecureSkipVerify: cfg.InsecureSkipVerify,
		RemoteProxyAddr:    cfg.PublicProxyAddr,
		Protocols:          []alpn.Protocol{cfg.Protocol},
		Listener:           cfg.Listener,
		ParentContext:      ctx,
		Certs:              []tls.Certificate{*tlsCert},
	}, alpnproxy.WithALPNConnUpgradeTest(ctx, getClusterCACertPool(cfg.AuthClient)))
	if err != nil {
		return trace.Wrap(err)
	}

	go func() {
		defer cfg.Listener.Close()
		if err := lp.Start(ctx); err != nil {
			log.WithError(err).Info("ALPN proxy stopped.")
		}
	}()

	return nil
}

func getUserCerts(ctx context.Context, client ALPNAuthClient, mfaResponse *proto.MFAAuthenticateResponse, expires time.Time, routeToDatabase proto.RouteToDatabase, connectionDiagnosticID string) (*tls.Certificate, error) {
	key, err := GenerateRSAKey()
	if err != nil {
		return nil, trace.Wrap(err)
	}

	currentUser, err := client.GetCurrentUser(ctx)
	if err != nil {
		return nil, trace.Wrap(err)
	}

	certs, err := client.GenerateUserCerts(ctx, proto.UserCertsRequest{
		PublicKey:              key.MarshalSSHPublicKey(),
		Username:               currentUser.GetName(),
		Expires:                expires,
		ConnectionDiagnosticID: connectionDiagnosticID,
		RouteToDatabase:        routeToDatabase,
		MFAResponse:            mfaResponse,
	})
	if err != nil {
		return nil, trace.Wrap(err)
	}

	tlsCert, err := keys.X509KeyPair(certs.TLS, key.PrivateKeyPEM())
	if err != nil {
		return nil, trace.BadParameter("failed to parse private key: %v", err)
	}

	return &tlsCert, nil
}

func getClusterCACertPool(authClient ALPNAuthClient) alpnproxy.GetClusterCACertPoolFunc {
	return func(ctx context.Context) (*x509.CertPool, error) {
		caCert, err := authClient.GetClusterCACert(ctx)
		if err != nil {
			return nil, trace.Wrap(err)
		}

		pool := x509.NewCertPool()
		if ok := pool.AppendCertsFromPEM(caCert.GetTLSCA()); !ok {
			return nil, trace.BadParameter("failed to append cert from cluster's TLS CA Cert")
		}
		return pool, nil
	}
}
