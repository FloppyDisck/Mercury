/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Account } from "../Mercury/account";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "FloppyDisck.Mercury.Mercury";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetAccountRequest {
  id: number;
}

export interface QueryGetAccountWithWalletRequest {
  user: string;
}

export interface QueryGetAccountResponse {
  Account: Account | undefined;
}

export interface QueryAllAccountRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAccountWithNameRequest {
  name: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllAccountWithReviewRequest {
  review: number;
  pagination: PageRequest | undefined;
}

export interface QueryAllAccountResponse {
  Account: Account[];
  pagination: PageResponse | undefined;
}

const baseQueryGetAccountRequest: object = { id: 0 };

export const QueryGetAccountRequest = {
  encode(
    message: QueryGetAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAccountRequest } as QueryGetAccountRequest;
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

  fromJSON(object: any): QueryGetAccountRequest {
    const message = { ...baseQueryGetAccountRequest } as QueryGetAccountRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetAccountRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAccountRequest>
  ): QueryGetAccountRequest {
    const message = { ...baseQueryGetAccountRequest } as QueryGetAccountRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetAccountWithWalletRequest: object = { user: "" };

export const QueryGetAccountWithWalletRequest = {
  encode(
    message: QueryGetAccountWithWalletRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAccountWithWalletRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAccountWithWalletRequest,
    } as QueryGetAccountWithWalletRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAccountWithWalletRequest {
    const message = {
      ...baseQueryGetAccountWithWalletRequest,
    } as QueryGetAccountWithWalletRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    return message;
  },

  toJSON(message: QueryGetAccountWithWalletRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAccountWithWalletRequest>
  ): QueryGetAccountWithWalletRequest {
    const message = {
      ...baseQueryGetAccountWithWalletRequest,
    } as QueryGetAccountWithWalletRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    return message;
  },
};

const baseQueryGetAccountResponse: object = {};

export const QueryGetAccountResponse = {
  encode(
    message: QueryGetAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Account !== undefined) {
      Account.encode(message.Account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAccountResponse,
    } as QueryGetAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAccountResponse {
    const message = {
      ...baseQueryGetAccountResponse,
    } as QueryGetAccountResponse;
    if (object.Account !== undefined && object.Account !== null) {
      message.Account = Account.fromJSON(object.Account);
    } else {
      message.Account = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAccountResponse): unknown {
    const obj: any = {};
    message.Account !== undefined &&
      (obj.Account = message.Account
        ? Account.toJSON(message.Account)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAccountResponse>
  ): QueryGetAccountResponse {
    const message = {
      ...baseQueryGetAccountResponse,
    } as QueryGetAccountResponse;
    if (object.Account !== undefined && object.Account !== null) {
      message.Account = Account.fromPartial(object.Account);
    } else {
      message.Account = undefined;
    }
    return message;
  },
};

const baseQueryAllAccountRequest: object = {};

export const QueryAllAccountRequest = {
  encode(
    message: QueryAllAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllAccountRequest } as QueryAllAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountRequest {
    const message = { ...baseQueryAllAccountRequest } as QueryAllAccountRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAccountRequest>
  ): QueryAllAccountRequest {
    const message = { ...baseQueryAllAccountRequest } as QueryAllAccountRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAccountWithNameRequest: object = { name: "" };

export const QueryAllAccountWithNameRequest = {
  encode(
    message: QueryAllAccountWithNameRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAccountWithNameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAccountWithNameRequest,
    } as QueryAllAccountWithNameRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountWithNameRequest {
    const message = {
      ...baseQueryAllAccountWithNameRequest,
    } as QueryAllAccountWithNameRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAccountWithNameRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAccountWithNameRequest>
  ): QueryAllAccountWithNameRequest {
    const message = {
      ...baseQueryAllAccountWithNameRequest,
    } as QueryAllAccountWithNameRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAccountWithReviewRequest: object = { review: 0 };

export const QueryAllAccountWithReviewRequest = {
  encode(
    message: QueryAllAccountWithReviewRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.review !== 0) {
      writer.uint32(8).uint32(message.review);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAccountWithReviewRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAccountWithReviewRequest,
    } as QueryAllAccountWithReviewRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.review = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountWithReviewRequest {
    const message = {
      ...baseQueryAllAccountWithReviewRequest,
    } as QueryAllAccountWithReviewRequest;
    if (object.review !== undefined && object.review !== null) {
      message.review = Number(object.review);
    } else {
      message.review = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAccountWithReviewRequest): unknown {
    const obj: any = {};
    message.review !== undefined && (obj.review = message.review);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAccountWithReviewRequest>
  ): QueryAllAccountWithReviewRequest {
    const message = {
      ...baseQueryAllAccountWithReviewRequest,
    } as QueryAllAccountWithReviewRequest;
    if (object.review !== undefined && object.review !== null) {
      message.review = object.review;
    } else {
      message.review = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAccountResponse: object = {};

export const QueryAllAccountResponse = {
  encode(
    message: QueryAllAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Account) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAccountResponse,
    } as QueryAllAccountResponse;
    message.Account = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Account.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountResponse {
    const message = {
      ...baseQueryAllAccountResponse,
    } as QueryAllAccountResponse;
    message.Account = [];
    if (object.Account !== undefined && object.Account !== null) {
      for (const e of object.Account) {
        message.Account.push(Account.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAccountResponse): unknown {
    const obj: any = {};
    if (message.Account) {
      obj.Account = message.Account.map((e) =>
        e ? Account.toJSON(e) : undefined
      );
    } else {
      obj.Account = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAccountResponse>
  ): QueryAllAccountResponse {
    const message = {
      ...baseQueryAllAccountResponse,
    } as QueryAllAccountResponse;
    message.Account = [];
    if (object.Account !== undefined && object.Account !== null) {
      for (const e of object.Account) {
        message.Account.push(Account.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Account(request: QueryGetAccountRequest): Promise<QueryGetAccountResponse>;
  AccountWallet(
    request: QueryGetAccountWithWalletRequest
  ): Promise<QueryGetAccountResponse>;
  AccountAll(request: QueryAllAccountRequest): Promise<QueryAllAccountResponse>;
  AccountWithName(
    request: QueryAllAccountWithNameRequest
  ): Promise<QueryAllAccountResponse>;
  AccountWithReview(
    request: QueryAllAccountWithReviewRequest
  ): Promise<QueryAllAccountResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Account(request: QueryGetAccountRequest): Promise<QueryGetAccountResponse> {
    const data = QueryGetAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Query",
      "Account",
      data
    );
    return promise.then((data) =>
      QueryGetAccountResponse.decode(new Reader(data))
    );
  }

  AccountWallet(
    request: QueryGetAccountWithWalletRequest
  ): Promise<QueryGetAccountResponse> {
    const data = QueryGetAccountWithWalletRequest.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Query",
      "AccountWallet",
      data
    );
    return promise.then((data) =>
      QueryGetAccountResponse.decode(new Reader(data))
    );
  }

  AccountAll(
    request: QueryAllAccountRequest
  ): Promise<QueryAllAccountResponse> {
    const data = QueryAllAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Query",
      "AccountAll",
      data
    );
    return promise.then((data) =>
      QueryAllAccountResponse.decode(new Reader(data))
    );
  }

  AccountWithName(
    request: QueryAllAccountWithNameRequest
  ): Promise<QueryAllAccountResponse> {
    const data = QueryAllAccountWithNameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Query",
      "AccountWithName",
      data
    );
    return promise.then((data) =>
      QueryAllAccountResponse.decode(new Reader(data))
    );
  }

  AccountWithReview(
    request: QueryAllAccountWithReviewRequest
  ): Promise<QueryAllAccountResponse> {
    const data = QueryAllAccountWithReviewRequest.encode(request).finish();
    const promise = this.rpc.request(
      "FloppyDisck.Mercury.Mercury.Query",
      "AccountWithReview",
      data
    );
    return promise.then((data) =>
      QueryAllAccountResponse.decode(new Reader(data))
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
