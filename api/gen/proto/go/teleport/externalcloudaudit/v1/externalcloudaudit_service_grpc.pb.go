// Copyright 2023 Gravitational, Inc
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

// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: teleport/externalcloudaudit/v1/externalcloudaudit_service.proto

package externalcloudauditv1

import (
	context "context"

	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	ExternalCloudAuditService_GetDraftExternalCloudAudit_FullMethodName         = "/teleport.externalcloudaudit.v1.ExternalCloudAuditService/GetDraftExternalCloudAudit"
	ExternalCloudAuditService_UpsertDraftExternalCloudAudit_FullMethodName      = "/teleport.externalcloudaudit.v1.ExternalCloudAuditService/UpsertDraftExternalCloudAudit"
	ExternalCloudAuditService_DeleteDraftExternalCloudAudit_FullMethodName      = "/teleport.externalcloudaudit.v1.ExternalCloudAuditService/DeleteDraftExternalCloudAudit"
	ExternalCloudAuditService_PromoteToClusterExternalCloudAudit_FullMethodName = "/teleport.externalcloudaudit.v1.ExternalCloudAuditService/PromoteToClusterExternalCloudAudit"
	ExternalCloudAuditService_GetClusterExternalCloudAudit_FullMethodName       = "/teleport.externalcloudaudit.v1.ExternalCloudAuditService/GetClusterExternalCloudAudit"
	ExternalCloudAuditService_DisableClusterExternalCloudAudit_FullMethodName   = "/teleport.externalcloudaudit.v1.ExternalCloudAuditService/DisableClusterExternalCloudAudit"
	ExternalCloudAuditService_GenerateDraftExternalCloudAudit_FullMethodName    = "/teleport.externalcloudaudit.v1.ExternalCloudAuditService/GenerateDraftExternalCloudAudit"
)

