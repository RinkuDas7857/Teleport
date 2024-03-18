/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter long_type_number,eslint_disable,add_pb_suffix,server_grpc1,ts_nocheck
// @generated from protobuf file "teleport/devicetrust/v1/device.proto" (package "teleport.devicetrust.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
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
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { DeviceProfile } from "./device_profile_pb";
import { DeviceSource } from "./device_source_pb";
import { DeviceCollectedData } from "./device_collected_data_pb";
import { DeviceEnrollToken } from "./device_enroll_token_pb";
import { Timestamp } from "../../../google/protobuf/timestamp_pb";
import { OSType } from "./os_type_pb";
/**
 * Device represents a registered device.
 * Registered devices may be enrolled. Enrolled devices are allowed to perform
 * device-aware actions.
 *
 * @generated from protobuf message teleport.devicetrust.v1.Device
 */
export interface Device {
    /**
     * API version of the Device definition, present for compatibility with
     * types.DeviceV1.
     * Always "v1".
     *
     * @generated from protobuf field: string api_version = 1;
     */
    apiVersion: string;
    /**
     * Unique device identifier.
     * System managed.
     *
     * @generated from protobuf field: string id = 2;
     */
    id: string;
    /**
     * Device operating system.
     * Required.
     *
     * @generated from protobuf field: teleport.devicetrust.v1.OSType os_type = 3;
     */
    osType: OSType;
    /**
     * Device inventory identifier.
     * Takes different meanings depending on the device and operating system.
     * For macOS devices it is the device serial number.
     * Required.
     *
     * @generated from protobuf field: string asset_tag = 4;
     */
    assetTag: string;
    /**
     * Create time.
     * System managed.
     *
     * @generated from protobuf field: google.protobuf.Timestamp create_time = 5;
     */
    createTime?: Timestamp;
    /**
     * Last update time.
     * System managed.
     *
     * @generated from protobuf field: google.protobuf.Timestamp update_time = 6;
     */
    updateTime?: Timestamp;
    /**
     * Enrollment token for the device.
     * Only present in situations where device creation and enrollment are rolled
     * into a single operation.
     * Transient.
     *
     * @generated from protobuf field: teleport.devicetrust.v1.DeviceEnrollToken enroll_token = 7;
     */
    enrollToken?: DeviceEnrollToken;
    /**
     * Enrollment status of the device.
     * May be changed to DEVICE_ENROLL_STATUS_NOT_ENROLLED at any time to
     * forcefully unenroll a device (server-side only).
     * System managed.
     *
     * @generated from protobuf field: teleport.devicetrust.v1.DeviceEnrollStatus enroll_status = 8;
     */
    enrollStatus: DeviceEnrollStatus;
    /**
     * Currently enrolled device credential.
     * Manually unenrolling a device clears the credential.
     * System managed.
     *
     * @generated from protobuf field: teleport.devicetrust.v1.DeviceCredential credential = 9;
     */
    credential?: DeviceCredential;
    /**
     * Device data collected during enrollment and device authentication.
     * Enrollment data is always present, while authentication data is capped at N
     * most recent events.
     * Only present in certain read modes.
     * Transient.
     *
     * @generated from protobuf field: repeated teleport.devicetrust.v1.DeviceCollectedData collected_data = 10;
     */
    collectedData: DeviceCollectedData[];
    /**
     * Source of the device.
     * Devices managed directly via Teleport (`tctl`, Web UI, etc) have no
     * assigned source.
     *
     * @generated from protobuf field: teleport.devicetrust.v1.DeviceSource source = 11;
     */
    source?: DeviceSource;
    /**
     * Device information acquired from an external source.
     *
     * @generated from protobuf field: teleport.devicetrust.v1.DeviceProfile profile = 12;
     */
    profile?: DeviceProfile;
    /**
     * Device owner.
     * Usually the owner is the same user who performed the enrollment ceremony.
     * May be empty for legacy devices (Teleport v13.2 and older).
     * Manually unenrolling a device clears the owner.
     * System-managed.
     *
     * @generated from protobuf field: string owner = 13;
     */
    owner: string;
}
/**
 * DeviceCredential represents the current enrolled public key of a device.
 *
 * @generated from protobuf message teleport.devicetrust.v1.DeviceCredential
 */
