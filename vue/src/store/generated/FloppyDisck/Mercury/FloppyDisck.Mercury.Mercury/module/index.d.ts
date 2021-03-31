import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
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
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteAccount: (data: MsgDeleteAccount) => EncodeObject;
    msgUpdateReview: (data: MsgUpdateReview) => EncodeObject;
    msgDeleteReview: (data: MsgDeleteReview) => EncodeObject;
    msgCreateAccount: (data: MsgCreateAccount) => EncodeObject;
    msgCreatePurchase: (data: MsgCreatePurchase) => EncodeObject;
    msgUpdateListing: (data: MsgUpdateListing) => EncodeObject;
    msgUpdateAccount: (data: MsgUpdateAccount) => EncodeObject;
    msgDeletePurchase: (data: MsgDeletePurchase) => EncodeObject;
    msgDeleteListing: (data: MsgDeleteListing) => EncodeObject;
    msgCreateReview: (data: MsgCreateReview) => EncodeObject;
    msgCreateListing: (data: MsgCreateListing) => EncodeObject;
    msgUpdatePurchase: (data: MsgUpdatePurchase) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
