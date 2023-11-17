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

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: prehog/v1alpha/tbot.proto

package prehogv1alpha

import (
	reflect "reflect"
	sync "sync"

	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// RunMode specifies whether or not tbot has been configured to run once
// and output certificates, or continually renew certificates in the
// background.
type TbotStartEvent_RunMode int32

const (
	TbotStartEvent_RUN_MODE_UNSPECIFIED TbotStartEvent_RunMode = 0
	TbotStartEvent_RUN_MODE_ONE_SHOT    TbotStartEvent_RunMode = 1
	TbotStartEvent_RUN_MODE_DAEMON      TbotStartEvent_RunMode = 2
)

// Enum value maps for TbotStartEvent_RunMode.
var (
	TbotStartEvent_RunMode_name = map[int32]string{
		0: "RUN_MODE_UNSPECIFIED",
		1: "RUN_MODE_ONE_SHOT",
		2: "RUN_MODE_DAEMON",
	}
	TbotStartEvent_RunMode_value = map[string]int32{
		"RUN_MODE_UNSPECIFIED": 0,
		"RUN_MODE_ONE_SHOT":    1,
		"RUN_MODE_DAEMON":      2,
	}
)

func (x TbotStartEvent_RunMode) Enum() *TbotStartEvent_RunMode {
	p := new(TbotStartEvent_RunMode)
	*p = x
	return p
}

func (x TbotStartEvent_RunMode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TbotStartEvent_RunMode) Descriptor() protoreflect.EnumDescriptor {
	return file_prehog_v1alpha_tbot_proto_enumTypes[0].Descriptor()
}

func (TbotStartEvent_RunMode) Type() protoreflect.EnumType {
	return &file_prehog_v1alpha_tbot_proto_enumTypes[0]
}

func (x TbotStartEvent_RunMode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TbotStartEvent_RunMode.Descriptor instead.
func (TbotStartEvent_RunMode) EnumDescriptor() ([]byte, []int) {
	return file_prehog_v1alpha_tbot_proto_rawDescGZIP(), []int{0, 0}
}

// TbotStartEvent is triggered whenever tbot starts, regardless of whether tbot
// was able to successfully connect to or authenticate with a Teleport cluster.
type TbotStartEvent struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RunMode                 TbotStartEvent_RunMode `protobuf:"varint,1,opt,name=run_mode,json=runMode,proto3,enum=prehog.v1alpha.TbotStartEvent_RunMode" json:"run_mode,omitempty"`
	Version                 string                 `protobuf:"bytes,2,opt,name=version,proto3" json:"version,omitempty"`
	JoinType                string                 `protobuf:"bytes,3,opt,name=join_type,json=joinType,proto3" json:"join_type,omitempty"`
	Helper                  string                 `protobuf:"bytes,4,opt,name=helper,proto3" json:"helper,omitempty"`
	HelperVersion           string                 `protobuf:"bytes,5,opt,name=helper_version,json=helperVersion,proto3" json:"helper_version,omitempty"`
	DestinationsOther       int32                  `protobuf:"varint,6,opt,name=destinations_other,json=destinationsOther,proto3" json:"destinations_other,omitempty"`
	DestinationsDatabase    int32                  `protobuf:"varint,7,opt,name=destinations_database,json=destinationsDatabase,proto3" json:"destinations_database,omitempty"`
	DestinationsKubernetes  int32                  `protobuf:"varint,8,opt,name=destinations_kubernetes,json=destinationsKubernetes,proto3" json:"destinations_kubernetes,omitempty"`
	DestinationsApplication int32                  `protobuf:"varint,9,opt,name=destinations_application,json=destinationsApplication,proto3" json:"destinations_application,omitempty"`
}

func (x *TbotStartEvent) Reset() {
	*x = TbotStartEvent{}
	if protoimpl.UnsafeEnabled {
		mi := &file_prehog_v1alpha_tbot_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TbotStartEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TbotStartEvent) ProtoMessage() {}

func (x *TbotStartEvent) ProtoReflect() protoreflect.Message {
	mi := &file_prehog_v1alpha_tbot_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TbotStartEvent.ProtoReflect.Descriptor instead.
func (*TbotStartEvent) Descriptor() ([]byte, []int) {
	return file_prehog_v1alpha_tbot_proto_rawDescGZIP(), []int{0}
}

func (x *TbotStartEvent) GetRunMode() TbotStartEvent_RunMode {
	if x != nil {
		return x.RunMode
	}
	return TbotStartEvent_RUN_MODE_UNSPECIFIED
}

func (x *TbotStartEvent) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *TbotStartEvent) GetJoinType() string {
	if x != nil {
		return x.JoinType
	}
	return ""
}

func (x *TbotStartEvent) GetHelper() string {
	if x != nil {
		return x.Helper
	}
	return ""
}

func (x *TbotStartEvent) GetHelperVersion() string {
	if x != nil {
		return x.HelperVersion
	}
	return ""
}

func (x *TbotStartEvent) GetDestinationsOther() int32 {
	if x != nil {
		return x.DestinationsOther
	}
	return 0
}

func (x *TbotStartEvent) GetDestinationsDatabase() int32 {
	if x != nil {
		return x.DestinationsDatabase
	}
	return 0
}

func (x *TbotStartEvent) GetDestinationsKubernetes() int32 {
	if x != nil {
		return x.DestinationsKubernetes
	}
	return 0
}

func (x *TbotStartEvent) GetDestinationsApplication() int32 {
	if x != nil {
		return x.DestinationsApplication
	}
	return 0
}

type SubmitTbotEventRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// uuid identifying that tbot session. This is future-proofing for if we
	// decide to add multiple events in future, and need to tie them together.
	DistinctId string `protobuf:"bytes,1,opt,name=distinct_id,json=distinctId,proto3" json:"distinct_id,omitempty"`
	// optional, will default to the ingest time if unset
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	// Types that are assignable to Event:
	//
	//	*SubmitTbotEventRequest_Start
	Event isSubmitTbotEventRequest_Event `protobuf_oneof:"event"`
}

func (x *SubmitTbotEventRequest) Reset() {
	*x = SubmitTbotEventRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_prehog_v1alpha_tbot_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SubmitTbotEventRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SubmitTbotEventRequest) ProtoMessage() {}

func (x *SubmitTbotEventRequest) ProtoReflect() protoreflect.Message {
	mi := &file_prehog_v1alpha_tbot_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SubmitTbotEventRequest.ProtoReflect.Descriptor instead.
func (*SubmitTbotEventRequest) Descriptor() ([]byte, []int) {
	return file_prehog_v1alpha_tbot_proto_rawDescGZIP(), []int{1}
}

func (x *SubmitTbotEventRequest) GetDistinctId() string {
	if x != nil {
		return x.DistinctId
	}
	return ""
}

func (x *SubmitTbotEventRequest) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

func (m *SubmitTbotEventRequest) GetEvent() isSubmitTbotEventRequest_Event {
	if m != nil {
		return m.Event
	}
	return nil
}

func (x *SubmitTbotEventRequest) GetStart() *TbotStartEvent {
	if x, ok := x.GetEvent().(*SubmitTbotEventRequest_Start); ok {
		return x.Start
	}
	return nil
}

type isSubmitTbotEventRequest_Event interface {
	isSubmitTbotEventRequest_Event()
}

type SubmitTbotEventRequest_Start struct {
	Start *TbotStartEvent `protobuf:"bytes,3,opt,name=start,proto3,oneof"`
}

func (*SubmitTbotEventRequest_Start) isSubmitTbotEventRequest_Event() {}

type SubmitTbotEventResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *SubmitTbotEventResponse) Reset() {
	*x = SubmitTbotEventResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_prehog_v1alpha_tbot_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SubmitTbotEventResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SubmitTbotEventResponse) ProtoMessage() {}

func (x *SubmitTbotEventResponse) ProtoReflect() protoreflect.Message {
	mi := &file_prehog_v1alpha_tbot_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SubmitTbotEventResponse.ProtoReflect.Descriptor instead.
func (*SubmitTbotEventResponse) Descriptor() ([]byte, []int) {
	return file_prehog_v1alpha_tbot_proto_rawDescGZIP(), []int{2}
}

var File_prehog_v1alpha_tbot_proto protoreflect.FileDescriptor

var file_prehog_v1alpha_tbot_proto_rawDesc = []byte{
	0x0a, 0x19, 0x70, 0x72, 0x65, 0x68, 0x6f, 0x67, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x2f, 0x74, 0x62, 0x6f, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x70, 0x72, 0x65,
	0x68, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x1a, 0x1f, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf2, 0x03, 0x0a,
	0x0e, 0x54, 0x62, 0x6f, 0x74, 0x53, 0x74, 0x61, 0x72, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12,
	0x41, 0x0a, 0x08, 0x72, 0x75, 0x6e, 0x5f, 0x6d, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x26, 0x2e, 0x70, 0x72, 0x65, 0x68, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x2e, 0x54, 0x62, 0x6f, 0x74, 0x53, 0x74, 0x61, 0x72, 0x74, 0x45, 0x76, 0x65, 0x6e,
	0x74, 0x2e, 0x52, 0x75, 0x6e, 0x4d, 0x6f, 0x64, 0x65, 0x52, 0x07, 0x72, 0x75, 0x6e, 0x4d, 0x6f,
	0x64, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x1b, 0x0a, 0x09,
	0x6a, 0x6f, 0x69, 0x6e, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x6a, 0x6f, 0x69, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x68, 0x65, 0x6c,
	0x70, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x68, 0x65, 0x6c, 0x70, 0x65,
	0x72, 0x12, 0x25, 0x0a, 0x0e, 0x68, 0x65, 0x6c, 0x70, 0x65, 0x72, 0x5f, 0x76, 0x65, 0x72, 0x73,
	0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x68, 0x65, 0x6c, 0x70, 0x65,
	0x72, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x2d, 0x0a, 0x12, 0x64, 0x65, 0x73, 0x74,
	0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x6f, 0x74, 0x68, 0x65, 0x72, 0x18, 0x06,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x11, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x4f, 0x74, 0x68, 0x65, 0x72, 0x12, 0x33, 0x0a, 0x15, 0x64, 0x65, 0x73, 0x74, 0x69,
	0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x05, 0x52, 0x14, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x44, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x12, 0x37, 0x0a, 0x17,
	0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x6b, 0x75, 0x62,
	0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x18, 0x08, 0x20, 0x01, 0x28, 0x05, 0x52, 0x16, 0x64,
	0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x4b, 0x75, 0x62, 0x65, 0x72,
	0x6e, 0x65, 0x74, 0x65, 0x73, 0x12, 0x39, 0x0a, 0x18, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x09, 0x20, 0x01, 0x28, 0x05, 0x52, 0x17, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x41, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x22, 0x4f, 0x0a, 0x07, 0x52, 0x75, 0x6e, 0x4d, 0x6f, 0x64, 0x65, 0x12, 0x18, 0x0a, 0x14, 0x52,
	0x55, 0x4e, 0x5f, 0x4d, 0x4f, 0x44, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46,
	0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x52, 0x55, 0x4e, 0x5f, 0x4d, 0x4f, 0x44,
	0x45, 0x5f, 0x4f, 0x4e, 0x45, 0x5f, 0x53, 0x48, 0x4f, 0x54, 0x10, 0x01, 0x12, 0x13, 0x0a, 0x0f,
	0x52, 0x55, 0x4e, 0x5f, 0x4d, 0x4f, 0x44, 0x45, 0x5f, 0x44, 0x41, 0x45, 0x4d, 0x4f, 0x4e, 0x10,
	0x02, 0x22, 0xb4, 0x01, 0x0a, 0x16, 0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x54, 0x62, 0x6f, 0x74,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1f, 0x0a, 0x0b,
	0x64, 0x69, 0x73, 0x74, 0x69, 0x6e, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x64, 0x69, 0x73, 0x74, 0x69, 0x6e, 0x63, 0x74, 0x49, 0x64, 0x12, 0x38, 0x0a,
	0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x74, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x36, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x70, 0x72, 0x65, 0x68, 0x6f, 0x67, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x54, 0x62, 0x6f, 0x74, 0x53, 0x74, 0x61, 0x72,
	0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x48, 0x00, 0x52, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x42,
	0x07, 0x0a, 0x05, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x22, 0x19, 0x0a, 0x17, 0x53, 0x75, 0x62, 0x6d,
	0x69, 0x74, 0x54, 0x62, 0x6f, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x32, 0x7c, 0x0a, 0x14, 0x54, 0x62, 0x6f, 0x74, 0x52, 0x65, 0x70, 0x6f, 0x72,
	0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x64, 0x0a, 0x0f, 0x53,
	0x75, 0x62, 0x6d, 0x69, 0x74, 0x54, 0x62, 0x6f, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x26,
	0x2e, 0x70, 0x72, 0x65, 0x68, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e,
	0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x54, 0x62, 0x6f, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x27, 0x2e, 0x70, 0x72, 0x65, 0x68, 0x6f, 0x67, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x2e, 0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x54, 0x62,
	0x6f, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x42, 0xc5, 0x01, 0x0a, 0x12, 0x63, 0x6f, 0x6d, 0x2e, 0x70, 0x72, 0x65, 0x68, 0x6f, 0x67,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x42, 0x09, 0x54, 0x62, 0x6f, 0x74, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x4b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x67, 0x72, 0x61, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x6c, 0x2f,
	0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x65, 0x68, 0x6f, 0x67, 0x2f, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x3b, 0x70, 0x72, 0x65, 0x68, 0x6f, 0x67, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0xa2, 0x02, 0x03, 0x50, 0x58, 0x58, 0xaa, 0x02, 0x0e, 0x50, 0x72, 0x65, 0x68, 0x6f,
	0x67, 0x2e, 0x56, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0xca, 0x02, 0x0e, 0x50, 0x72, 0x65, 0x68,
	0x6f, 0x67, 0x5c, 0x56, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0xe2, 0x02, 0x1a, 0x50, 0x72, 0x65,
	0x68, 0x6f, 0x67, 0x5c, 0x56, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0f, 0x50, 0x72, 0x65, 0x68, 0x6f, 0x67,
	0x3a, 0x3a, 0x56, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_prehog_v1alpha_tbot_proto_rawDescOnce sync.Once
	file_prehog_v1alpha_tbot_proto_rawDescData = file_prehog_v1alpha_tbot_proto_rawDesc
)

func file_prehog_v1alpha_tbot_proto_rawDescGZIP() []byte {
	file_prehog_v1alpha_tbot_proto_rawDescOnce.Do(func() {
		file_prehog_v1alpha_tbot_proto_rawDescData = protoimpl.X.CompressGZIP(file_prehog_v1alpha_tbot_proto_rawDescData)
	})
	return file_prehog_v1alpha_tbot_proto_rawDescData
}

var file_prehog_v1alpha_tbot_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_prehog_v1alpha_tbot_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_prehog_v1alpha_tbot_proto_goTypes = []interface{}{
	(TbotStartEvent_RunMode)(0),     // 0: prehog.v1alpha.TbotStartEvent.RunMode
	(*TbotStartEvent)(nil),          // 1: prehog.v1alpha.TbotStartEvent
	(*SubmitTbotEventRequest)(nil),  // 2: prehog.v1alpha.SubmitTbotEventRequest
	(*SubmitTbotEventResponse)(nil), // 3: prehog.v1alpha.SubmitTbotEventResponse
	(*timestamppb.Timestamp)(nil),   // 4: google.protobuf.Timestamp
}
var file_prehog_v1alpha_tbot_proto_depIdxs = []int32{
	0, // 0: prehog.v1alpha.TbotStartEvent.run_mode:type_name -> prehog.v1alpha.TbotStartEvent.RunMode
	4, // 1: prehog.v1alpha.SubmitTbotEventRequest.timestamp:type_name -> google.protobuf.Timestamp
	1, // 2: prehog.v1alpha.SubmitTbotEventRequest.start:type_name -> prehog.v1alpha.TbotStartEvent
	2, // 3: prehog.v1alpha.TbotReportingService.SubmitTbotEvent:input_type -> prehog.v1alpha.SubmitTbotEventRequest
	3, // 4: prehog.v1alpha.TbotReportingService.SubmitTbotEvent:output_type -> prehog.v1alpha.SubmitTbotEventResponse
	4, // [4:5] is the sub-list for method output_type
	3, // [3:4] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_prehog_v1alpha_tbot_proto_init() }
func file_prehog_v1alpha_tbot_proto_init() {
	if File_prehog_v1alpha_tbot_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_prehog_v1alpha_tbot_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TbotStartEvent); i {
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
		file_prehog_v1alpha_tbot_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SubmitTbotEventRequest); i {
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
		file_prehog_v1alpha_tbot_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SubmitTbotEventResponse); i {
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
	file_prehog_v1alpha_tbot_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*SubmitTbotEventRequest_Start)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_prehog_v1alpha_tbot_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_prehog_v1alpha_tbot_proto_goTypes,
		DependencyIndexes: file_prehog_v1alpha_tbot_proto_depIdxs,
		EnumInfos:         file_prehog_v1alpha_tbot_proto_enumTypes,
		MessageInfos:      file_prehog_v1alpha_tbot_proto_msgTypes,
	}.Build()
	File_prehog_v1alpha_tbot_proto = out.File
	file_prehog_v1alpha_tbot_proto_rawDesc = nil
	file_prehog_v1alpha_tbot_proto_goTypes = nil
	file_prehog_v1alpha_tbot_proto_depIdxs = nil
}
