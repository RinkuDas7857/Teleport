// Copyright 2021 Gravitational, Inc
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
// source: teleport/lib/teleterm/v1/access_request.proto

package teletermv1

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

type AccessRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// the request state of Access Request. option of PENDING, APPROVED, DENIED, PROMOTED, NONE
	State         string `protobuf:"bytes,2,opt,name=state,proto3" json:"state,omitempty"`
	ResolveReason string `protobuf:"bytes,3,opt,name=resolve_reason,json=resolveReason,proto3" json:"resolve_reason,omitempty"`
	RequestReason string `protobuf:"bytes,4,opt,name=request_reason,json=requestReason,proto3" json:"request_reason,omitempty"`
	// user is the user who submitted the Access Request
	User string `protobuf:"bytes,5,opt,name=user,proto3" json:"user,omitempty"`
	// a list of roles requested in the AccessRequest
	Roles              []string               `protobuf:"bytes,6,rep,name=roles,proto3" json:"roles,omitempty"`
	Created            *timestamppb.Timestamp `protobuf:"bytes,7,opt,name=created,proto3" json:"created,omitempty"`
	Expires            *timestamppb.Timestamp `protobuf:"bytes,8,opt,name=expires,proto3" json:"expires,omitempty"`
	Reviews            []*AccessRequestReview `protobuf:"bytes,9,rep,name=reviews,proto3" json:"reviews,omitempty"`
	SuggestedReviewers []string               `protobuf:"bytes,10,rep,name=suggested_reviewers,json=suggestedReviewers,proto3" json:"suggested_reviewers,omitempty"`
	// thresholds specifies minimum amount of approvers or deniers. Defaults to 'default'
	ThresholdNames []string `protobuf:"bytes,11,rep,name=threshold_names,json=thresholdNames,proto3" json:"threshold_names,omitempty"`
	// TODO(avatus) remove the resource_ids field once the changes to rely on resources instead is merged
	// a list of resourceIDs requested in the AccessRequest
	ResourceIds []*ResourceID `protobuf:"bytes,12,rep,name=resource_ids,json=resourceIds,proto3" json:"resource_ids,omitempty"`
	Resources   []*Resource   `protobuf:"bytes,13,rep,name=resources,proto3" json:"resources,omitempty"`
	// promoted_access_list_title is the title of the access
	// list that this access request was promoted to.
	PromotedAccessListTitle string `protobuf:"bytes,14,opt,name=promoted_access_list_title,json=promotedAccessListTitle,proto3" json:"promoted_access_list_title,omitempty"`
}

func (x *AccessRequest) Reset() {
	*x = AccessRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessRequest) ProtoMessage() {}

