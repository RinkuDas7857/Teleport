// source: teleport/lib/teleterm/v1/service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var teleport_lib_teleterm_v1_app_pb = require('../../../../teleport/lib/teleterm/v1/app_pb.js');
goog.object.extend(proto, teleport_lib_teleterm_v1_app_pb);
var teleport_lib_teleterm_v1_auth_settings_pb = require('../../../../teleport/lib/teleterm/v1/auth_settings_pb.js');
goog.object.extend(proto, teleport_lib_teleterm_v1_auth_settings_pb);
var teleport_lib_teleterm_v1_cluster_pb = require('../../../../teleport/lib/teleterm/v1/cluster_pb.js');
goog.object.extend(proto, teleport_lib_teleterm_v1_cluster_pb);
var teleport_lib_teleterm_v1_database_pb = require('../../../../teleport/lib/teleterm/v1/database_pb.js');
goog.object.extend(proto, teleport_lib_teleterm_v1_database_pb);
var teleport_lib_teleterm_v1_gateway_pb = require('../../../../teleport/lib/teleterm/v1/gateway_pb.js');
goog.object.extend(proto, teleport_lib_teleterm_v1_gateway_pb);
var teleport_lib_teleterm_v1_kube_pb = require('../../../../teleport/lib/teleterm/v1/kube_pb.js');
goog.object.extend(proto, teleport_lib_teleterm_v1_kube_pb);
var teleport_lib_teleterm_v1_server_pb = require('../../../../teleport/lib/teleterm/v1/server_pb.js');
goog.object.extend(proto, teleport_lib_teleterm_v1_server_pb);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.AddClusterRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.CreateGatewayRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.CredentialInfo', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.EmptyResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.GetClusterRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListAppsRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListAppsResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListClustersRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListClustersResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListDatabasesRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListDatabasesResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListGatewaysRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListGatewaysResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListKubesRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListKubesResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListLeafClustersRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListServersRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.ListServersResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.RequestCase', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginRequest.ParamsCase', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.LogoutRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.PasswordlessPrompt', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.RemoveClusterRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.RemoveGatewayRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.RestartGatewayRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.RemoveClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.RemoveClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.RemoveClusterRequest.displayName = 'proto.teleport.lib.teleterm.v1.RemoveClusterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.GetClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.GetClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.GetClusterRequest.displayName = 'proto.teleport.lib.teleterm.v1.GetClusterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.LogoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.LogoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.LogoutRequest.displayName = 'proto.teleport.lib.teleterm.v1.LogoutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.CredentialInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.CredentialInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.CredentialInfo.displayName = 'proto.teleport.lib.teleterm.v1.CredentialInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.displayName = 'proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.oneofGroups_);
};
goog.inherits(proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.displayName = 'proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.displayName = 'proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.displayName = 'proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.displayName = 'proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.teleport.lib.teleterm.v1.LoginRequest.oneofGroups_);
};
goog.inherits(proto.teleport.lib.teleterm.v1.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.LoginRequest.displayName = 'proto.teleport.lib.teleterm.v1.LoginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.displayName = 'proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.displayName = 'proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.AddClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.AddClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.AddClusterRequest.displayName = 'proto.teleport.lib.teleterm.v1.AddClusterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListKubesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListKubesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListKubesRequest.displayName = 'proto.teleport.lib.teleterm.v1.ListKubesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListAppsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListAppsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListAppsRequest.displayName = 'proto.teleport.lib.teleterm.v1.ListAppsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListClustersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListClustersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListClustersRequest.displayName = 'proto.teleport.lib.teleterm.v1.ListClustersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.ListClustersResponse.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListClustersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListClustersResponse.displayName = 'proto.teleport.lib.teleterm.v1.ListClustersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListDatabasesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListDatabasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListDatabasesRequest.displayName = 'proto.teleport.lib.teleterm.v1.ListDatabasesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListLeafClustersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListLeafClustersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.displayName = 'proto.teleport.lib.teleterm.v1.ListLeafClustersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.ListDatabasesResponse.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListDatabasesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListDatabasesResponse.displayName = 'proto.teleport.lib.teleterm.v1.ListDatabasesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.displayName = 'proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.displayName = 'proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.CreateGatewayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.CreateGatewayRequest.displayName = 'proto.teleport.lib.teleterm.v1.CreateGatewayRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.ListGatewaysRequest.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListGatewaysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListGatewaysRequest.displayName = 'proto.teleport.lib.teleterm.v1.ListGatewaysRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.ListGatewaysResponse.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListGatewaysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListGatewaysResponse.displayName = 'proto.teleport.lib.teleterm.v1.ListGatewaysResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.RemoveGatewayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.RemoveGatewayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.displayName = 'proto.teleport.lib.teleterm.v1.RemoveGatewayRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.RestartGatewayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.RestartGatewayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.RestartGatewayRequest.displayName = 'proto.teleport.lib.teleterm.v1.RestartGatewayRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.displayName = 'proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.displayName = 'proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListServersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListServersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListServersRequest.displayName = 'proto.teleport.lib.teleterm.v1.ListServersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListServersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.ListServersResponse.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListServersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListServersResponse.displayName = 'proto.teleport.lib.teleterm.v1.ListServersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.ListKubesResponse.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListKubesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListKubesResponse.displayName = 'proto.teleport.lib.teleterm.v1.ListKubesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.ListAppsResponse.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.ListAppsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.ListAppsResponse.displayName = 'proto.teleport.lib.teleterm.v1.ListAppsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.displayName = 'proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.EmptyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.EmptyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.EmptyResponse.displayName = 'proto.teleport.lib.teleterm.v1.EmptyResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.RemoveClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.RemoveClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.RemoveClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.RemoveClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.RemoveClusterRequest}
 */
