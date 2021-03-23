/* eslint-disable */
import { Account } from "../Mercury/account";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "FloppyDisck.Mercury.Mercury";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.accountList) {
            Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.accountList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountList.push(Account.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.accountList = [];
        if (object.accountList !== undefined && object.accountList !== null) {
            for (const e of object.accountList) {
                message.accountList.push(Account.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.accountList) {
            obj.accountList = message.accountList.map((e) => e ? Account.toJSON(e) : undefined);
        }
        else {
            obj.accountList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.accountList = [];
        if (object.accountList !== undefined && object.accountList !== null) {
            for (const e of object.accountList) {
                message.accountList.push(Account.fromPartial(e));
            }
        }
        return message;
    },
};
