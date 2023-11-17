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

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: teleport/discoveryconfig/v1/discoveryconfig.proto

package discoveryconfigv1

import (
	reflect "reflect"
	sync "sync"

	v1 "github.com/gravitational/teleport/api/gen/proto/go/teleport/header/v1"
	types "github.com/gravitational/teleport/api/types"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// DiscoveryConfig is a resource that has Discovery Resource Matchers and a Discovery Group.
//
// Teleport Discovery Services will load the dynamic DiscoveryConfigs whose Discovery Group matches the discovery_group defined in their configuration.
type DiscoveryConfig struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Header is the resource header.
	Header *v1.ResourceHeader `protobuf:"bytes,1,opt,name=header,proto3" json:"header,omitempty"`
	// Spec is an DiscoveryConfig specification.
	Spec *DiscoveryConfigSpec `protobuf:"bytes,2,opt,name=spec,proto3" json:"spec,omitempty"`
}

func (x *DiscoveryConfig) Reset() {
	*x = DiscoveryConfig{}
	if protoimpl.UnsafeEnabled {
		mi := &file_teleport_discoveryconfig_v1_discoveryconfig_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DiscoveryConfig) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DiscoveryConfig) ProtoMessage() {}

func (x *DiscoveryConfig) ProtoReflect() protoreflect.Message {
	mi := &file_teleport_discoveryconfig_v1_discoveryconfig_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DiscoveryConfig.ProtoReflect.Descriptor instead.
func (*DiscoveryConfig) Descriptor() ([]byte, []int) {
	return file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDescGZIP(), []int{0}
}

func (x *DiscoveryConfig) GetHeader() *v1.ResourceHeader {
	if x != nil {
		return x.Header
	}
	return nil
}

func (x *DiscoveryConfig) GetSpec() *DiscoveryConfigSpec {
	if x != nil {
		return x.Spec
	}
	return nil
}

// DiscoveryConfigSpec contains properties required to create matchers to be used by discovery_service.
// Those matchers are used by discovery_service to watch for cloud resources and create them in Teleport.
type DiscoveryConfigSpec struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// DiscoveryGroup is used by discovery_service to add extra matchers.
	// All the discovery_services that have the same discovery_group, will load the matchers of this resource.
	DiscoveryGroup string `protobuf:"bytes,1,opt,name=discovery_group,json=discoveryGroup,proto3" json:"discovery_group,omitempty"`
	// AWS is a list of AWS Matchers.
	Aws []*types.AWSMatcher `protobuf:"bytes,2,rep,name=aws,proto3" json:"aws,omitempty"`
	// Azure is a list of Azure Matchers.
	Azure []*types.AzureMatcher `protobuf:"bytes,3,rep,name=azure,proto3" json:"azure,omitempty"`
	// GCP is a list of GCP Matchers.
	Gcp []*types.GCPMatcher `protobuf:"bytes,4,rep,name=gcp,proto3" json:"gcp,omitempty"`
	// Kube is a list of Kubernetes Matchers.
	Kube []*types.KubernetesMatcher `protobuf:"bytes,5,rep,name=kube,proto3" json:"kube,omitempty"`
}

func (x *DiscoveryConfigSpec) Reset() {
	*x = DiscoveryConfigSpec{}
	if protoimpl.UnsafeEnabled {
		mi := &file_teleport_discoveryconfig_v1_discoveryconfig_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DiscoveryConfigSpec) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DiscoveryConfigSpec) ProtoMessage() {}