proto.teleport.lib.teleterm.v1.RemoveClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.RemoveClusterRequest;
  return proto.teleport.lib.teleterm.v1.RemoveClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.RemoveClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.RemoveClusterRequest}
 */
proto.teleport.lib.teleterm.v1.RemoveClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.RemoveClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.RemoveClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.RemoveClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.RemoveClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.RemoveClusterRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.RemoveClusterRequest} returns this
 */
proto.teleport.lib.teleterm.v1.RemoveClusterRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.GetClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.GetClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.GetClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.GetClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.GetClusterRequest}
 */
proto.teleport.lib.teleterm.v1.GetClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.GetClusterRequest;
  return proto.teleport.lib.teleterm.v1.GetClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.GetClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.GetClusterRequest}
 */
proto.teleport.lib.teleterm.v1.GetClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.GetClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.GetClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.GetClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.GetClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.GetClusterRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.GetClusterRequest} returns this
 */
proto.teleport.lib.teleterm.v1.GetClusterRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.LogoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.LogoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.LogoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LogoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.LogoutRequest}
 */
proto.teleport.lib.teleterm.v1.LogoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.LogoutRequest;
  return proto.teleport.lib.teleterm.v1.LogoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.LogoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.LogoutRequest}
 */
proto.teleport.lib.teleterm.v1.LogoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.LogoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.LogoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.LogoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LogoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.LogoutRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.LogoutRequest} returns this
 */
proto.teleport.lib.teleterm.v1.LogoutRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.CredentialInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.CredentialInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.CredentialInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.CredentialInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.CredentialInfo}
 */
proto.teleport.lib.teleterm.v1.CredentialInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.CredentialInfo;
  return proto.teleport.lib.teleterm.v1.CredentialInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.CredentialInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.CredentialInfo}
 */
proto.teleport.lib.teleterm.v1.CredentialInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.CredentialInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.CredentialInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.CredentialInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.CredentialInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.CredentialInfo.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.CredentialInfo} returns this
 */
