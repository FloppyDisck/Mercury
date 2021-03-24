import { Writer, Reader } from "protobufjs/minimal";
import { Price } from "../Mercury/util";
export declare const protobufPackage = "FloppyDisck.Mercury.Mercury";
export interface Purchase {
    creator: string;
    id: number;
    listing: number;
    price: Price | undefined;
    description: string;
}
export declare const Purchase: {
    encode(message: Purchase, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Purchase;
    fromJSON(object: any): Purchase;
    toJSON(message: Purchase): unknown;
    fromPartial(object: DeepPartial<Purchase>): Purchase;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
