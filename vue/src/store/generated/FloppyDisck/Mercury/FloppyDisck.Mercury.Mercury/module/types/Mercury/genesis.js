/* eslint-disable */
import { Review } from "../Mercury/review";
import { Purchase } from "../Mercury/purchase";
import { Listing } from "../Mercury/listing";
import { Account } from "../Mercury/account";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "FloppyDisck.Mercury.Mercury";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.reviewList) {
            Review.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.purchaseList) {
            Purchase.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.listingList) {
            Listing.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.accountList) {
            Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.reviewList = [];
        message.purchaseList = [];
        message.listingList = [];
        message.accountList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.reviewList.push(Review.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.purchaseList.push(Purchase.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.listingList.push(Listing.decode(reader, reader.uint32()));
                    break;
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
        message.reviewList = [];
        message.purchaseList = [];
        message.listingList = [];
        message.accountList = [];
        if (object.reviewList !== undefined && object.reviewList !== null) {
            for (const e of object.reviewList) {
                message.reviewList.push(Review.fromJSON(e));
            }
        }
        if (object.purchaseList !== undefined && object.purchaseList !== null) {
            for (const e of object.purchaseList) {
                message.purchaseList.push(Purchase.fromJSON(e));
            }
        }
        if (object.listingList !== undefined && object.listingList !== null) {
            for (const e of object.listingList) {
                message.listingList.push(Listing.fromJSON(e));
            }
        }
        if (object.accountList !== undefined && object.accountList !== null) {
            for (const e of object.accountList) {
                message.accountList.push(Account.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.reviewList) {
            obj.reviewList = message.reviewList.map((e) => e ? Review.toJSON(e) : undefined);
        }
        else {
            obj.reviewList = [];
        }
        if (message.purchaseList) {
            obj.purchaseList = message.purchaseList.map((e) => e ? Purchase.toJSON(e) : undefined);
        }
        else {
            obj.purchaseList = [];
        }
        if (message.listingList) {
            obj.listingList = message.listingList.map((e) => e ? Listing.toJSON(e) : undefined);
        }
        else {
            obj.listingList = [];
        }
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
        message.reviewList = [];
        message.purchaseList = [];
        message.listingList = [];
        message.accountList = [];
        if (object.reviewList !== undefined && object.reviewList !== null) {
            for (const e of object.reviewList) {
                message.reviewList.push(Review.fromPartial(e));
            }
        }
        if (object.purchaseList !== undefined && object.purchaseList !== null) {
            for (const e of object.purchaseList) {
                message.purchaseList.push(Purchase.fromPartial(e));
            }
        }
        if (object.listingList !== undefined && object.listingList !== null) {
            for (const e of object.listingList) {
                message.listingList.push(Listing.fromPartial(e));
            }
        }
        if (object.accountList !== undefined && object.accountList !== null) {
            for (const e of object.accountList) {
                message.accountList.push(Account.fromPartial(e));
            }
        }
        return message;
    },
};