export interface DeviceCredential {
    /**
     * Unique identifier of the credential, defined client-side.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Device public key marshaled as a PKIX, ASN.1 DER. Used only on MacOS.
     *
     * @generated from protobuf field: bytes public_key_der = 2;
     */
    publicKeyDer: Uint8Array;
    /**
     * The degree to which the device credential is attested.
     *
     * @generated from protobuf field: teleport.devicetrust.v1.DeviceAttestationType device_attestation_type = 3;
     */
    deviceAttestationType: DeviceAttestationType;
    /**
     * For TPM devices, the serial number of the TPM endorsement certificate.
     *
     * @generated from protobuf field: string tpm_ekcert_serial = 4;
     */
    tpmEkcertSerial: string;
    /**
     * For TPM devices, the encoded TPMT_PUBLIC structure containing the
     * attestation public key and signing parameters.
     *
     * @generated from protobuf field: bytes tpm_ak_public = 5;
     */
    tpmAkPublic: Uint8Array;
}
/**
 * AttestationType indicates the degree to which the device credential has
 * been attested.
 *
 * @generated from protobuf enum teleport.devicetrust.v1.DeviceAttestationType
 */
export enum DeviceAttestationType {
    /**
     * Bare public key which has only verified with proof of ownership.
     * Used on macOS.
     *
     * @generated from protobuf enum value: DEVICE_ATTESTATION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Credential was verified through a TPM EK->AK chain on enrollment.
     *
     * @generated from protobuf enum value: DEVICE_ATTESTATION_TYPE_TPM_EKPUB = 1;
     */
    TPM_EKPUB = 1,
    /**
     * Credential was verified through a TPM EKCert->AK chain on enrollment,
     * but no allow-listed CAs were configured to validate this EKCert against.
     *
     * @generated from protobuf enum value: DEVICE_ATTESTATION_TYPE_TPM_EKCERT = 2;
     */
    TPM_EKCERT = 2,
    /**
     * Credential was verified through a TPM EKCert->AK chain on enrollment, and
     * the EKCert was signed by a configured allow-listed CA.
     *
     * @generated from protobuf enum value: DEVICE_ATTESTATION_TYPE_TPM_EKCERT_TRUSTED = 3;
     */
    TPM_EKCERT_TRUSTED = 3
}
/**
 * DeviceEnrollStatus represents the enrollment status of a device.
 *
 * @generated from protobuf enum teleport.devicetrust.v1.DeviceEnrollStatus
 */