proto.teleport.lib.teleterm.v1.CredentialInfo.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    prompt: jspb.Message.getFieldWithDefault(msg, 1, 0),
    credentialsList: jspb.Message.toObjectList(msg.getCredentialsList(),
    proto.teleport.lib.teleterm.v1.CredentialInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse;
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.teleport.lib.teleterm.v1.PasswordlessPrompt} */ (reader.readEnum());
      msg.setPrompt(value);
      break;
    case 2:
      var value = new proto.teleport.lib.teleterm.v1.CredentialInfo;
      reader.readMessage(value,proto.teleport.lib.teleterm.v1.CredentialInfo.deserializeBinaryFromReader);
      msg.addCredentials(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrompt();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCredentialsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.teleport.lib.teleterm.v1.CredentialInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PasswordlessPrompt prompt = 1;
 * @return {!proto.teleport.lib.teleterm.v1.PasswordlessPrompt}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.prototype.getPrompt = function() {
  return /** @type {!proto.teleport.lib.teleterm.v1.PasswordlessPrompt} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.teleport.lib.teleterm.v1.PasswordlessPrompt} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse} returns this
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.prototype.setPrompt = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated CredentialInfo credentials = 2;
 * @return {!Array<!proto.teleport.lib.teleterm.v1.CredentialInfo>}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.prototype.getCredentialsList = function() {
  return /** @type{!Array<!proto.teleport.lib.teleterm.v1.CredentialInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.teleport.lib.teleterm.v1.CredentialInfo, 2));
};


/**
 * @param {!Array<!proto.teleport.lib.teleterm.v1.CredentialInfo>} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse} returns this
*/
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.prototype.setCredentialsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.teleport.lib.teleterm.v1.CredentialInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.CredentialInfo}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.prototype.addCredentials = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.teleport.lib.teleterm.v1.CredentialInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse} returns this
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessResponse.prototype.clearCredentialsList = function() {
  return this.setCredentialsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.RequestCase = {
  REQUEST_NOT_SET: 0,
  INIT: 1,
  PIN: 2,
  CREDENTIAL: 3
};

/**
 * @return {proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.RequestCase}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.getRequestCase = function() {
  return /** @type {proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.RequestCase} */(jspb.Message.computeOneofCase(this, proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    init: (f = msg.getInit()) && proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.toObject(includeInstance, f),
    pin: (f = msg.getPin()) && proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.toObject(includeInstance, f),
    credential: (f = msg.getCredential()) && proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest;
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit;
      reader.readMessage(value,proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.deserializeBinaryFromReader);
      msg.setInit(value);
      break;
    case 2:
      var value = new proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse;
      reader.readMessage(value,proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.deserializeBinaryFromReader);
      msg.setPin(value);
      break;
    case 3:
      var value = new proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse;
      reader.readMessage(value,proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.deserializeBinaryFromReader);
      msg.setCredential(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.serializeBinaryToWriter
    );
  }
  f = message.getPin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.serializeBinaryToWriter
    );
  }
  f = message.getCredential();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit;
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit} returns this
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse;
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse} returns this
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse.prototype.setPin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse;
  return proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 index = 1;
 * @return {number}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse} returns this
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional LoginPasswordlessRequestInit init = 1;
 * @return {?proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.getInit = function() {
  return /** @type{?proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit} */ (
    jspb.Message.getWrapperField(this, proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit, 1));
};


/**
 * @param {?proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessRequestInit|undefined} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest} returns this
*/
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.setInit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest} returns this
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.clearInit = function() {
  return this.setInit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.hasInit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LoginPasswordlessPINResponse pin = 2;
 * @return {?proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.getPin = function() {
  return /** @type{?proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse} */ (
    jspb.Message.getWrapperField(this, proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse, 2));
};


/**
 * @param {?proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessPINResponse|undefined} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest} returns this
*/
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.setPin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest} returns this
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.clearPin = function() {
  return this.setPin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.hasPin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LoginPasswordlessCredentialResponse credential = 3;
 * @return {?proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.getCredential = function() {
  return /** @type{?proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse} */ (
    jspb.Message.getWrapperField(this, proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse, 3));
};


/**
 * @param {?proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.LoginPasswordlessCredentialResponse|undefined} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest} returns this
*/
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.setCredential = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest} returns this
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.clearCredential = function() {
  return this.setCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.teleport.lib.teleterm.v1.LoginPasswordlessRequest.prototype.hasCredential = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.teleport.lib.teleterm.v1.LoginRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.ParamsCase = {
  PARAMS_NOT_SET: 0,
  LOCAL: 2,
  SSO: 3
};

/**
 * @return {proto.teleport.lib.teleterm.v1.LoginRequest.ParamsCase}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.getParamsCase = function() {
  return /** @type {proto.teleport.lib.teleterm.v1.LoginRequest.ParamsCase} */(jspb.Message.computeOneofCase(this, proto.teleport.lib.teleterm.v1.LoginRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    local: (f = msg.getLocal()) && proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.toObject(includeInstance, f),
    sso: (f = msg.getSso()) && proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.LoginRequest;
  return proto.teleport.lib.teleterm.v1.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    case 2:
      var value = new proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams;
      reader.readMessage(value,proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.deserializeBinaryFromReader);
      msg.setLocal(value);
      break;
    case 3:
      var value = new proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams;
      reader.readMessage(value,proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.deserializeBinaryFromReader);
      msg.setSso(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.serializeBinaryToWriter
    );
  }
  f = message.getSso();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams;
  return proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string user = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams} returns this
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams} returns this
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams} returns this
 */
proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    providerType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    providerName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams;
  return proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProviderType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProviderName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string provider_type = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.prototype.getProviderType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams} returns this
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.prototype.setProviderType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string provider_name = 2;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.prototype.getProviderName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams} returns this
 */
proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams.prototype.setProviderName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest} returns this
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LocalParams local = 2;
 * @return {?proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.getLocal = function() {
  return /** @type{?proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams} */ (
    jspb.Message.getWrapperField(this, proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams, 2));
};


/**
 * @param {?proto.teleport.lib.teleterm.v1.LoginRequest.LocalParams|undefined} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest} returns this
*/
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.setLocal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.teleport.lib.teleterm.v1.LoginRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest} returns this
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.clearLocal = function() {
  return this.setLocal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.hasLocal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SsoParams sso = 3;
 * @return {?proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.getSso = function() {
  return /** @type{?proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams} */ (
    jspb.Message.getWrapperField(this, proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams, 3));
};


/**
 * @param {?proto.teleport.lib.teleterm.v1.LoginRequest.SsoParams|undefined} value
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest} returns this
*/
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.setSso = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.teleport.lib.teleterm.v1.LoginRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.teleport.lib.teleterm.v1.LoginRequest} returns this
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.clearSso = function() {
  return this.setSso(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.teleport.lib.teleterm.v1.LoginRequest.prototype.hasSso = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.AddClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.AddClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.AddClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.AddClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.AddClusterRequest}
 */
proto.teleport.lib.teleterm.v1.AddClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.AddClusterRequest;
  return proto.teleport.lib.teleterm.v1.AddClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.AddClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.AddClusterRequest}
 */
proto.teleport.lib.teleterm.v1.AddClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.AddClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.AddClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.AddClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.AddClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.AddClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.AddClusterRequest} returns this
 */
proto.teleport.lib.teleterm.v1.AddClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListKubesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListKubesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListKubesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListKubesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListKubesRequest}
 */
proto.teleport.lib.teleterm.v1.ListKubesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListKubesRequest;
  return proto.teleport.lib.teleterm.v1.ListKubesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListKubesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListKubesRequest}
 */
proto.teleport.lib.teleterm.v1.ListKubesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListKubesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListKubesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListKubesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListKubesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.ListKubesRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.ListKubesRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ListKubesRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListAppsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListAppsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListAppsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListAppsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListAppsRequest}
 */
proto.teleport.lib.teleterm.v1.ListAppsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListAppsRequest;
  return proto.teleport.lib.teleterm.v1.ListAppsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListAppsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListAppsRequest}
 */
