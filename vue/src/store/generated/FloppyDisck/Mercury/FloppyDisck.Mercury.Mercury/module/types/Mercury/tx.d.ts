import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "FloppyDisck.Mercury.Mercury";
/** this line is used by starport scaffolding # proto/tx/message */
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
    CreateAccount(request: MsgCreateAccount): Promise<MsgCreateAccountResponse>;
    UpdateAccount(request: MsgUpdateAccount): Promise<MsgUpdateAccountResponse>;
    DeleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
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