func (x *DiscoveryConfigSpec) ProtoReflect() protoreflect.Message {
	mi := &file_teleport_discoveryconfig_v1_discoveryconfig_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DiscoveryConfigSpec.ProtoReflect.Descriptor instead.
func (*DiscoveryConfigSpec) Descriptor() ([]byte, []int) {
	return file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDescGZIP(), []int{1}
}

func (x *DiscoveryConfigSpec) GetDiscoveryGroup() string {
	if x != nil {
		return x.DiscoveryGroup
	}
	return ""
}

func (x *DiscoveryConfigSpec) GetAws() []*types.AWSMatcher {
	if x != nil {
		return x.Aws
	}
	return nil
}

func (x *DiscoveryConfigSpec) GetAzure() []*types.AzureMatcher {
	if x != nil {
		return x.Azure
	}
	return nil
}

func (x *DiscoveryConfigSpec) GetGcp() []*types.GCPMatcher {
	if x != nil {
		return x.Gcp
	}
	return nil
}

func (x *DiscoveryConfigSpec) GetKube() []*types.KubernetesMatcher {
	if x != nil {
		return x.Kube
	}
	return nil
}

var File_teleport_discoveryconfig_v1_discoveryconfig_proto protoreflect.FileDescriptor

var file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDesc = []byte{
	0x0a, 0x31, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2f, 0x64, 0x69, 0x73, 0x63, 0x6f,
	0x76, 0x65, 0x72, 0x79, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x69,
	0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2e, 0x64, 0x69,
	0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31,
	0x1a, 0x27, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2f, 0x68, 0x65, 0x61, 0x64, 0x65,
	0x72, 0x2f, 0x76, 0x31, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x68, 0x65, 0x61,
	0x64, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x74, 0x65, 0x6c, 0x65, 0x70,
	0x6f, 0x72, 0x74, 0x2f, 0x6c, 0x65, 0x67, 0x61, 0x63, 0x79, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x93, 0x01, 0x0a,
	0x0f, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x12, 0x3a, 0x0a, 0x06, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x22, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2e, 0x68, 0x65, 0x61, 0x64,
	0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x48, 0x65,
	0x61, 0x64, 0x65, 0x72, 0x52, 0x06, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x12, 0x44, 0x0a, 0x04,
	0x73, 0x70, 0x65, 0x63, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x30, 0x2e, 0x74, 0x65, 0x6c,
	0x65, 0x70, 0x6f, 0x72, 0x74, 0x2e, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x63,
	0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65,
	0x72, 0x79, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x53, 0x70, 0x65, 0x63, 0x52, 0x04, 0x73, 0x70,
	0x65, 0x63, 0x22, 0xe1, 0x01, 0x0a, 0x13, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79,
	0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x53, 0x70, 0x65, 0x63, 0x12, 0x27, 0x0a, 0x0f, 0x64, 0x69,
	0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x5f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0e, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x47, 0x72,
	0x6f, 0x75, 0x70, 0x12, 0x23, 0x0a, 0x03, 0x61, 0x77, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x11, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x41, 0x57, 0x53, 0x4d, 0x61, 0x74, 0x63,
	0x68, 0x65, 0x72, 0x52, 0x03, 0x61, 0x77, 0x73, 0x12, 0x29, 0x0a, 0x05, 0x61, 0x7a, 0x75, 0x72,
	0x65, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e,
	0x41, 0x7a, 0x75, 0x72, 0x65, 0x4d, 0x61, 0x74, 0x63, 0x68, 0x65, 0x72, 0x52, 0x05, 0x61, 0x7a,
	0x75, 0x72, 0x65, 0x12, 0x23, 0x0a, 0x03, 0x67, 0x63, 0x70, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x11, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x47, 0x43, 0x50, 0x4d, 0x61, 0x74, 0x63,
	0x68, 0x65, 0x72, 0x52, 0x03, 0x67, 0x63, 0x70, 0x12, 0x2c, 0x0a, 0x04, 0x6b, 0x75, 0x62, 0x65,
	0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x4b,
	0x75, 0x62, 0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x4d, 0x61, 0x74, 0x63, 0x68, 0x65, 0x72,
	0x52, 0x04, 0x6b, 0x75, 0x62, 0x65, 0x42, 0x62, 0x5a, 0x60, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x67, 0x72, 0x61, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x61, 0x6c, 0x2f, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x67, 0x65, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x65, 0x6c,
	0x65, 0x70, 0x6f, 0x72, 0x74, 0x2f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x63,
	0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2f, 0x76, 0x31, 0x3b, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65,
	0x72, 0x79, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDescOnce sync.Once
	file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDescData = file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDesc
)

func file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDescGZIP() []byte {
	file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDescOnce.Do(func() {
		file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDescData = protoimpl.X.CompressGZIP(file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDescData)
	})
	return file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDescData
}

var file_teleport_discoveryconfig_v1_discoveryconfig_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_teleport_discoveryconfig_v1_discoveryconfig_proto_goTypes = []interface{}{
	(*DiscoveryConfig)(nil),         // 0: teleport.discoveryconfig.v1.DiscoveryConfig
	(*DiscoveryConfigSpec)(nil),     // 1: teleport.discoveryconfig.v1.DiscoveryConfigSpec
	(*v1.ResourceHeader)(nil),       // 2: teleport.header.v1.ResourceHeader
	(*types.AWSMatcher)(nil),        // 3: types.AWSMatcher
	(*types.AzureMatcher)(nil),      // 4: types.AzureMatcher
	(*types.GCPMatcher)(nil),        // 5: types.GCPMatcher
	(*types.KubernetesMatcher)(nil), // 6: types.KubernetesMatcher
}
var file_teleport_discoveryconfig_v1_discoveryconfig_proto_depIdxs = []int32{
	2, // 0: teleport.discoveryconfig.v1.DiscoveryConfig.header:type_name -> teleport.header.v1.ResourceHeader
	1, // 1: teleport.discoveryconfig.v1.DiscoveryConfig.spec:type_name -> teleport.discoveryconfig.v1.DiscoveryConfigSpec
	3, // 2: teleport.discoveryconfig.v1.DiscoveryConfigSpec.aws:type_name -> types.AWSMatcher
	4, // 3: teleport.discoveryconfig.v1.DiscoveryConfigSpec.azure:type_name -> types.AzureMatcher
	5, // 4: teleport.discoveryconfig.v1.DiscoveryConfigSpec.gcp:type_name -> types.GCPMatcher
	6, // 5: teleport.discoveryconfig.v1.DiscoveryConfigSpec.kube:type_name -> types.KubernetesMatcher
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_teleport_discoveryconfig_v1_discoveryconfig_proto_init() }
func file_teleport_discoveryconfig_v1_discoveryconfig_proto_init() {
	if File_teleport_discoveryconfig_v1_discoveryconfig_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_teleport_discoveryconfig_v1_discoveryconfig_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DiscoveryConfig); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_teleport_discoveryconfig_v1_discoveryconfig_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DiscoveryConfigSpec); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_teleport_discoveryconfig_v1_discoveryconfig_proto_goTypes,
		DependencyIndexes: file_teleport_discoveryconfig_v1_discoveryconfig_proto_depIdxs,
		MessageInfos:      file_teleport_discoveryconfig_v1_discoveryconfig_proto_msgTypes,
	}.Build()
	File_teleport_discoveryconfig_v1_discoveryconfig_proto = out.File
	file_teleport_discoveryconfig_v1_discoveryconfig_proto_rawDesc = nil
	file_teleport_discoveryconfig_v1_discoveryconfig_proto_goTypes = nil
	file_teleport_discoveryconfig_v1_discoveryconfig_proto_depIdxs = nil
}
