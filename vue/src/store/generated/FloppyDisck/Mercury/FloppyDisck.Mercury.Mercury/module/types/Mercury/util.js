/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "FloppyDisck.Mercury.Mercury";
const basePrice = { amount: 0, currency: "" };
export const Price = {
    encode(message, writer = Writer.create()) {
        if (message.amount !== 0) {
            writer.uint32(8).uint64(message.amount);
        }
        if (message.currency !== "") {
            writer.uint32(18).string(message.currency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrice };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.currency = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePrice };
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = String(object.currency);
        }
        else {
            message.currency = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.currency !== undefined && (obj.currency = message.currency);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePrice };
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = object.currency;
        }
        else {
            message.currency = "";
        }
        return message;
    },
};
const baseAvgReview = { average: 0, count: 0, sum: 0 };
export const AvgReview = {
    encode(message, writer = Writer.create()) {
        if (message.average !== 0) {
            writer.uint32(8).uint32(message.average);
        }
        if (message.count !== 0) {
            writer.uint32(16).uint32(message.count);
        }
        if (message.sum !== 0) {
            writer.uint32(24).uint32(message.sum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAvgReview };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.average = reader.uint32();
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                case 3:
                    message.sum = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAvgReview };
        if (object.average !== undefined && object.average !== null) {
            message.average = Number(object.average);
        }
        else {
            message.average = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        if (object.sum !== undefined && object.sum !== null) {
            message.sum = Number(object.sum);
        }
        else {
            message.sum = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.average !== undefined && (obj.average = message.average);
        message.count !== undefined && (obj.count = message.count);
        message.sum !== undefined && (obj.sum = message.sum);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAvgReview };
        if (object.average !== undefined && object.average !== null) {
            message.average = object.average;
        }
        else {
            message.average = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        if (object.sum !== undefined && object.sum !== null) {
            message.sum = object.sum;
        }
        else {
            message.sum = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