func (x *AccessRequest) ProtoReflect() protoreflect.Message {
	mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessRequest.ProtoReflect.Descriptor instead.
func (*AccessRequest) Descriptor() ([]byte, []int) {
	return file_teleport_lib_teleterm_v1_access_request_proto_rawDescGZIP(), []int{0}
}

func (x *AccessRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *AccessRequest) GetState() string {
	if x != nil {
		return x.State
	}
	return ""
}

func (x *AccessRequest) GetResolveReason() string {
	if x != nil {
		return x.ResolveReason
	}
	return ""
}

func (x *AccessRequest) GetRequestReason() string {
	if x != nil {
		return x.RequestReason
	}
	return ""
}

func (x *AccessRequest) GetUser() string {
	if x != nil {
		return x.User
	}
	return ""
}

func (x *AccessRequest) GetRoles() []string {
	if x != nil {
		return x.Roles
	}
	return nil
}

func (x *AccessRequest) GetCreated() *timestamppb.Timestamp {
	if x != nil {
		return x.Created
	}
	return nil
}

func (x *AccessRequest) GetExpires() *timestamppb.Timestamp {
	if x != nil {
		return x.Expires
	}
	return nil
}

func (x *AccessRequest) GetReviews() []*AccessRequestReview {
	if x != nil {
		return x.Reviews
	}
	return nil
}

func (x *AccessRequest) GetSuggestedReviewers() []string {
	if x != nil {
		return x.SuggestedReviewers
	}
	return nil
}

func (x *AccessRequest) GetThresholdNames() []string {
	if x != nil {
		return x.ThresholdNames
	}
	return nil
}

func (x *AccessRequest) GetResourceIds() []*ResourceID {
	if x != nil {
		return x.ResourceIds
	}
	return nil
}

func (x *AccessRequest) GetResources() []*Resource {
	if x != nil {
		return x.Resources
	}
	return nil
}

func (x *AccessRequest) GetPromotedAccessListTitle() string {
	if x != nil {
		return x.PromotedAccessListTitle
	}
	return ""
}

type AccessRequestReview struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// author is the creator of the AccessRequestReview.
	Author string `protobuf:"bytes,1,opt,name=author,proto3" json:"author,omitempty"`
	// list of roles approved
	Roles []string `protobuf:"bytes,2,rep,name=roles,proto3" json:"roles,omitempty"`
	// the state of the review, either APPROVED or DENIED
	State string `protobuf:"bytes,3,opt,name=state,proto3" json:"state,omitempty"`
	// reason is why the request was approved or denied
	Reason  string                 `protobuf:"bytes,4,opt,name=reason,proto3" json:"reason,omitempty"`
	Created *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=created,proto3" json:"created,omitempty"`
	// promoted_access_list_title is the title of the access
	// list that the access request was promoted to.
	PromotedAccessListTitle string `protobuf:"bytes,6,opt,name=promoted_access_list_title,json=promotedAccessListTitle,proto3" json:"promoted_access_list_title,omitempty"`
}

func (x *AccessRequestReview) Reset() {
	*x = AccessRequestReview{}
	if protoimpl.UnsafeEnabled {
		mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessRequestReview) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessRequestReview) ProtoMessage() {}

func (x *AccessRequestReview) ProtoReflect() protoreflect.Message {
	mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessRequestReview.ProtoReflect.Descriptor instead.
func (*AccessRequestReview) Descriptor() ([]byte, []int) {
	return file_teleport_lib_teleterm_v1_access_request_proto_rawDescGZIP(), []int{1}
}

func (x *AccessRequestReview) GetAuthor() string {
	if x != nil {
		return x.Author
	}
	return ""
}

func (x *AccessRequestReview) GetRoles() []string {
	if x != nil {
		return x.Roles
	}
	return nil
}

func (x *AccessRequestReview) GetState() string {
	if x != nil {
		return x.State
	}
	return ""
}

func (x *AccessRequestReview) GetReason() string {
	if x != nil {
		return x.Reason
	}
	return ""
}

func (x *AccessRequestReview) GetCreated() *timestamppb.Timestamp {
	if x != nil {
		return x.Created
	}
	return nil
}

func (x *AccessRequestReview) GetPromotedAccessListTitle() string {
	if x != nil {
		return x.PromotedAccessListTitle
	}
	return ""
}

type ResourceID struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Kind            string `protobuf:"bytes,1,opt,name=kind,proto3" json:"kind,omitempty"`
	Name            string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	ClusterName     string `protobuf:"bytes,3,opt,name=cluster_name,json=clusterName,proto3" json:"cluster_name,omitempty"`
	SubResourceName string `protobuf:"bytes,4,opt,name=sub_resource_name,json=subResourceName,proto3" json:"sub_resource_name,omitempty"`
}

func (x *ResourceID) Reset() {
	*x = ResourceID{}
	if protoimpl.UnsafeEnabled {
		mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResourceID) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResourceID) ProtoMessage() {}

func (x *ResourceID) ProtoReflect() protoreflect.Message {
	mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResourceID.ProtoReflect.Descriptor instead.
func (*ResourceID) Descriptor() ([]byte, []int) {
	return file_teleport_lib_teleterm_v1_access_request_proto_rawDescGZIP(), []int{2}
}

func (x *ResourceID) GetKind() string {
	if x != nil {
		return x.Kind
	}
	return ""
}

func (x *ResourceID) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ResourceID) GetClusterName() string {
	if x != nil {
		return x.ClusterName
	}
	return ""
}

func (x *ResourceID) GetSubResourceName() string {
	if x != nil {
		return x.SubResourceName
	}
	return ""
}