proto.teleport.lib.teleterm.v1.ListAppsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListAppsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListAppsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListAppsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListAppsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.ListAppsRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.ListAppsRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ListAppsRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListClustersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListClustersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListClustersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListClustersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListClustersRequest}
 */
proto.teleport.lib.teleterm.v1.ListClustersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListClustersRequest;
  return proto.teleport.lib.teleterm.v1.ListClustersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListClustersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListClustersRequest}
 */
proto.teleport.lib.teleterm.v1.ListClustersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListClustersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListClustersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListClustersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListClustersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListClustersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListClustersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clustersList: jspb.Message.toObjectList(msg.getClustersList(),
    teleport_lib_teleterm_v1_cluster_pb.Cluster.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListClustersResponse}
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListClustersResponse;
  return proto.teleport.lib.teleterm.v1.ListClustersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListClustersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListClustersResponse}
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new teleport_lib_teleterm_v1_cluster_pb.Cluster;
      reader.readMessage(value,teleport_lib_teleterm_v1_cluster_pb.Cluster.deserializeBinaryFromReader);
      msg.addClusters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListClustersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListClustersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      teleport_lib_teleterm_v1_cluster_pb.Cluster.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Cluster clusters = 1;
 * @return {!Array<!proto.teleport.lib.teleterm.v1.Cluster>}
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.prototype.getClustersList = function() {
  return /** @type{!Array<!proto.teleport.lib.teleterm.v1.Cluster>} */ (
    jspb.Message.getRepeatedWrapperField(this, teleport_lib_teleterm_v1_cluster_pb.Cluster, 1));
};


/**
 * @param {!Array<!proto.teleport.lib.teleterm.v1.Cluster>} value
 * @return {!proto.teleport.lib.teleterm.v1.ListClustersResponse} returns this
*/
proto.teleport.lib.teleterm.v1.ListClustersResponse.prototype.setClustersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.teleport.lib.teleterm.v1.Cluster=} opt_value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.Cluster}
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.prototype.addClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.teleport.lib.teleterm.v1.Cluster, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.ListClustersResponse} returns this
 */
proto.teleport.lib.teleterm.v1.ListClustersResponse.prototype.clearClustersList = function() {
  return this.setClustersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListDatabasesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabasesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListDatabasesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabasesRequest}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListDatabasesRequest;
  return proto.teleport.lib.teleterm.v1.ListDatabasesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabasesRequest}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListDatabasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListDatabasesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabasesRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ListDatabasesRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListLeafClustersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListLeafClustersRequest}
 */
proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListLeafClustersRequest;
  return proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListLeafClustersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListLeafClustersRequest}
 */
proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListLeafClustersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.ListLeafClustersRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ListLeafClustersRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListDatabasesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabasesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    databasesList: jspb.Message.toObjectList(msg.getDatabasesList(),
    teleport_lib_teleterm_v1_database_pb.Database.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabasesResponse}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListDatabasesResponse;
  return proto.teleport.lib.teleterm.v1.ListDatabasesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabasesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabasesResponse}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new teleport_lib_teleterm_v1_database_pb.Database;
      reader.readMessage(value,teleport_lib_teleterm_v1_database_pb.Database.deserializeBinaryFromReader);
      msg.addDatabases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListDatabasesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabasesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      teleport_lib_teleterm_v1_database_pb.Database.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Database databases = 1;
 * @return {!Array<!proto.teleport.lib.teleterm.v1.Database>}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.prototype.getDatabasesList = function() {
  return /** @type{!Array<!proto.teleport.lib.teleterm.v1.Database>} */ (
    jspb.Message.getRepeatedWrapperField(this, teleport_lib_teleterm_v1_database_pb.Database, 1));
};


/**
 * @param {!Array<!proto.teleport.lib.teleterm.v1.Database>} value
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabasesResponse} returns this
*/
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.prototype.setDatabasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.teleport.lib.teleterm.v1.Database=} opt_value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.Database}
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.prototype.addDatabases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.teleport.lib.teleterm.v1.Database, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabasesResponse} returns this
 */
