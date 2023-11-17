// Copyright 2022 Gravitational, Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: prehog/v1alpha/tbot.proto

package prehogv1alphaconnect

import (
	context "context"
	errors "errors"
	http "net/http"
	strings "strings"

	connect_go "github.com/bufbuild/connect-go"
	v1alpha "github.com/gravitational/teleport/gen/proto/go/prehog/v1alpha"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect_go.IsAtLeastVersion0_1_0

const (
	// TbotReportingServiceName is the fully-qualified name of the TbotReportingService service.
	TbotReportingServiceName = "prehog.v1alpha.TbotReportingService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// TbotReportingServiceSubmitTbotEventProcedure is the fully-qualified name of the
	// TbotReportingService's SubmitTbotEvent RPC.
	TbotReportingServiceSubmitTbotEventProcedure = "/prehog.v1alpha.TbotReportingService/SubmitTbotEvent"
)

// TbotReportingServiceClient is a client for the prehog.v1alpha.TbotReportingService service.
type TbotReportingServiceClient interface {
	SubmitTbotEvent(context.Context, *connect_go.Request[v1alpha.SubmitTbotEventRequest]) (*connect_go.Response[v1alpha.SubmitTbotEventResponse], error)
}

// NewTbotReportingServiceClient constructs a client for the prehog.v1alpha.TbotReportingService
// service. By default, it uses the Connect protocol with the binary Protobuf Codec, asks for
// gzipped responses, and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply
// the connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewTbotReportingServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) TbotReportingServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &tbotReportingServiceClient{
		submitTbotEvent: connect_go.NewClient[v1alpha.SubmitTbotEventRequest, v1alpha.SubmitTbotEventResponse](
			httpClient,
			baseURL+TbotReportingServiceSubmitTbotEventProcedure,
			opts...,
		),
	}
}

// tbotReportingServiceClient implements TbotReportingServiceClient.
type tbotReportingServiceClient struct {
	submitTbotEvent *connect_go.Client[v1alpha.SubmitTbotEventRequest, v1alpha.SubmitTbotEventResponse]
}

// SubmitTbotEvent calls prehog.v1alpha.TbotReportingService.SubmitTbotEvent.
func (c *tbotReportingServiceClient) SubmitTbotEvent(ctx context.Context, req *connect_go.Request[v1alpha.SubmitTbotEventRequest]) (*connect_go.Response[v1alpha.SubmitTbotEventResponse], error) {
	return c.submitTbotEvent.CallUnary(ctx, req)
}

// TbotReportingServiceHandler is an implementation of the prehog.v1alpha.TbotReportingService
// service.
type TbotReportingServiceHandler interface {
	SubmitTbotEvent(context.Context, *connect_go.Request[v1alpha.SubmitTbotEventRequest]) (*connect_go.Response[v1alpha.SubmitTbotEventResponse], error)
}

// NewTbotReportingServiceHandler builds an HTTP handler from the service implementation. It returns
// the path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewTbotReportingServiceHandler(svc TbotReportingServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	tbotReportingServiceSubmitTbotEventHandler := connect_go.NewUnaryHandler(
		TbotReportingServiceSubmitTbotEventProcedure,
		svc.SubmitTbotEvent,
		opts...,
	)
	return "/prehog.v1alpha.TbotReportingService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case TbotReportingServiceSubmitTbotEventProcedure:
			tbotReportingServiceSubmitTbotEventHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedTbotReportingServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedTbotReportingServiceHandler struct{}

func (UnimplementedTbotReportingServiceHandler) SubmitTbotEvent(context.Context, *connect_go.Request[v1alpha.SubmitTbotEventRequest]) (*connect_go.Response[v1alpha.SubmitTbotEventResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("prehog.v1alpha.TbotReportingService.SubmitTbotEvent is not implemented"))
}
