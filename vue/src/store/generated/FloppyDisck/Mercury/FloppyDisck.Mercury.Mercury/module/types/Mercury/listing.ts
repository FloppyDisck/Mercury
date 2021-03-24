/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Price, AvgReview } from "../Mercury/util";

export const protobufPackage = "FloppyDisck.Mercury.Mercury";

export interface Listing {
  creator: string;
  id: number;
  price: Price | undefined;
  name: string;
  description: string;
  review: AvgReview | undefined;
}

const baseListing: object = { creator: "", id: 0, name: "", description: "" };

export const Listing = {
  encode(message: Listing, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.review !== undefined) {
      AvgReview.encode(message.review, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Listing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListing } as Listing;
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
          message.price = Price.decode(reader, reader.uint32());
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.review = AvgReview.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Listing {
    const message = { ...baseListing } as Listing;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = Price.fromJSON(object.price);
    } else {
      message.price = undefined;
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
    if (object.review !== undefined && object.review !== null) {
      message.review = AvgReview.fromJSON(object.review);
    } else {
      message.review = undefined;
    }
    return message;
  },

  toJSON(message: Listing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.price !== undefined &&
      (obj.price = message.price ? Price.toJSON(message.price) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.review !== undefined &&
      (obj.review = message.review
        ? AvgReview.toJSON(message.review)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Listing>): Listing {
    const message = { ...baseListing } as Listing;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = Price.fromPartial(object.price);
    } else {
      message.price = undefined;
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
    if (object.review !== undefined && object.review !== null) {
      message.review = AvgReview.fromPartial(object.review);
    } else {
      message.review = undefined;
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
