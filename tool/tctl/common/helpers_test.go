/*
Copyright 2015-2021 Gravitational, Inc.

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

package common

import (
	"bytes"
	"context"
	"crypto/x509"
	"encoding/base64"
	"encoding/json"
	"io"
	"testing"
	"time"

	"github.com/gravitational/kingpin"
	"github.com/stretchr/testify/require"
	"gopkg.in/yaml.v2"

	"github.com/gravitational/teleport/api/breaker"
	apidefaults "github.com/gravitational/teleport/api/defaults"
	"github.com/gravitational/teleport/integration/helpers"
	"github.com/gravitational/teleport/lib/auth"
	"github.com/gravitational/teleport/lib/auth/authclient"
	"github.com/gravitational/teleport/lib/cloud"
	"github.com/gravitational/teleport/lib/config"
	"github.com/gravitational/teleport/lib/service"
	"github.com/gravitational/teleport/lib/utils"
)

type options struct {
	CertPool *x509.CertPool
	Insecure bool
}

type optionsFunc func(o *options)

func withRootCertPool(pool *x509.CertPool) optionsFunc {
	return func(o *options) {
		o.CertPool = pool
	}
}

func withInsecure(insecure bool) optionsFunc {
	return func(o *options) {
		o.Insecure = insecure
	}
}

func getAuthClient(ctx context.Context, t *testing.T, fc *config.FileConfig, opts ...optionsFunc) auth.ClientI {
	var options options
	for _, v := range opts {
		v(&options)
	}
	cfg := service.MakeDefaultConfig()

	var ccf GlobalCLIFlags
	ccf.ConfigString = mustGetBase64EncFileConfig(t, fc)
	ccf.Insecure = options.Insecure

	clientConfig, err := ApplyConfig(&ccf, cfg)
	require.NoError(t, err)

	if options.CertPool != nil {
		clientConfig.TLS.RootCAs = options.CertPool
	}

	client, err := authclient.Connect(ctx, clientConfig)
	require.NoError(t, err)
	return client
}

type cliCommand interface {
	Initialize(app *kingpin.Application, cfg *service.Config)
	TryRun(ctx context.Context, cmd string, client auth.ClientI) (bool, error)
}

func runCommand(t *testing.T, fc *config.FileConfig, cmd cliCommand, args []string, opts ...optionsFunc) error {
	cfg := service.MakeDefaultConfig()
	cfg.CircuitBreakerConfig = breaker.NoopBreakerConfig()

	app := utils.InitCLIParser("tctl", GlobalHelpString)
	cmd.Initialize(app, cfg)

	selectedCmd, err := app.Parse(args)
	require.NoError(t, err)

	ctx := context.Background()
	client := getAuthClient(ctx, t, fc, opts...)
	_, err = cmd.TryRun(ctx, selectedCmd, client)
	return err
}

func runResourceCommand(t *testing.T, fc *config.FileConfig, args []string, opts ...optionsFunc) (*bytes.Buffer, error) {
	var stdoutBuff bytes.Buffer
	command := &ResourceCommand{
		stdout: &stdoutBuff,
	}
	return &stdoutBuff, runCommand(t, fc, command, args, opts...)
}

func runTokensCommand(t *testing.T, fc *config.FileConfig, args []string, opts ...optionsFunc) (*bytes.Buffer, error) {
	var stdoutBuff bytes.Buffer
	command := &TokensCommand{
		stdout: &stdoutBuff,
	}

	args = append([]string{"tokens"}, args...)
	return &stdoutBuff, runCommand(t, fc, command, args, opts...)
}

func runUserCommand(t *testing.T, fc *config.FileConfig, args []string, opts ...optionsFunc) error {
	command := &UserCommand{}
	args = append([]string{"users"}, args...)
	return runCommand(t, fc, command, args, opts...)
}

func mustDecodeJSON(t *testing.T, r io.Reader, i interface{}) {
	err := json.NewDecoder(r).Decode(i)
	require.NoError(t, err)
}

func mustDecodeYAML(t *testing.T, r io.Reader, i interface{}) {
	err := yaml.NewDecoder(r).Decode(i)
	require.NoError(t, err)
}
func mustGetBase64EncFileConfig(t *testing.T, fc *config.FileConfig) string {
	configYamlContent, err := yaml.Marshal(fc)
	require.NoError(t, err)
	return base64.StdEncoding.EncodeToString(configYamlContent)
}

type testServerOptions struct {
	fileConfig      *config.FileConfig
	fileDescriptors []service.FileDescriptor
}

type testServerOptionFunc func(options *testServerOptions)

func withFileConfig(fc *config.FileConfig) testServerOptionFunc {
	return func(options *testServerOptions) {
		options.fileConfig = fc
	}
}

func withFileDescriptors(fds []service.FileDescriptor) testServerOptionFunc {
	return func(options *testServerOptions) {
		options.fileDescriptors = fds
	}
}

func makeAndRunTestAuthServer(t *testing.T, opts ...testServerOptionFunc) (auth *service.TeleportProcess) {
	var options testServerOptions
	for _, opt := range opts {
		opt(&options)
	}

	var err error
	cfg := service.MakeDefaultConfig()
	if len(options.fileDescriptors) != 0 {
		cfg.FileDescriptors = options.fileDescriptors
	}
	cfg.CircuitBreakerConfig = breaker.NoopBreakerConfig()
	if options.fileConfig != nil {
		err = config.ApplyFileConfig(options.fileConfig, cfg)
		require.NoError(t, err)
	}

	cfg.CachePolicy.Enabled = false
	cfg.Proxy.DisableWebInterface = true
	cfg.InstanceMetadataClient = cloud.NewDisabledIMDSClient()
	auth, err = service.NewTeleport(cfg)
	require.NoError(t, err)
	require.NoError(t, auth.Start())

	t.Cleanup(func() {
		require.NoError(t, auth.Close())
		require.NoError(t, auth.Wait())
	})

	_, err = auth.WaitForEventTimeout(30*time.Second, service.AuthTLSReady)
	// in reality, the auth server should start *much* sooner than this.  we use a very large
	// timeout here because this isn't the kind of problem that this test is meant to catch.
	require.NoError(t, err, "auth server didn't start after 30s")

	if cfg.Auth.Enabled && cfg.Databases.Enabled {
		waitForDatabases(t, auth, cfg.Databases.Databases)
	}
	return auth
}

func waitForDatabases(t *testing.T, auth *service.TeleportProcess, dbs []service.Database) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	for {
		select {
		case <-time.After(500 * time.Millisecond):
			all, err := auth.GetAuthServer().GetDatabaseServers(ctx, apidefaults.Namespace)
			require.NoError(t, err)

			// Count how many input "dbs" are registered.
			var registered int
			for _, db := range dbs {
				for _, a := range all {
					if a.GetName() == db.Name {
						registered++
						break
					}
				}
			}

			if registered == len(dbs) {
				return
			}
		case <-ctx.Done():
			t.Fatal("databases not registered after 10s")
		}
	}
}

func newDynamicServiceAddr(t *testing.T) *dynamicServiceAddr {
	var fds []service.FileDescriptor
	webAddr := helpers.NewListener(t, service.ListenerProxyWeb, &fds)
	tunnelAddr := helpers.NewListener(t, service.ListenerProxyTunnel, &fds)
	authAddr := helpers.NewListener(t, service.ListenerAuth, &fds)

	return &dynamicServiceAddr{
		descriptors: fds,
		webAddr:     webAddr,
		tunnelAddr:  tunnelAddr,
		authAddr:    authAddr,
	}
}

// dynamicServiceAddr collects listeners addresses and sockets descriptors allowing to create and network listeners
// and pass the file descriptors to teleport service.
// This is usefully when Teleport service is created from config file where a port is allocated by OS.
type dynamicServiceAddr struct {
	webAddr     string
	tunnelAddr  string
	authAddr    string
	descriptors []service.FileDescriptor
}