// ExternalCloudAuditServiceClient is the client API for ExternalCloudAuditService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ExternalCloudAuditServiceClient interface {
	// GetDraftExternalCloudAudit returns the draft external cloud audit configuration resource.
	GetDraftExternalCloudAudit(ctx context.Context, in *GetDraftExternalCloudAuditRequest, opts ...grpc.CallOption) (*GetDraftExternalCloudAuditResponse, error)
	// UpsertDraftExternalCloudAudit upserts a draft external cloud Audit resource.
	UpsertDraftExternalCloudAudit(ctx context.Context, in *UpsertDraftExternalCloudAuditRequest, opts ...grpc.CallOption) (*UpsertDraftExternalCloudAuditResponse, error)
	// DeleteDraftExternalCloudAudit removes draft external cloud Audit resource.
	DeleteDraftExternalCloudAudit(ctx context.Context, in *DeleteDraftExternalCloudAuditRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	// PromoteToClusterExternalCloudAudit promotes the current draft external cloud
	// audit configuration to be used in the cluster.
	// This method causes the Teleport Auth service to reload.
	PromoteToClusterExternalCloudAudit(ctx context.Context, in *PromoteToClusterExternalCloudAuditRequest, opts ...grpc.CallOption) (*PromoteToClusterExternalCloudAuditResponse, error)
	// GetClusterExternalCloudAudit gets cluster external cloud audit.
	GetClusterExternalCloudAudit(ctx context.Context, in *GetClusterExternalCloudAuditRequest, opts ...grpc.CallOption) (*GetClusterExternalCloudAuditResponse, error)
	// DisableClusterExternalCloudAudit disables the external cloud audit feature.
	// This method causes the Teleport Auth service to reload.
	DisableClusterExternalCloudAudit(ctx context.Context, in *DisableClusterExternalCloudAuditRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	// GenerateDraftExternalCloudAudit generates a new external cloud audit
	// resource with randomized resource names and upserts it as the current
	// draft.
	GenerateDraftExternalCloudAudit(ctx context.Context, in *GenerateDraftExternalCloudAuditRequest, opts ...grpc.CallOption) (*GenerateDraftExternalCloudAuditResponse, error)
}

type externalCloudAuditServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewExternalCloudAuditServiceClient(cc grpc.ClientConnInterface) ExternalCloudAuditServiceClient {
	return &externalCloudAuditServiceClient{cc}
}

func (c *externalCloudAuditServiceClient) GetDraftExternalCloudAudit(ctx context.Context, in *GetDraftExternalCloudAuditRequest, opts ...grpc.CallOption) (*GetDraftExternalCloudAuditResponse, error) {
	out := new(GetDraftExternalCloudAuditResponse)
	err := c.cc.Invoke(ctx, ExternalCloudAuditService_GetDraftExternalCloudAudit_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *externalCloudAuditServiceClient) UpsertDraftExternalCloudAudit(ctx context.Context, in *UpsertDraftExternalCloudAuditRequest, opts ...grpc.CallOption) (*UpsertDraftExternalCloudAuditResponse, error) {
	out := new(UpsertDraftExternalCloudAuditResponse)
	err := c.cc.Invoke(ctx, ExternalCloudAuditService_UpsertDraftExternalCloudAudit_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *externalCloudAuditServiceClient) DeleteDraftExternalCloudAudit(ctx context.Context, in *DeleteDraftExternalCloudAuditRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, ExternalCloudAuditService_DeleteDraftExternalCloudAudit_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *externalCloudAuditServiceClient) PromoteToClusterExternalCloudAudit(ctx context.Context, in *PromoteToClusterExternalCloudAuditRequest, opts ...grpc.CallOption) (*PromoteToClusterExternalCloudAuditResponse, error) {
	out := new(PromoteToClusterExternalCloudAuditResponse)
	err := c.cc.Invoke(ctx, ExternalCloudAuditService_PromoteToClusterExternalCloudAudit_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *externalCloudAuditServiceClient) GetClusterExternalCloudAudit(ctx context.Context, in *GetClusterExternalCloudAuditRequest, opts ...grpc.CallOption) (*GetClusterExternalCloudAuditResponse, error) {
	out := new(GetClusterExternalCloudAuditResponse)
	err := c.cc.Invoke(ctx, ExternalCloudAuditService_GetClusterExternalCloudAudit_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *externalCloudAuditServiceClient) DisableClusterExternalCloudAudit(ctx context.Context, in *DisableClusterExternalCloudAuditRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, ExternalCloudAuditService_DisableClusterExternalCloudAudit_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *externalCloudAuditServiceClient) GenerateDraftExternalCloudAudit(ctx context.Context, in *GenerateDraftExternalCloudAuditRequest, opts ...grpc.CallOption) (*GenerateDraftExternalCloudAuditResponse, error) {
	out := new(GenerateDraftExternalCloudAuditResponse)
	err := c.cc.Invoke(ctx, ExternalCloudAuditService_GenerateDraftExternalCloudAudit_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ExternalCloudAuditServiceServer is the server API for ExternalCloudAuditService service.
// All implementations must embed UnimplementedExternalCloudAuditServiceServer
// for forward compatibility
type ExternalCloudAuditServiceServer interface {
	// GetDraftExternalCloudAudit returns the draft external cloud audit configuration resource.
	GetDraftExternalCloudAudit(context.Context, *GetDraftExternalCloudAuditRequest) (*GetDraftExternalCloudAuditResponse, error)
	// UpsertDraftExternalCloudAudit upserts a draft external cloud Audit resource.
	UpsertDraftExternalCloudAudit(context.Context, *UpsertDraftExternalCloudAuditRequest) (*UpsertDraftExternalCloudAuditResponse, error)
	// DeleteDraftExternalCloudAudit removes draft external cloud Audit resource.
	DeleteDraftExternalCloudAudit(context.Context, *DeleteDraftExternalCloudAuditRequest) (*emptypb.Empty, error)
	// PromoteToClusterExternalCloudAudit promotes the current draft external cloud
	// audit configuration to be used in the cluster.
	// This method causes the Teleport Auth service to reload.
	PromoteToClusterExternalCloudAudit(context.Context, *PromoteToClusterExternalCloudAuditRequest) (*PromoteToClusterExternalCloudAuditResponse, error)
	// GetClusterExternalCloudAudit gets cluster external cloud audit.
	GetClusterExternalCloudAudit(context.Context, *GetClusterExternalCloudAuditRequest) (*GetClusterExternalCloudAuditResponse, error)
	// DisableClusterExternalCloudAudit disables the external cloud audit feature.
	// This method causes the Teleport Auth service to reload.
	DisableClusterExternalCloudAudit(context.Context, *DisableClusterExternalCloudAuditRequest) (*emptypb.Empty, error)
	// GenerateDraftExternalCloudAudit generates a new external cloud audit
	// resource with randomized resource names and upserts it as the current
	// draft.
	GenerateDraftExternalCloudAudit(context.Context, *GenerateDraftExternalCloudAuditRequest) (*GenerateDraftExternalCloudAuditResponse, error)
	mustEmbedUnimplementedExternalCloudAuditServiceServer()
}

// UnimplementedExternalCloudAuditServiceServer must be embedded to have forward compatible implementations.
type UnimplementedExternalCloudAuditServiceServer struct {
}

func (UnimplementedExternalCloudAuditServiceServer) GetDraftExternalCloudAudit(context.Context, *GetDraftExternalCloudAuditRequest) (*GetDraftExternalCloudAuditResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDraftExternalCloudAudit not implemented")
}
func (UnimplementedExternalCloudAuditServiceServer) UpsertDraftExternalCloudAudit(context.Context, *UpsertDraftExternalCloudAuditRequest) (*UpsertDraftExternalCloudAuditResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpsertDraftExternalCloudAudit not implemented")
}
func (UnimplementedExternalCloudAuditServiceServer) DeleteDraftExternalCloudAudit(context.Context, *DeleteDraftExternalCloudAuditRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteDraftExternalCloudAudit not implemented")
}
func (UnimplementedExternalCloudAuditServiceServer) PromoteToClusterExternalCloudAudit(context.Context, *PromoteToClusterExternalCloudAuditRequest) (*PromoteToClusterExternalCloudAuditResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PromoteToClusterExternalCloudAudit not implemented")
}
func (UnimplementedExternalCloudAuditServiceServer) GetClusterExternalCloudAudit(context.Context, *GetClusterExternalCloudAuditRequest) (*GetClusterExternalCloudAuditResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetClusterExternalCloudAudit not implemented")
}
func (UnimplementedExternalCloudAuditServiceServer) DisableClusterExternalCloudAudit(context.Context, *DisableClusterExternalCloudAuditRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DisableClusterExternalCloudAudit not implemented")
}
func (UnimplementedExternalCloudAuditServiceServer) GenerateDraftExternalCloudAudit(context.Context, *GenerateDraftExternalCloudAuditRequest) (*GenerateDraftExternalCloudAuditResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GenerateDraftExternalCloudAudit not implemented")
}
func (UnimplementedExternalCloudAuditServiceServer) mustEmbedUnimplementedExternalCloudAuditServiceServer() {
}

// UnsafeExternalCloudAuditServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ExternalCloudAuditServiceServer will
// result in compilation errors.
type UnsafeExternalCloudAuditServiceServer interface {
	mustEmbedUnimplementedExternalCloudAuditServiceServer()
}

func RegisterExternalCloudAuditServiceServer(s grpc.ServiceRegistrar, srv ExternalCloudAuditServiceServer) {
	s.RegisterService(&ExternalCloudAuditService_ServiceDesc, srv)
}

func _ExternalCloudAuditService_GetDraftExternalCloudAudit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDraftExternalCloudAuditRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExternalCloudAuditServiceServer).GetDraftExternalCloudAudit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ExternalCloudAuditService_GetDraftExternalCloudAudit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExternalCloudAuditServiceServer).GetDraftExternalCloudAudit(ctx, req.(*GetDraftExternalCloudAuditRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExternalCloudAuditService_UpsertDraftExternalCloudAudit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpsertDraftExternalCloudAuditRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExternalCloudAuditServiceServer).UpsertDraftExternalCloudAudit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ExternalCloudAuditService_UpsertDraftExternalCloudAudit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExternalCloudAuditServiceServer).UpsertDraftExternalCloudAudit(ctx, req.(*UpsertDraftExternalCloudAuditRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExternalCloudAuditService_DeleteDraftExternalCloudAudit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteDraftExternalCloudAuditRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExternalCloudAuditServiceServer).DeleteDraftExternalCloudAudit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ExternalCloudAuditService_DeleteDraftExternalCloudAudit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExternalCloudAuditServiceServer).DeleteDraftExternalCloudAudit(ctx, req.(*DeleteDraftExternalCloudAuditRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExternalCloudAuditService_PromoteToClusterExternalCloudAudit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PromoteToClusterExternalCloudAuditRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExternalCloudAuditServiceServer).PromoteToClusterExternalCloudAudit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ExternalCloudAuditService_PromoteToClusterExternalCloudAudit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExternalCloudAuditServiceServer).PromoteToClusterExternalCloudAudit(ctx, req.(*PromoteToClusterExternalCloudAuditRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExternalCloudAuditService_GetClusterExternalCloudAudit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetClusterExternalCloudAuditRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExternalCloudAuditServiceServer).GetClusterExternalCloudAudit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ExternalCloudAuditService_GetClusterExternalCloudAudit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExternalCloudAuditServiceServer).GetClusterExternalCloudAudit(ctx, req.(*GetClusterExternalCloudAuditRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExternalCloudAuditService_DisableClusterExternalCloudAudit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DisableClusterExternalCloudAuditRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExternalCloudAuditServiceServer).DisableClusterExternalCloudAudit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ExternalCloudAuditService_DisableClusterExternalCloudAudit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExternalCloudAuditServiceServer).DisableClusterExternalCloudAudit(ctx, req.(*DisableClusterExternalCloudAuditRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExternalCloudAuditService_GenerateDraftExternalCloudAudit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GenerateDraftExternalCloudAuditRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExternalCloudAuditServiceServer).GenerateDraftExternalCloudAudit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ExternalCloudAuditService_GenerateDraftExternalCloudAudit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExternalCloudAuditServiceServer).GenerateDraftExternalCloudAudit(ctx, req.(*GenerateDraftExternalCloudAuditRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ExternalCloudAuditService_ServiceDesc is the grpc.ServiceDesc for ExternalCloudAuditService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ExternalCloudAuditService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "teleport.externalcloudaudit.v1.ExternalCloudAuditService",
	HandlerType: (*ExternalCloudAuditServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetDraftExternalCloudAudit",
			Handler:    _ExternalCloudAuditService_GetDraftExternalCloudAudit_Handler,
		},
		{
			MethodName: "UpsertDraftExternalCloudAudit",
			Handler:    _ExternalCloudAuditService_UpsertDraftExternalCloudAudit_Handler,
		},
		{
			MethodName: "DeleteDraftExternalCloudAudit",
			Handler:    _ExternalCloudAuditService_DeleteDraftExternalCloudAudit_Handler,
		},
		{
			MethodName: "PromoteToClusterExternalCloudAudit",
			Handler:    _ExternalCloudAuditService_PromoteToClusterExternalCloudAudit_Handler,
		},
		{
			MethodName: "GetClusterExternalCloudAudit",
			Handler:    _ExternalCloudAuditService_GetClusterExternalCloudAudit_Handler,
		},
		{
			MethodName: "DisableClusterExternalCloudAudit",
			Handler:    _ExternalCloudAuditService_DisableClusterExternalCloudAudit_Handler,
		},
		{
			MethodName: "GenerateDraftExternalCloudAudit",
			Handler:    _ExternalCloudAuditService_GenerateDraftExternalCloudAudit_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "teleport/externalcloudaudit/v1/externalcloudaudit_service.proto",
}
