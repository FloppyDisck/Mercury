/* eslint-disable */
import { Review } from "../Mercury/review";
import { Purchase } from "../Mercury/purchase";
import { Listing } from "../Mercury/listing";
import { Account } from "../Mercury/account";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "FloppyDisck.Mercury.Mercury";

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  reviewList: Review[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  purchaseList: Purchase[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  listingList: Listing[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  accountList: Account[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.reviewList) {
      Review.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.purchaseList) {
      Purchase.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.listingList) {
      Listing.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.accountList) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.reviewList = [];
    message.purchaseList = [];
    message.listingList = [];
    message.accountList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.reviewList.push(Review.decode(reader, reader.uint32()));
          break;
        case 3:
          message.purchaseList.push(Purchase.decode(reader, reader.uint32()));
          break;
        case 2:
          message.listingList.push(Listing.decode(reader, reader.uint32()));
          break;
        case 1:
          message.accountList.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.reviewList = [];
    message.purchaseList = [];
    message.listingList = [];
    message.accountList = [];
    if (object.reviewList !== undefined && object.reviewList !== null) {
      for (const e of object.reviewList) {
        message.reviewList.push(Review.fromJSON(e));
      }
    }
    if (object.purchaseList !== undefined && object.purchaseList !== null) {
      for (const e of object.purchaseList) {
        message.purchaseList.push(Purchase.fromJSON(e));
      }
    }
    if (object.listingList !== undefined && object.listingList !== null) {
      for (const e of object.listingList) {
        message.listingList.push(Listing.fromJSON(e));
      }
    }
    if (object.accountList !== undefined && object.accountList !== null) {
      for (const e of object.accountList) {
        message.accountList.push(Account.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.reviewList) {
      obj.reviewList = message.reviewList.map((e) =>
        e ? Review.toJSON(e) : undefined
      );
    } else {
      obj.reviewList = [];
    }
    if (message.purchaseList) {
      obj.purchaseList = message.purchaseList.map((e) =>
        e ? Purchase.toJSON(e) : undefined
      );
    } else {
      obj.purchaseList = [];
    }
    if (message.listingList) {
      obj.listingList = message.listingList.map((e) =>
        e ? Listing.toJSON(e) : undefined
      );
    } else {
      obj.listingList = [];
    }
    if (message.accountList) {
      obj.accountList = message.accountList.map((e) =>
        e ? Account.toJSON(e) : undefined
      );
    } else {
      obj.accountList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.reviewList = [];
    message.purchaseList = [];
    message.listingList = [];
    message.accountList = [];
    if (object.reviewList !== undefined && object.reviewList !== null) {
      for (const e of object.reviewList) {
        message.reviewList.push(Review.fromPartial(e));
      }
    }
    if (object.purchaseList !== undefined && object.purchaseList !== null) {
      for (const e of object.purchaseList) {
        message.purchaseList.push(Purchase.fromPartial(e));
      }
    }
    if (object.listingList !== undefined && object.listingList !== null) {
      for (const e of object.listingList) {
        message.listingList.push(Listing.fromPartial(e));
      }
    }
    if (object.accountList !== undefined && object.accountList !== null) {
      for (const e of object.accountList) {
        message.accountList.push(Account.fromPartial(e));
      }
    }
    return message;
  },
};

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
