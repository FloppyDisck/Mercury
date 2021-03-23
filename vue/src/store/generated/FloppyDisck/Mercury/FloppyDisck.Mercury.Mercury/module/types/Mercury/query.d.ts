import { Reader, Writer } from "protobufjs/minimal";
import { Listing } from "../Mercury/listing";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Account } from "../Mercury/account";
export declare const protobufPackage = "FloppyDisck.Mercury.Mercury";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetListingRequest {
    id: number;
}
export interface QueryGetListingResponse {
    Listing: Listing | undefined;
}
export interface QueryAllListingRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllListingWithSellerRequest {
    seller: string;
    pagination: PageRequest | undefined;
}
export interface QueryAllListingWithReviewRequest {
    review: number;
    pagination: PageRequest | undefined;
}
export interface QueryAllListingWithNameRequest {
    name: string;
    pagination: PageRequest | undefined;
}
export interface QueryAllListingResponse {
    Listing: Listing[];
    pagination: PageResponse | undefined;
}
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
export declare const QueryGetListingRequest: {
    encode(message: QueryGetListingRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetListingRequest;
    fromJSON(object: any): QueryGetListingRequest;
    toJSON(message: QueryGetListingRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetListingRequest>): QueryGetListingRequest;
};
export declare const QueryGetListingResponse: {
    encode(message: QueryGetListingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetListingResponse;
    fromJSON(object: any): QueryGetListingResponse;
    toJSON(message: QueryGetListingResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetListingResponse>): QueryGetListingResponse;
};
export declare const QueryAllListingRequest: {
    encode(message: QueryAllListingRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllListingRequest;
    fromJSON(object: any): QueryAllListingRequest;
    toJSON(message: QueryAllListingRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllListingRequest>): QueryAllListingRequest;
};
export declare const QueryAllListingWithSellerRequest: {
    encode(message: QueryAllListingWithSellerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllListingWithSellerRequest;
    fromJSON(object: any): QueryAllListingWithSellerRequest;
    toJSON(message: QueryAllListingWithSellerRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllListingWithSellerRequest>): QueryAllListingWithSellerRequest;
};
export declare const QueryAllListingWithReviewRequest: {
    encode(message: QueryAllListingWithReviewRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllListingWithReviewRequest;
    fromJSON(object: any): QueryAllListingWithReviewRequest;
    toJSON(message: QueryAllListingWithReviewRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllListingWithReviewRequest>): QueryAllListingWithReviewRequest;
};
export declare const QueryAllListingWithNameRequest: {
    encode(message: QueryAllListingWithNameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllListingWithNameRequest;
    fromJSON(object: any): QueryAllListingWithNameRequest;
    toJSON(message: QueryAllListingWithNameRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllListingWithNameRequest>): QueryAllListingWithNameRequest;
};
export declare const QueryAllListingResponse: {
    encode(message: QueryAllListingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllListingResponse;
    fromJSON(object: any): QueryAllListingResponse;
    toJSON(message: QueryAllListingResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllListingResponse>): QueryAllListingResponse;
};
export declare const QueryGetAccountRequest: {
    encode(message: QueryGetAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAccountRequest;
    fromJSON(object: any): QueryGetAccountRequest;
    toJSON(message: QueryGetAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAccountRequest>): QueryGetAccountRequest;
};
export declare const QueryGetAccountWithWalletRequest: {
    encode(message: QueryGetAccountWithWalletRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAccountWithWalletRequest;
    fromJSON(object: any): QueryGetAccountWithWalletRequest;
    toJSON(message: QueryGetAccountWithWalletRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAccountWithWalletRequest>): QueryGetAccountWithWalletRequest;
};
export declare const QueryGetAccountResponse: {
    encode(message: QueryGetAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAccountResponse;
    fromJSON(object: any): QueryGetAccountResponse;
    toJSON(message: QueryGetAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAccountResponse>): QueryGetAccountResponse;
};
export declare const QueryAllAccountRequest: {
    encode(message: QueryAllAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAccountRequest;
    fromJSON(object: any): QueryAllAccountRequest;
    toJSON(message: QueryAllAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllAccountRequest>): QueryAllAccountRequest;
};
export declare const QueryAllAccountWithNameRequest: {
    encode(message: QueryAllAccountWithNameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAccountWithNameRequest;
    fromJSON(object: any): QueryAllAccountWithNameRequest;
    toJSON(message: QueryAllAccountWithNameRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllAccountWithNameRequest>): QueryAllAccountWithNameRequest;
};
export declare const QueryAllAccountWithReviewRequest: {
    encode(message: QueryAllAccountWithReviewRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAccountWithReviewRequest;
    fromJSON(object: any): QueryAllAccountWithReviewRequest;
    toJSON(message: QueryAllAccountWithReviewRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllAccountWithReviewRequest>): QueryAllAccountWithReviewRequest;
};
export declare const QueryAllAccountResponse: {
    encode(message: QueryAllAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAccountResponse;
    fromJSON(object: any): QueryAllAccountResponse;
    toJSON(message: QueryAllAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllAccountResponse>): QueryAllAccountResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Listing(request: QueryGetListingRequest): Promise<QueryGetListingResponse>;
    ListingAll(request: QueryAllListingRequest): Promise<QueryAllListingResponse>;
    ListingWithSeller(request: QueryAllListingWithSellerRequest): Promise<QueryAllListingResponse>;
    ListingWithReview(request: QueryAllListingWithReviewRequest): Promise<QueryAllListingResponse>;
    ListingWithName(request: QueryAllListingWithNameRequest): Promise<QueryAllListingResponse>;
    Account(request: QueryGetAccountRequest): Promise<QueryGetAccountResponse>;
    AccountWallet(request: QueryGetAccountWithWalletRequest): Promise<QueryGetAccountResponse>;
    AccountAll(request: QueryAllAccountRequest): Promise<QueryAllAccountResponse>;
    AccountWithName(request: QueryAllAccountWithNameRequest): Promise<QueryAllAccountResponse>;
    AccountWithReview(request: QueryAllAccountWithReviewRequest): Promise<QueryAllAccountResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Listing(request: QueryGetListingRequest): Promise<QueryGetListingResponse>;
    ListingAll(request: QueryAllListingRequest): Promise<QueryAllListingResponse>;
    ListingWithSeller(request: QueryAllListingWithSellerRequest): Promise<QueryAllListingResponse>;
    ListingWithReview(request: QueryAllListingWithReviewRequest): Promise<QueryAllListingResponse>;
    ListingWithName(request: QueryAllListingWithNameRequest): Promise<QueryAllListingResponse>;
    Account(request: QueryGetAccountRequest): Promise<QueryGetAccountResponse>;
    AccountWallet(request: QueryGetAccountWithWalletRequest): Promise<QueryGetAccountResponse>;
    AccountAll(request: QueryAllAccountRequest): Promise<QueryAllAccountResponse>;
    AccountWithName(request: QueryAllAccountWithNameRequest): Promise<QueryAllAccountResponse>;
    AccountWithReview(request: QueryAllAccountWithReviewRequest): Promise<QueryAllAccountResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