proto.teleport.lib.teleterm.v1.ListDatabasesResponse.prototype.clearDatabasesList = function() {
  return this.setDatabasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dbUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest;
  return proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDbUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDbUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string db_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.prototype.getDbUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersRequest.prototype.setDbUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse;
  return proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string users = 1;
 * @return {!Array<string>}
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.prototype.getUsersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse} returns this
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse} returns this
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.prototype.addUsers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse} returns this
 */
proto.teleport.lib.teleterm.v1.ListDatabaseUsersResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.CreateGatewayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.CreateGatewayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    targetUser: jspb.Message.getFieldWithDefault(msg, 2, ""),
    localPort: jspb.Message.getFieldWithDefault(msg, 3, ""),
    targetSubresourceName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.CreateGatewayRequest}
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.CreateGatewayRequest;
  return proto.teleport.lib.teleterm.v1.CreateGatewayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.CreateGatewayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.CreateGatewayRequest}
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalPort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetSubresourceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.CreateGatewayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.CreateGatewayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocalPort();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTargetSubresourceName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string target_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.getTargetUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.CreateGatewayRequest} returns this
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.setTargetUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string target_user = 2;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.getTargetUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.CreateGatewayRequest} returns this
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.setTargetUser = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string local_port = 3;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.getLocalPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.CreateGatewayRequest} returns this
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.setLocalPort = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string target_subresource_name = 4;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.getTargetSubresourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.CreateGatewayRequest} returns this
 */
proto.teleport.lib.teleterm.v1.CreateGatewayRequest.prototype.setTargetSubresourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListGatewaysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListGatewaysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListGatewaysRequest}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListGatewaysRequest;
  return proto.teleport.lib.teleterm.v1.ListGatewaysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListGatewaysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListGatewaysRequest}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addClusterIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListGatewaysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListGatewaysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string cluster_ids = 1;
 * @return {!Array<string>}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.prototype.getClusterIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.teleport.lib.teleterm.v1.ListGatewaysRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.prototype.setClusterIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.ListGatewaysRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.prototype.addClusterIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.ListGatewaysRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ListGatewaysRequest.prototype.clearClusterIdsList = function() {
  return this.setClusterIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListGatewaysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListGatewaysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewaysList: jspb.Message.toObjectList(msg.getGatewaysList(),
    teleport_lib_teleterm_v1_gateway_pb.Gateway.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListGatewaysResponse}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListGatewaysResponse;
  return proto.teleport.lib.teleterm.v1.ListGatewaysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListGatewaysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListGatewaysResponse}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new teleport_lib_teleterm_v1_gateway_pb.Gateway;
      reader.readMessage(value,teleport_lib_teleterm_v1_gateway_pb.Gateway.deserializeBinaryFromReader);
      msg.addGateways(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListGatewaysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListGatewaysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewaysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      teleport_lib_teleterm_v1_gateway_pb.Gateway.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Gateway gateways = 1;
 * @return {!Array<!proto.teleport.lib.teleterm.v1.Gateway>}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.prototype.getGatewaysList = function() {
  return /** @type{!Array<!proto.teleport.lib.teleterm.v1.Gateway>} */ (
    jspb.Message.getRepeatedWrapperField(this, teleport_lib_teleterm_v1_gateway_pb.Gateway, 1));
};


/**
 * @param {!Array<!proto.teleport.lib.teleterm.v1.Gateway>} value
 * @return {!proto.teleport.lib.teleterm.v1.ListGatewaysResponse} returns this
*/
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.prototype.setGatewaysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.teleport.lib.teleterm.v1.Gateway=} opt_value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.Gateway}
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.prototype.addGateways = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.teleport.lib.teleterm.v1.Gateway, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.ListGatewaysResponse} returns this
 */
proto.teleport.lib.teleterm.v1.ListGatewaysResponse.prototype.clearGatewaysList = function() {
  return this.setGatewaysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.RemoveGatewayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.RemoveGatewayRequest}
 */
proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.RemoveGatewayRequest;
  return proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.RemoveGatewayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.RemoveGatewayRequest}
 */
proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGatewayUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.RemoveGatewayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string gateway_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.prototype.getGatewayUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.RemoveGatewayRequest} returns this
 */
proto.teleport.lib.teleterm.v1.RemoveGatewayRequest.prototype.setGatewayUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.RestartGatewayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.RestartGatewayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.RestartGatewayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.RestartGatewayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.RestartGatewayRequest}
 */
proto.teleport.lib.teleterm.v1.RestartGatewayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.RestartGatewayRequest;
  return proto.teleport.lib.teleterm.v1.RestartGatewayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.RestartGatewayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.RestartGatewayRequest}
 */
proto.teleport.lib.teleterm.v1.RestartGatewayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGatewayUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.RestartGatewayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.RestartGatewayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.RestartGatewayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.RestartGatewayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string gateway_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.RestartGatewayRequest.prototype.getGatewayUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.RestartGatewayRequest} returns this
 */
proto.teleport.lib.teleterm.v1.RestartGatewayRequest.prototype.setGatewayUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    targetSubresourceName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest}
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest;
  return proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest}
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGatewayUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetSubresourceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetSubresourceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string gateway_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.prototype.getGatewayUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest} returns this
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.prototype.setGatewayUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string target_subresource_name = 2;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.prototype.getTargetSubresourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest} returns this
 */
proto.teleport.lib.teleterm.v1.SetGatewayTargetSubresourceNameRequest.prototype.setTargetSubresourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    localPort: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest}
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest;
  return proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest}
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGatewayUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocalPort();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string gateway_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.prototype.getGatewayUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest} returns this
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.prototype.setGatewayUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string local_port = 2;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.prototype.getLocalPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest} returns this
 */
proto.teleport.lib.teleterm.v1.SetGatewayLocalPortRequest.prototype.setLocalPort = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListServersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListServersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListServersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListServersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListServersRequest}
 */
proto.teleport.lib.teleterm.v1.ListServersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListServersRequest;
  return proto.teleport.lib.teleterm.v1.ListServersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListServersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListServersRequest}
 */
proto.teleport.lib.teleterm.v1.ListServersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListServersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListServersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListServersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListServersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.ListServersRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.ListServersRequest} returns this
 */
proto.teleport.lib.teleterm.v1.ListServersRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListServersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListServersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    serversList: jspb.Message.toObjectList(msg.getServersList(),
    teleport_lib_teleterm_v1_server_pb.Server.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListServersResponse}
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListServersResponse;
  return proto.teleport.lib.teleterm.v1.ListServersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListServersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListServersResponse}
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new teleport_lib_teleterm_v1_server_pb.Server;
      reader.readMessage(value,teleport_lib_teleterm_v1_server_pb.Server.deserializeBinaryFromReader);
      msg.addServers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListServersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListServersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      teleport_lib_teleterm_v1_server_pb.Server.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Server servers = 1;
 * @return {!Array<!proto.teleport.lib.teleterm.v1.Server>}
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.prototype.getServersList = function() {
  return /** @type{!Array<!proto.teleport.lib.teleterm.v1.Server>} */ (
    jspb.Message.getRepeatedWrapperField(this, teleport_lib_teleterm_v1_server_pb.Server, 1));
};


/**
 * @param {!Array<!proto.teleport.lib.teleterm.v1.Server>} value
 * @return {!proto.teleport.lib.teleterm.v1.ListServersResponse} returns this
*/
proto.teleport.lib.teleterm.v1.ListServersResponse.prototype.setServersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.teleport.lib.teleterm.v1.Server=} opt_value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.Server}
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.prototype.addServers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.teleport.lib.teleterm.v1.Server, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.ListServersResponse} returns this
 */
