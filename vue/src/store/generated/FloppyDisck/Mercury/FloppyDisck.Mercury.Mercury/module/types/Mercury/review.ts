/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "FloppyDisck.Mercury.Mercury";

export interface Reviewed {
  type: string;
  id: number;
}

export interface Review {
  creator: string;
  id: number;
  reviewed: Reviewed | undefined;
  score: number;
  description: string;
}

const baseReviewed: object = { type: "", id: 0 };

export const Reviewed = {
  encode(message: Reviewed, writer: Writer = Writer.create()): Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Reviewed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReviewed } as Reviewed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
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

  fromJSON(object: any): Reviewed {
    const message = { ...baseReviewed } as Reviewed;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: Reviewed): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<Reviewed>): Reviewed {
    const message = { ...baseReviewed } as Reviewed;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseReview: object = { creator: "", id: 0, score: 0, description: "" };

export const Review = {
  encode(message: Review, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.reviewed !== undefined) {
      Reviewed.encode(message.reviewed, writer.uint32(26).fork()).ldelim();
    }
    if (message.score !== 0) {
      writer.uint32(32).uint32(message.score);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Review {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReview } as Review;
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
          message.reviewed = Reviewed.decode(reader, reader.uint32());
          break;
        case 4:
          message.score = reader.uint32();
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

  fromJSON(object: any): Review {
    const message = { ...baseReview } as Review;
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
    if (object.reviewed !== undefined && object.reviewed !== null) {
      message.reviewed = Reviewed.fromJSON(object.reviewed);
    } else {
      message.reviewed = undefined;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = Number(object.score);
    } else {
      message.score = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: Review): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.reviewed !== undefined &&
      (obj.reviewed = message.reviewed
        ? Reviewed.toJSON(message.reviewed)
        : undefined);
    message.score !== undefined && (obj.score = message.score);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<Review>): Review {
    const message = { ...baseReview } as Review;
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
    if (object.reviewed !== undefined && object.reviewed !== null) {
      message.reviewed = Reviewed.fromPartial(object.reviewed);
    } else {
      message.reviewed = undefined;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

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
