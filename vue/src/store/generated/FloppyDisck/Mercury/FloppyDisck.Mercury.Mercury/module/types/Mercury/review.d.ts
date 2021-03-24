import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "FloppyDisck.Mercury.Mercury";
export interface Reviewed {
    type: string;
    id: number;
}
export interface Review {
    creator: string;
    id: number;
    reviewed: Reviewed | undefined;
    score: number;
    description: string;
}
export declare const Reviewed: {
    encode(message: Reviewed, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Reviewed;
    fromJSON(object: any): Reviewed;
    toJSON(message: Reviewed): unknown;
    fromPartial(object: DeepPartial<Reviewed>): Reviewed;
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