proto.teleport.lib.teleterm.v1.ListServersResponse.prototype.clearServersList = function() {
  return this.setServersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListKubesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListKubesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    kubesList: jspb.Message.toObjectList(msg.getKubesList(),
    teleport_lib_teleterm_v1_kube_pb.Kube.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListKubesResponse}
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListKubesResponse;
  return proto.teleport.lib.teleterm.v1.ListKubesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListKubesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListKubesResponse}
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new teleport_lib_teleterm_v1_kube_pb.Kube;
      reader.readMessage(value,teleport_lib_teleterm_v1_kube_pb.Kube.deserializeBinaryFromReader);
      msg.addKubes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListKubesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListKubesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKubesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      teleport_lib_teleterm_v1_kube_pb.Kube.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Kube kubes = 1;
 * @return {!Array<!proto.teleport.lib.teleterm.v1.Kube>}
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.prototype.getKubesList = function() {
  return /** @type{!Array<!proto.teleport.lib.teleterm.v1.Kube>} */ (
    jspb.Message.getRepeatedWrapperField(this, teleport_lib_teleterm_v1_kube_pb.Kube, 1));
};


/**
 * @param {!Array<!proto.teleport.lib.teleterm.v1.Kube>} value
 * @return {!proto.teleport.lib.teleterm.v1.ListKubesResponse} returns this
*/
proto.teleport.lib.teleterm.v1.ListKubesResponse.prototype.setKubesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.teleport.lib.teleterm.v1.Kube=} opt_value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.Kube}
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.prototype.addKubes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.teleport.lib.teleterm.v1.Kube, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.ListKubesResponse} returns this
 */
proto.teleport.lib.teleterm.v1.ListKubesResponse.prototype.clearKubesList = function() {
  return this.setKubesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.ListAppsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.ListAppsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appsList: jspb.Message.toObjectList(msg.getAppsList(),
    teleport_lib_teleterm_v1_app_pb.App.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.ListAppsResponse}
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.ListAppsResponse;
  return proto.teleport.lib.teleterm.v1.ListAppsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.ListAppsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.ListAppsResponse}
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new teleport_lib_teleterm_v1_app_pb.App;
      reader.readMessage(value,teleport_lib_teleterm_v1_app_pb.App.deserializeBinaryFromReader);
      msg.addApps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.ListAppsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.ListAppsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      teleport_lib_teleterm_v1_app_pb.App.serializeBinaryToWriter
    );
  }
};


/**
 * repeated App apps = 1;
 * @return {!Array<!proto.teleport.lib.teleterm.v1.App>}
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.prototype.getAppsList = function() {
  return /** @type{!Array<!proto.teleport.lib.teleterm.v1.App>} */ (
    jspb.Message.getRepeatedWrapperField(this, teleport_lib_teleterm_v1_app_pb.App, 1));
};


/**
 * @param {!Array<!proto.teleport.lib.teleterm.v1.App>} value
 * @return {!proto.teleport.lib.teleterm.v1.ListAppsResponse} returns this
*/
proto.teleport.lib.teleterm.v1.ListAppsResponse.prototype.setAppsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.teleport.lib.teleterm.v1.App=} opt_value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.App}
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.prototype.addApps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.teleport.lib.teleterm.v1.App, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.ListAppsResponse} returns this
 */
proto.teleport.lib.teleterm.v1.ListAppsResponse.prototype.clearAppsList = function() {
  return this.setAppsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest}
 */
proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest;
  return proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest}
 */
proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_uri = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.prototype.getClusterUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest} returns this
 */
proto.teleport.lib.teleterm.v1.GetAuthSettingsRequest.prototype.setClusterUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.EmptyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.EmptyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.EmptyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.EmptyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.EmptyResponse}
 */
proto.teleport.lib.teleterm.v1.EmptyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.EmptyResponse;
  return proto.teleport.lib.teleterm.v1.EmptyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.EmptyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.EmptyResponse}
 */
proto.teleport.lib.teleterm.v1.EmptyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.EmptyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.EmptyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.EmptyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.EmptyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.teleport.lib.teleterm.v1.PasswordlessPrompt = {
  PASSWORDLESS_PROMPT_UNSPECIFIED: 0,
  PASSWORDLESS_PROMPT_PIN: 1,
  PASSWORDLESS_PROMPT_TAP: 2,
  PASSWORDLESS_PROMPT_CREDENTIAL: 3
};

goog.object.extend(exports, proto.teleport.lib.teleterm.v1);
