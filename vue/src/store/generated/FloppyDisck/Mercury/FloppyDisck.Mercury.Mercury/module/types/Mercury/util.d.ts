import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "FloppyDisck.Mercury.Mercury";
export interface Price {
    amount: number;
    currency: string;
}
export interface AvgReview {
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
export declare const AvgReview: {
    encode(message: AvgReview, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AvgReview;
    fromJSON(object: any): AvgReview;
    toJSON(message: AvgReview): unknown;
    fromPartial(object: DeepPartial<AvgReview>): AvgReview;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
