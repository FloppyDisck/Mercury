import { Writer, Reader } from "protobufjs/minimal";
import { Review } from "../Mercury/util";
export declare const protobufPackage = "FloppyDisck.Mercury.Mercury";
export interface Account {
    creator: string;
    id: number;
    name: string;
    review: Review | undefined;
}
export declare const Account: {
    encode(message: Account, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    fromPartial(object: DeepPartial<Account>): Account;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
