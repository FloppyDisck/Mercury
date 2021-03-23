import { Writer, Reader } from "protobufjs/minimal";
import { Price, Review } from "../Mercury/util";
export declare const protobufPackage = "FloppyDisck.Mercury.Mercury";
export interface Listing {
    creator: string;
    id: number;
    price: Price | undefined;
    name: string;
    description: string;
    review: Review | undefined;
}
export declare const Listing: {
    encode(message: Listing, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Listing;
    fromJSON(object: any): Listing;
    toJSON(message: Listing): unknown;
    fromPartial(object: DeepPartial<Listing>): Listing;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