export enum DeviceEnrollStatus {
    /**
     * @generated from protobuf enum value: DEVICE_ENROLL_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Device is registered but not enrolled.
     *
     * @generated from protobuf enum value: DEVICE_ENROLL_STATUS_NOT_ENROLLED = 1;
     */
    NOT_ENROLLED = 1,
    /**
     * Device is registered and enrolled.
     *
     * @generated from protobuf enum value: DEVICE_ENROLL_STATUS_ENROLLED = 2;
     */
    ENROLLED = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class Device$Type extends MessageType<Device> {
    constructor() {
        super("teleport.devicetrust.v1.Device", [
            { no: 1, name: "api_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "os_type", kind: "enum", T: () => ["teleport.devicetrust.v1.OSType", OSType] },
            { no: 4, name: "asset_tag", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "create_time", kind: "message", T: () => Timestamp },
            { no: 6, name: "update_time", kind: "message", T: () => Timestamp },
            { no: 7, name: "enroll_token", kind: "message", T: () => DeviceEnrollToken },
            { no: 8, name: "enroll_status", kind: "enum", T: () => ["teleport.devicetrust.v1.DeviceEnrollStatus", DeviceEnrollStatus, "DEVICE_ENROLL_STATUS_"] },
            { no: 9, name: "credential", kind: "message", T: () => DeviceCredential },
            { no: 10, name: "collected_data", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DeviceCollectedData },
            { no: 11, name: "source", kind: "message", T: () => DeviceSource },
            { no: 12, name: "profile", kind: "message", T: () => DeviceProfile },
            { no: 13, name: "owner", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Device>): Device {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.apiVersion = "";
        message.id = "";
        message.osType = 0;
        message.assetTag = "";
        message.enrollStatus = 0;
        message.collectedData = [];
        message.owner = "";
        if (value !== undefined)
            reflectionMergePartial<Device>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Device): Device {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string api_version */ 1:
                    message.apiVersion = reader.string();
                    break;
                case /* string id */ 2:
                    message.id = reader.string();
                    break;
                case /* teleport.devicetrust.v1.OSType os_type */ 3:
                    message.osType = reader.int32();
                    break;
                case /* string asset_tag */ 4:
                    message.assetTag = reader.string();
                    break;
                case /* google.protobuf.Timestamp create_time */ 5:
                    message.createTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createTime);
                    break;
                case /* google.protobuf.Timestamp update_time */ 6:
                    message.updateTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updateTime);
                    break;
                case /* teleport.devicetrust.v1.DeviceEnrollToken enroll_token */ 7:
                    message.enrollToken = DeviceEnrollToken.internalBinaryRead(reader, reader.uint32(), options, message.enrollToken);
                    break;
                case /* teleport.devicetrust.v1.DeviceEnrollStatus enroll_status */ 8:
                    message.enrollStatus = reader.int32();
                    break;
                case /* teleport.devicetrust.v1.DeviceCredential credential */ 9:
                    message.credential = DeviceCredential.internalBinaryRead(reader, reader.uint32(), options, message.credential);
                    break;
                case /* repeated teleport.devicetrust.v1.DeviceCollectedData collected_data */ 10:
                    message.collectedData.push(DeviceCollectedData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* teleport.devicetrust.v1.DeviceSource source */ 11:
                    message.source = DeviceSource.internalBinaryRead(reader, reader.uint32(), options, message.source);
                    break;
                case /* teleport.devicetrust.v1.DeviceProfile profile */ 12:
                    message.profile = DeviceProfile.internalBinaryRead(reader, reader.uint32(), options, message.profile);
                    break;
                case /* string owner */ 13:
                    message.owner = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Device, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string api_version = 1; */
        if (message.apiVersion !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.apiVersion);
        /* string id = 2; */
        if (message.id !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.id);
        /* teleport.devicetrust.v1.OSType os_type = 3; */
        if (message.osType !== 0)
            writer.tag(3, WireType.Varint).int32(message.osType);
        /* string asset_tag = 4; */
        if (message.assetTag !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.assetTag);
        /* google.protobuf.Timestamp create_time = 5; */
        if (message.createTime)
            Timestamp.internalBinaryWrite(message.createTime, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp update_time = 6; */
        if (message.updateTime)
            Timestamp.internalBinaryWrite(message.updateTime, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* teleport.devicetrust.v1.DeviceEnrollToken enroll_token = 7; */
        if (message.enrollToken)
            DeviceEnrollToken.internalBinaryWrite(message.enrollToken, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* teleport.devicetrust.v1.DeviceEnrollStatus enroll_status = 8; */
        if (message.enrollStatus !== 0)
            writer.tag(8, WireType.Varint).int32(message.enrollStatus);
        /* teleport.devicetrust.v1.DeviceCredential credential = 9; */
        if (message.credential)
            DeviceCredential.internalBinaryWrite(message.credential, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* repeated teleport.devicetrust.v1.DeviceCollectedData collected_data = 10; */
        for (let i = 0; i < message.collectedData.length; i++)
            DeviceCollectedData.internalBinaryWrite(message.collectedData[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* teleport.devicetrust.v1.DeviceSource source = 11; */
        if (message.source)
            DeviceSource.internalBinaryWrite(message.source, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* teleport.devicetrust.v1.DeviceProfile profile = 12; */
        if (message.profile)
            DeviceProfile.internalBinaryWrite(message.profile, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* string owner = 13; */
        if (message.owner !== "")
            writer.tag(13, WireType.LengthDelimited).string(message.owner);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message teleport.devicetrust.v1.Device
 */
export const Device = new Device$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeviceCredential$Type extends MessageType<DeviceCredential> {
    constructor() {
        super("teleport.devicetrust.v1.DeviceCredential", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "public_key_der", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "device_attestation_type", kind: "enum", T: () => ["teleport.devicetrust.v1.DeviceAttestationType", DeviceAttestationType, "DEVICE_ATTESTATION_TYPE_"] },
            { no: 4, name: "tpm_ekcert_serial", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "tpm_ak_public", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<DeviceCredential>): DeviceCredential {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.publicKeyDer = new Uint8Array(0);
        message.deviceAttestationType = 0;
        message.tpmEkcertSerial = "";
        message.tpmAkPublic = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<DeviceCredential>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeviceCredential): DeviceCredential {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* bytes public_key_der */ 2:
                    message.publicKeyDer = reader.bytes();
                    break;
                case /* teleport.devicetrust.v1.DeviceAttestationType device_attestation_type */ 3:
                    message.deviceAttestationType = reader.int32();
                    break;
                case /* string tpm_ekcert_serial */ 4:
                    message.tpmEkcertSerial = reader.string();
                    break;
                case /* bytes tpm_ak_public */ 5:
                    message.tpmAkPublic = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DeviceCredential, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* bytes public_key_der = 2; */
        if (message.publicKeyDer.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.publicKeyDer);
        /* teleport.devicetrust.v1.DeviceAttestationType device_attestation_type = 3; */
        if (message.deviceAttestationType !== 0)
            writer.tag(3, WireType.Varint).int32(message.deviceAttestationType);
        /* string tpm_ekcert_serial = 4; */
        if (message.tpmEkcertSerial !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.tpmEkcertSerial);
        /* bytes tpm_ak_public = 5; */
        if (message.tpmAkPublic.length)
            writer.tag(5, WireType.LengthDelimited).bytes(message.tpmAkPublic);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message teleport.devicetrust.v1.DeviceCredential
 */
export const DeviceCredential = new DeviceCredential$Type();
