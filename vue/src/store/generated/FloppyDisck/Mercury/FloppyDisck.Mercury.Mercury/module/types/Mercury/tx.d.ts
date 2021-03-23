import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "FloppyDisck.Mercury.Mercury";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePurchase {
    creator: string;
    listing: number;
    description: string;
}
export interface MsgCreatePurchaseResponse {
    id: number;
}
export interface MsgUpdatePurchase {
    creator: string;
    id: number;
    description: string;
}
export interface MsgUpdatePurchaseResponse {
}
export interface MsgDeletePurchase {
    creator: string;
    id: number;
}
export interface MsgDeletePurchaseResponse {
}
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
export interface MsgUpdateListingResponse {
}
export interface MsgDeleteListing {
    creator: string;
    id: number;
}
export interface MsgDeleteListingResponse {
}
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
export interface MsgUpdateAccountResponse {
}
export interface MsgDeleteAccount {
    creator: string;
    id: number;
}
export interface MsgDeleteAccountResponse {
}
export declare const MsgCreatePurchase: {
    encode(message: MsgCreatePurchase, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePurchase;
    fromJSON(object: any): MsgCreatePurchase;
    toJSON(message: MsgCreatePurchase): unknown;
    fromPartial(object: DeepPartial<MsgCreatePurchase>): MsgCreatePurchase;
};
export declare const MsgCreatePurchaseResponse: {
    encode(message: MsgCreatePurchaseResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePurchaseResponse;
    fromJSON(object: any): MsgCreatePurchaseResponse;
    toJSON(message: MsgCreatePurchaseResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePurchaseResponse>): MsgCreatePurchaseResponse;
};
export declare const MsgUpdatePurchase: {
    encode(message: MsgUpdatePurchase, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePurchase;
    fromJSON(object: any): MsgUpdatePurchase;
    toJSON(message: MsgUpdatePurchase): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePurchase>): MsgUpdatePurchase;
};
export declare const MsgUpdatePurchaseResponse: {
    encode(_: MsgUpdatePurchaseResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePurchaseResponse;
    fromJSON(_: any): MsgUpdatePurchaseResponse;
    toJSON(_: MsgUpdatePurchaseResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePurchaseResponse>): MsgUpdatePurchaseResponse;
};
export declare const MsgDeletePurchase: {
    encode(message: MsgDeletePurchase, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePurchase;
    fromJSON(object: any): MsgDeletePurchase;
    toJSON(message: MsgDeletePurchase): unknown;
    fromPartial(object: DeepPartial<MsgDeletePurchase>): MsgDeletePurchase;
};
export declare const MsgDeletePurchaseResponse: {
    encode(_: MsgDeletePurchaseResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePurchaseResponse;
    fromJSON(_: any): MsgDeletePurchaseResponse;
    toJSON(_: MsgDeletePurchaseResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePurchaseResponse>): MsgDeletePurchaseResponse;
};
export declare const MsgCreateListing: {
    encode(message: MsgCreateListing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateListing;
    fromJSON(object: any): MsgCreateListing;
    toJSON(message: MsgCreateListing): unknown;
    fromPartial(object: DeepPartial<MsgCreateListing>): MsgCreateListing;
};
export declare const MsgCreateListingResponse: {
    encode(message: MsgCreateListingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateListingResponse;
    fromJSON(object: any): MsgCreateListingResponse;
    toJSON(message: MsgCreateListingResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateListingResponse>): MsgCreateListingResponse;
};
export declare const MsgUpdateListing: {
    encode(message: MsgUpdateListing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateListing;
    fromJSON(object: any): MsgUpdateListing;
    toJSON(message: MsgUpdateListing): unknown;
    fromPartial(object: DeepPartial<MsgUpdateListing>): MsgUpdateListing;
};
export declare const MsgUpdateListingResponse: {
    encode(_: MsgUpdateListingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateListingResponse;
    fromJSON(_: any): MsgUpdateListingResponse;
    toJSON(_: MsgUpdateListingResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateListingResponse>): MsgUpdateListingResponse;
};
export declare const MsgDeleteListing: {
    encode(message: MsgDeleteListing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteListing;
    fromJSON(object: any): MsgDeleteListing;
    toJSON(message: MsgDeleteListing): unknown;
    fromPartial(object: DeepPartial<MsgDeleteListing>): MsgDeleteListing;
};
export declare const MsgDeleteListingResponse: {
    encode(_: MsgDeleteListingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteListingResponse;
    fromJSON(_: any): MsgDeleteListingResponse;
    toJSON(_: MsgDeleteListingResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteListingResponse>): MsgDeleteListingResponse;
};
export declare const MsgCreateAccount: {
    encode(message: MsgCreateAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAccount;
    fromJSON(object: any): MsgCreateAccount;
    toJSON(message: MsgCreateAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreateAccount>): MsgCreateAccount;
};
export declare const MsgCreateAccountResponse: {
    encode(message: MsgCreateAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAccountResponse;
    fromJSON(object: any): MsgCreateAccountResponse;
    toJSON(message: MsgCreateAccountResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateAccountResponse>): MsgCreateAccountResponse;
};
export declare const MsgUpdateAccount: {
    encode(message: MsgUpdateAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAccount;
    fromJSON(object: any): MsgUpdateAccount;
    toJSON(message: MsgUpdateAccount): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAccount>): MsgUpdateAccount;
};
export declare const MsgUpdateAccountResponse: {
    encode(_: MsgUpdateAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAccountResponse;
    fromJSON(_: any): MsgUpdateAccountResponse;
    toJSON(_: MsgUpdateAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAccountResponse>): MsgUpdateAccountResponse;
};
export declare const MsgDeleteAccount: {
    encode(message: MsgDeleteAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAccount;
    fromJSON(object: any): MsgDeleteAccount;
    toJSON(message: MsgDeleteAccount): unknown;
    fromPartial(object: DeepPartial<MsgDeleteAccount>): MsgDeleteAccount;
};
export declare const MsgDeleteAccountResponse: {
    encode(_: MsgDeleteAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAccountResponse;
    fromJSON(_: any): MsgDeleteAccountResponse;
    toJSON(_: MsgDeleteAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteAccountResponse>): MsgDeleteAccountResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreatePurchase(request: MsgCreatePurchase): Promise<MsgCreatePurchaseResponse>;
    UpdatePurchase(request: MsgUpdatePurchase): Promise<MsgUpdatePurchaseResponse>;
    DeletePurchase(request: MsgDeletePurchase): Promise<MsgDeletePurchaseResponse>;
    CreateListing(request: MsgCreateListing): Promise<MsgCreateListingResponse>;
    UpdateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse>;
    DeleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse>;
    CreateAccount(request: MsgCreateAccount): Promise<MsgCreateAccountResponse>;
    UpdateAccount(request: MsgUpdateAccount): Promise<MsgUpdateAccountResponse>;
    DeleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePurchase(request: MsgCreatePurchase): Promise<MsgCreatePurchaseResponse>;
    UpdatePurchase(request: MsgUpdatePurchase): Promise<MsgUpdatePurchaseResponse>;
    DeletePurchase(request: MsgDeletePurchase): Promise<MsgDeletePurchaseResponse>;
    CreateListing(request: MsgCreateListing): Promise<MsgCreateListingResponse>;
    UpdateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse>;
    DeleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse>;
    CreateAccount(request: MsgCreateAccount): Promise<MsgCreateAccountResponse>;
    UpdateAccount(request: MsgUpdateAccount): Promise<MsgUpdateAccountResponse>;
    DeleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