type ResourceDetails struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Hostname     string `protobuf:"bytes,1,opt,name=hostname,proto3" json:"hostname,omitempty"`
	FriendlyName string `protobuf:"bytes,2,opt,name=friendly_name,json=friendlyName,proto3" json:"friendly_name,omitempty"`
}

func (x *ResourceDetails) Reset() {
	*x = ResourceDetails{}
	if protoimpl.UnsafeEnabled {
		mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResourceDetails) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResourceDetails) ProtoMessage() {}

func (x *ResourceDetails) ProtoReflect() protoreflect.Message {
	mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResourceDetails.ProtoReflect.Descriptor instead.
func (*ResourceDetails) Descriptor() ([]byte, []int) {
	return file_teleport_lib_teleterm_v1_access_request_proto_rawDescGZIP(), []int{3}
}

func (x *ResourceDetails) GetHostname() string {
	if x != nil {
		return x.Hostname
	}
	return ""
}

func (x *ResourceDetails) GetFriendlyName() string {
	if x != nil {
		return x.FriendlyName
	}
	return ""
}

type Resource struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id      *ResourceID      `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Details *ResourceDetails `protobuf:"bytes,2,opt,name=details,proto3" json:"details,omitempty"`
}

func (x *Resource) Reset() {
	*x = Resource{}
	if protoimpl.UnsafeEnabled {
		mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Resource) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Resource) ProtoMessage() {}

func (x *Resource) ProtoReflect() protoreflect.Message {
	mi := &file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Resource.ProtoReflect.Descriptor instead.
func (*Resource) Descriptor() ([]byte, []int) {
	return file_teleport_lib_teleterm_v1_access_request_proto_rawDescGZIP(), []int{4}
}

func (x *Resource) GetId() *ResourceID {
	if x != nil {
		return x.Id
	}
	return nil
}

func (x *Resource) GetDetails() *ResourceDetails {
	if x != nil {
		return x.Details
	}
	return nil
}

var File_teleport_lib_teleterm_v1_access_request_proto protoreflect.FileDescriptor

var file_teleport_lib_teleterm_v1_access_request_proto_rawDesc = []byte{
	0x0a, 0x2d, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2f, 0x6c, 0x69, 0x62, 0x2f, 0x74,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x72, 0x6d, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x5f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x18, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2e, 0x6c, 0x69, 0x62, 0x2e, 0x74, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x84, 0x05, 0x0a, 0x0d, 0x41,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05,
	0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x73, 0x74, 0x61,
	0x74, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x72, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x5f, 0x72, 0x65,
	0x61, 0x73, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x72, 0x65, 0x73, 0x6f,
	0x6c, 0x76, 0x65, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x12, 0x25, 0x0a, 0x0e, 0x72, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x5f, 0x72, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0d, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e,
	0x12, 0x12, 0x0a, 0x04, 0x75, 0x73, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x75, 0x73, 0x65, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x18, 0x06, 0x20,
	0x03, 0x28, 0x09, 0x52, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x12, 0x34, 0x0a, 0x07, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x12, 0x34, 0x0a, 0x07, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x07, 0x65,
	0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x12, 0x47, 0x0a, 0x07, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77,
	0x73, 0x18, 0x09, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f,
	0x72, 0x74, 0x2e, 0x6c, 0x69, 0x62, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x72, 0x6d, 0x2e,
	0x76, 0x31, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x52, 0x65, 0x76, 0x69, 0x65, 0x77, 0x52, 0x07, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x73, 0x12,
	0x2f, 0x0a, 0x13, 0x73, 0x75, 0x67, 0x67, 0x65, 0x73, 0x74, 0x65, 0x64, 0x5f, 0x72, 0x65, 0x76,
	0x69, 0x65, 0x77, 0x65, 0x72, 0x73, 0x18, 0x0a, 0x20, 0x03, 0x28, 0x09, 0x52, 0x12, 0x73, 0x75,
	0x67, 0x67, 0x65, 0x73, 0x74, 0x65, 0x64, 0x52, 0x65, 0x76, 0x69, 0x65, 0x77, 0x65, 0x72, 0x73,
	0x12, 0x27, 0x0a, 0x0f, 0x74, 0x68, 0x72, 0x65, 0x73, 0x68, 0x6f, 0x6c, 0x64, 0x5f, 0x6e, 0x61,
	0x6d, 0x65, 0x73, 0x18, 0x0b, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0e, 0x74, 0x68, 0x72, 0x65, 0x73,
	0x68, 0x6f, 0x6c, 0x64, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x12, 0x47, 0x0a, 0x0c, 0x72, 0x65, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x69, 0x64, 0x73, 0x18, 0x0c, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x24, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2e, 0x6c, 0x69, 0x62, 0x2e, 0x74,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x49, 0x44, 0x52, 0x0b, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x49,
	0x64, 0x73, 0x12, 0x40, 0x0a, 0x09, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x18,
	0x0d, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74,
	0x2e, 0x6c, 0x69, 0x62, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x72, 0x6d, 0x2e, 0x76, 0x31,
	0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x09, 0x72, 0x65, 0x73, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x73, 0x12, 0x3b, 0x0a, 0x1a, 0x70, 0x72, 0x6f, 0x6d, 0x6f, 0x74, 0x65, 0x64,
	0x5f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x6c, 0x69, 0x73, 0x74, 0x5f, 0x74, 0x69, 0x74,
	0x6c, 0x65, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x17, 0x70, 0x72, 0x6f, 0x6d, 0x6f, 0x74,
	0x65, 0x64, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x69, 0x74, 0x6c,
	0x65, 0x22, 0xe4, 0x01, 0x0a, 0x13, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x52, 0x65, 0x76, 0x69, 0x65, 0x77, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x75, 0x74,
	0x68, 0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x75, 0x74, 0x68, 0x6f,
	0x72, 0x12, 0x14, 0x0a, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x72, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x72,
	0x65, 0x61, 0x73, 0x6f, 0x6e, 0x12, 0x34, 0x0a, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x52, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x12, 0x3b, 0x0a, 0x1a, 0x70,
	0x72, 0x6f, 0x6d, 0x6f, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x6c,
	0x69, 0x73, 0x74, 0x5f, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x17, 0x70, 0x72, 0x6f, 0x6d, 0x6f, 0x74, 0x65, 0x64, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x4c,
	0x69, 0x73, 0x74, 0x54, 0x69, 0x74, 0x6c, 0x65, 0x22, 0x83, 0x01, 0x0a, 0x0a, 0x52, 0x65, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x49, 0x44, 0x12, 0x12, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x21, 0x0a, 0x0c, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x4e, 0x61,
	0x6d, 0x65, 0x12, 0x2a, 0x0a, 0x11, 0x73, 0x75, 0x62, 0x5f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x73,
	0x75, 0x62, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x22, 0x52,
	0x0a, 0x0f, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c,
	0x73, 0x12, 0x1a, 0x0a, 0x08, 0x68, 0x6f, 0x73, 0x74, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x68, 0x6f, 0x73, 0x74, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x23, 0x0a,
	0x0d, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x6c, 0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x6c, 0x79, 0x4e, 0x61,
	0x6d, 0x65, 0x22, 0x85, 0x01, 0x0a, 0x08, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12,
	0x34, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x74, 0x65,
	0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2e, 0x6c, 0x69, 0x62, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x49,
	0x44, 0x52, 0x02, 0x69, 0x64, 0x12, 0x43, 0x0a, 0x07, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x29, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72,
	0x74, 0x2e, 0x6c, 0x69, 0x62, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x72, 0x6d, 0x2e, 0x76,
	0x31, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c,
	0x73, 0x52, 0x07, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x42, 0x54, 0x5a, 0x52, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x67, 0x72, 0x61, 0x76, 0x69, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x61, 0x6c, 0x2f, 0x74, 0x65, 0x6c, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x2f,
	0x67, 0x65, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x65, 0x6c,
	0x65, 0x70, 0x6f, 0x72, 0x74, 0x2f, 0x6c, 0x69, 0x62, 0x2f, 0x74, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x72, 0x6d, 0x2f, 0x76, 0x31, 0x3b, 0x74, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x72, 0x6d, 0x76, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_teleport_lib_teleterm_v1_access_request_proto_rawDescOnce sync.Once
	file_teleport_lib_teleterm_v1_access_request_proto_rawDescData = file_teleport_lib_teleterm_v1_access_request_proto_rawDesc
)

func file_teleport_lib_teleterm_v1_access_request_proto_rawDescGZIP() []byte {
	file_teleport_lib_teleterm_v1_access_request_proto_rawDescOnce.Do(func() {
		file_teleport_lib_teleterm_v1_access_request_proto_rawDescData = protoimpl.X.CompressGZIP(file_teleport_lib_teleterm_v1_access_request_proto_rawDescData)
	})
	return file_teleport_lib_teleterm_v1_access_request_proto_rawDescData
}

var file_teleport_lib_teleterm_v1_access_request_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_teleport_lib_teleterm_v1_access_request_proto_goTypes = []interface{}{
	(*AccessRequest)(nil),         // 0: teleport.lib.teleterm.v1.AccessRequest
	(*AccessRequestReview)(nil),   // 1: teleport.lib.teleterm.v1.AccessRequestReview
	(*ResourceID)(nil),            // 2: teleport.lib.teleterm.v1.ResourceID
	(*ResourceDetails)(nil),       // 3: teleport.lib.teleterm.v1.ResourceDetails
	(*Resource)(nil),              // 4: teleport.lib.teleterm.v1.Resource
	(*timestamppb.Timestamp)(nil), // 5: google.protobuf.Timestamp
}
var file_teleport_lib_teleterm_v1_access_request_proto_depIdxs = []int32{
	5, // 0: teleport.lib.teleterm.v1.AccessRequest.created:type_name -> google.protobuf.Timestamp
	5, // 1: teleport.lib.teleterm.v1.AccessRequest.expires:type_name -> google.protobuf.Timestamp
	1, // 2: teleport.lib.teleterm.v1.AccessRequest.reviews:type_name -> teleport.lib.teleterm.v1.AccessRequestReview
	2, // 3: teleport.lib.teleterm.v1.AccessRequest.resource_ids:type_name -> teleport.lib.teleterm.v1.ResourceID
	4, // 4: teleport.lib.teleterm.v1.AccessRequest.resources:type_name -> teleport.lib.teleterm.v1.Resource
	5, // 5: teleport.lib.teleterm.v1.AccessRequestReview.created:type_name -> google.protobuf.Timestamp
	2, // 6: teleport.lib.teleterm.v1.Resource.id:type_name -> teleport.lib.teleterm.v1.ResourceID
	3, // 7: teleport.lib.teleterm.v1.Resource.details:type_name -> teleport.lib.teleterm.v1.ResourceDetails
	8, // [8:8] is the sub-list for method output_type
	8, // [8:8] is the sub-list for method input_type
	8, // [8:8] is the sub-list for extension type_name
	8, // [8:8] is the sub-list for extension extendee
	0, // [0:8] is the sub-list for field type_name
}

func init() { file_teleport_lib_teleterm_v1_access_request_proto_init() }
func file_teleport_lib_teleterm_v1_access_request_proto_init() {
	if File_teleport_lib_teleterm_v1_access_request_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccessRequest); i {
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
		file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccessRequestReview); i {
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
		file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResourceID); i {
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
		file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResourceDetails); i {
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
		file_teleport_lib_teleterm_v1_access_request_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Resource); i {
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
			RawDescriptor: file_teleport_lib_teleterm_v1_access_request_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_teleport_lib_teleterm_v1_access_request_proto_goTypes,
		DependencyIndexes: file_teleport_lib_teleterm_v1_access_request_proto_depIdxs,
		MessageInfos:      file_teleport_lib_teleterm_v1_access_request_proto_msgTypes,
	}.Build()
	File_teleport_lib_teleterm_v1_access_request_proto = out.File
	file_teleport_lib_teleterm_v1_access_request_proto_rawDesc = nil
	file_teleport_lib_teleterm_v1_access_request_proto_goTypes = nil
	file_teleport_lib_teleterm_v1_access_request_proto_depIdxs = nil
}
