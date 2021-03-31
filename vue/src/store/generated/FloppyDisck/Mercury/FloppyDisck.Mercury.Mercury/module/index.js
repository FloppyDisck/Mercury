// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteAccount } from "./types/Mercury/tx";
import { MsgUpdateReview } from "./types/Mercury/tx";
import { MsgDeleteReview } from "./types/Mercury/tx";
import { MsgCreateAccount } from "./types/Mercury/tx";
import { MsgCreatePurchase } from "./types/Mercury/tx";
import { MsgUpdateListing } from "./types/Mercury/tx";
import { MsgUpdateAccount } from "./types/Mercury/tx";
import { MsgDeletePurchase } from "./types/Mercury/tx";
import { MsgDeleteListing } from "./types/Mercury/tx";
import { MsgCreateReview } from "./types/Mercury/tx";
import { MsgCreateListing } from "./types/Mercury/tx";
import { MsgUpdatePurchase } from "./types/Mercury/tx";
const types = [
    ["/FloppyDisck.Mercury.Mercury.MsgDeleteAccount", MsgDeleteAccount],
    ["/FloppyDisck.Mercury.Mercury.MsgUpdateReview", MsgUpdateReview],
    ["/FloppyDisck.Mercury.Mercury.MsgDeleteReview", MsgDeleteReview],
    ["/FloppyDisck.Mercury.Mercury.MsgCreateAccount", MsgCreateAccount],
    ["/FloppyDisck.Mercury.Mercury.MsgCreatePurchase", MsgCreatePurchase],
    ["/FloppyDisck.Mercury.Mercury.MsgUpdateListing", MsgUpdateListing],
    ["/FloppyDisck.Mercury.Mercury.MsgUpdateAccount", MsgUpdateAccount],
    ["/FloppyDisck.Mercury.Mercury.MsgDeletePurchase", MsgDeletePurchase],
    ["/FloppyDisck.Mercury.Mercury.MsgDeleteListing", MsgDeleteListing],
    ["/FloppyDisck.Mercury.Mercury.MsgCreateReview", MsgCreateReview],
    ["/FloppyDisck.Mercury.Mercury.MsgCreateListing", MsgCreateListing],
    ["/FloppyDisck.Mercury.Mercury.MsgUpdatePurchase", MsgUpdatePurchase],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeleteAccount: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgDeleteAccount", value: data }),
        msgUpdateReview: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgUpdateReview", value: data }),
        msgDeleteReview: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgDeleteReview", value: data }),
        msgCreateAccount: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgCreateAccount", value: data }),
        msgCreatePurchase: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgCreatePurchase", value: data }),
        msgUpdateListing: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgUpdateListing", value: data }),
        msgUpdateAccount: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgUpdateAccount", value: data }),
        msgDeletePurchase: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgDeletePurchase", value: data }),
        msgDeleteListing: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgDeleteListing", value: data }),
        msgCreateReview: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgCreateReview", value: data }),
        msgCreateListing: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgCreateListing", value: data }),
        msgUpdatePurchase: (data) => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgUpdatePurchase", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
