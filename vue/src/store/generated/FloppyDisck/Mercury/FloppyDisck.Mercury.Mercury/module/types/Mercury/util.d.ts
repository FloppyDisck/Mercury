import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "FloppyDisck.Mercury.Mercury";
export interface Price {
    amount: number;
    currency: string;
}
export interface Review {
    average: number;
    count: number;
    sum: number;
}
export declare const Price: {
    encode(message: Price, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Price;
    fromJSON(object: any): Price;
    toJSON(message: Price): unknown;
    fromPartial(object: DeepPartial<Price>): Price;
};
export declare const Review: {
    encode(message: Review, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Review;
    fromJSON(object: any): Review;
    toJSON(message: Review): unknown;
    fromPartial(object: DeepPartial<Review>): Review;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
