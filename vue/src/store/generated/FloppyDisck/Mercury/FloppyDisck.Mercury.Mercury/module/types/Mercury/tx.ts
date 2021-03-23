/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "FloppyDisck.Mercury.Mercury";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateListing {
  creator: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
}

export interface MsgCreateListingResponse {
  id: number;
}

export interface MsgUpdateListing {
  creator: string;
  id: number;
  amount: number;
  currency: string;
  name: string;
  description: string;
}

export interface MsgUpdateListingResponse {}

export interface MsgDeleteListing {
  creator: string;
  id: number;
}

export interface MsgDeleteListingResponse {}

export interface MsgCreateAccount {
  creator: string;
  name: string;
}

export interface MsgCreateAccountResponse {
  id: number;
}

export interface MsgUpdateAccount {
  creator: string;
  id: number;
  name: string;
}

export interface MsgUpdateAccountResponse {}

export interface MsgDeleteAccount {
  creator: string;
  id: number;
}

export interface MsgDeleteAccountResponse {}

const baseMsgCreateListing: object = {
  creator: "",
  amount: 0,
  currency: "",
  name: "",
  description: "",
};

export const MsgCreateListing = {
  encode(message: MsgCreateListing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.currency !== "") {
      writer.uint32(26).string(message.currency);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateListing } as MsgCreateListing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.currency = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateListing {
    const message = { ...baseMsgCreateListing } as MsgCreateListing;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = String(object.currency);
    } else {
      message.currency = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgCreateListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.currency !== undefined && (obj.currency = message.currency);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateListing>): MsgCreateListing {
    const message = { ...baseMsgCreateListing } as MsgCreateListing;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgCreateListingResponse: object = { id: 0 };

export const MsgCreateListingResponse = {
  encode(
    message: MsgCreateListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateListingResponse,
    } as MsgCreateListingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateListingResponse {
    const message = {
      ...baseMsgCreateListingResponse,
    } as MsgCreateListingResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateListingResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateListingResponse>
  ): MsgCreateListingResponse {
    const message = {
      ...baseMsgCreateListingResponse,
    } as MsgCreateListingResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateListing: object = {
  creator: "",
  id: 0,
  amount: 0,
  currency: "",
  name: "",
  description: "",
};

export const MsgUpdateListing = {
  encode(message: MsgUpdateListing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.currency !== "") {
      writer.uint32(34).string(message.currency);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateListing } as MsgUpdateListing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.currency = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateListing {
    const message = { ...baseMsgUpdateListing } as MsgUpdateListing;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = String(object.currency);
    } else {
      message.currency = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.currency !== undefined && (obj.currency = message.currency);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateListing>): MsgUpdateListing {
    const message = { ...baseMsgUpdateListing } as MsgUpdateListing;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgUpdateListingResponse: object = {};

export const MsgUpdateListingResponse = {
  encode(
    _: MsgUpdateListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateListingResponse,
    } as MsgUpdateListingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateListingResponse {
    const message = {
      ...baseMsgUpdateListingResponse,
    } as MsgUpdateListingResponse;
    return message;
  },

  toJSON(_: MsgUpdateListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateListingResponse>
  ): MsgUpdateListingResponse {
    const message = {
      ...baseMsgUpdateListingResponse,
    } as MsgUpdateListingResponse;
    return message;
  },
};

const baseMsgDeleteListing: object = { creator: "", id: 0 };

export const MsgDeleteListing = {
  encode(message: MsgDeleteListing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteListing } as MsgDeleteListing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteListing {
    const message = { ...baseMsgDeleteListing } as MsgDeleteListing;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteListing>): MsgDeleteListing {
    const message = { ...baseMsgDeleteListing } as MsgDeleteListing;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteListingResponse: object = {};

export const MsgDeleteListingResponse = {
  encode(
    _: MsgDeleteListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteListingResponse,
    } as MsgDeleteListingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteListingResponse {
    const message = {
      ...baseMsgDeleteListingResponse,
    } as MsgDeleteListingResponse;
    return message;
  },

  toJSON(_: MsgDeleteListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteListingResponse>
  ): MsgDeleteListingResponse {
    const message = {
      ...baseMsgDeleteListingResponse,
    } as MsgDeleteListingResponse;
    return message;
  },
};

const baseMsgCreateAccount: object = { creator: "", name: "" };

export const MsgCreateAccount = {
  encode(message: MsgCreateAccount, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAccount } as MsgCreateAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAccount {
    const message = { ...baseMsgCreateAccount } as MsgCreateAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAccount>): MsgCreateAccount {
    const message = { ...baseMsgCreateAccount } as MsgCreateAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgCreateAccountResponse: object = { id: 0 };

export const MsgCreateAccountResponse = {
  encode(
    message: MsgCreateAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAccountResponse,
    } as MsgCreateAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAccountResponse {
    const message = {
      ...baseMsgCreateAccountResponse,
    } as MsgCreateAccountResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateAccountResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAccountResponse>
  ): MsgCreateAccountResponse {
    const message = {
      ...baseMsgCreateAccountResponse,
    } as MsgCreateAccountResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateAccount: object = { creator: "", id: 0, name: "" };

export const MsgUpdateAccount = {
  encode(message: MsgUpdateAccount, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAccount } as MsgUpdateAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAccount {
    const message = { ...baseMsgUpdateAccount } as MsgUpdateAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAccount>): MsgUpdateAccount {
    const message = { ...baseMsgUpdateAccount } as MsgUpdateAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateAccountResponse: object = {};

export const MsgUpdateAccountResponse = {
  encode(
    _: MsgUpdateAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAccountResponse,
    } as MsgUpdateAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateAccountResponse {
    const message = {
      ...baseMsgUpdateAccountResponse,
    } as MsgUpdateAccountResponse;
    return message;
  },

  toJSON(_: MsgUpdateAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateAccountResponse>
  ): MsgUpdateAccountResponse {
    const message = {
      ...baseMsgUpdateAccountResponse,
    } as MsgUpdateAccountResponse;
    return message;
  },
};

const baseMsgDeleteAccount: object = { creator: "", id: 0 };

export const MsgDeleteAccount = {
  encode(message: MsgDeleteAccount, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAccount } as MsgDeleteAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAccount {
    const message = { ...baseMsgDeleteAccount } as MsgDeleteAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteAccount>): MsgDeleteAccount {
    const message = { ...baseMsgDeleteAccount } as MsgDeleteAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteAccountResponse: object = {};

export const MsgDeleteAccountResponse = {
  encode(
    _: MsgDeleteAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAccountResponse,
    } as MsgDeleteAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteAccountResponse {
    const message = {
      ...baseMsgDeleteAccountResponse,
    } as MsgDeleteAccountResponse;
    return message;
  },

  toJSON(_: MsgDeleteAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteAccountResponse>
  ): MsgDeleteAccountResponse {
    const message = {
      ...baseMsgDeleteAccountResponse,
    } as MsgDeleteAccountResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateListing(request: MsgCreateListing): Promise<MsgCreateListingResponse>;
  UpdateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse>;
  DeleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse>;
  CreateAccount(request: MsgCreateAccount): Promise<MsgCreateAccountResponse>;
  UpdateAccount(request: MsgUpdateAccount): Promise<MsgUpdateAccountResponse>;
  DeleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateListing(request: MsgCreateListing): Promise<MsgCreateListingResponse> {
    const data = MsgCreateListing.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Msg",
      "CreateListing",
      data
    );
    return promise.then((data) =>
      MsgCreateListingResponse.decode(new Reader(data))
    );
  }

  UpdateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse> {
    const data = MsgUpdateListing.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Msg",
      "UpdateListing",
      data
    );
    return promise.then((data) =>
      MsgUpdateListingResponse.decode(new Reader(data))
    );
  }

  DeleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse> {
    const data = MsgDeleteListing.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Msg",
      "DeleteListing",
      data
    );
    return promise.then((data) =>
      MsgDeleteListingResponse.decode(new Reader(data))
    );
  }

  CreateAccount(request: MsgCreateAccount): Promise<MsgCreateAccountResponse> {
    const data = MsgCreateAccount.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Msg",
      "CreateAccount",
      data
    );
    return promise.then((data) =>
      MsgCreateAccountResponse.decode(new Reader(data))
    );
  }

  UpdateAccount(request: MsgUpdateAccount): Promise<MsgUpdateAccountResponse> {
    const data = MsgUpdateAccount.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Msg",
      "UpdateAccount",
      data
    );
    return promise.then((data) =>
      MsgUpdateAccountResponse.decode(new Reader(data))
    );
  }

  DeleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse> {
    const data = MsgDeleteAccount.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Msg",
      "DeleteAccount",
      data
    );
    return promise.then((data) =>
      MsgDeleteAccountResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
