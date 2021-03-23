import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteListing } from "./types/Mercury/tx";
import { MsgCreateAccount } from "./types/Mercury/tx";
import { MsgUpdateAccount } from "./types/Mercury/tx";
import { MsgDeletePurchase } from "./types/Mercury/tx";
import { MsgUpdateListing } from "./types/Mercury/tx";
import { MsgCreatePurchase } from "./types/Mercury/tx";
import { MsgDeleteAccount } from "./types/Mercury/tx";
import { MsgUpdatePurchase } from "./types/Mercury/tx";
import { MsgCreateListing } from "./types/Mercury/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteListing: (data: MsgDeleteListing) => EncodeObject;
    msgCreateAccount: (data: MsgCreateAccount) => EncodeObject;
    msgUpdateAccount: (data: MsgUpdateAccount) => EncodeObject;
    msgDeletePurchase: (data: MsgDeletePurchase) => EncodeObject;
    msgUpdateListing: (data: MsgUpdateListing) => EncodeObject;
    msgCreatePurchase: (data: MsgCreatePurchase) => EncodeObject;
    msgDeleteAccount: (data: MsgDeleteAccount) => EncodeObject;
    msgUpdatePurchase: (data: MsgUpdatePurchase) => EncodeObject;
    msgCreateListing: (data: MsgCreateListing) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
