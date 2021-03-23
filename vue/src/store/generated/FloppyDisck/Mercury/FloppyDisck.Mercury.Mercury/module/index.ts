// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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


const types = [
  ["/FloppyDisck.Mercury.Mercury.MsgDeleteListing", MsgDeleteListing],
  ["/FloppyDisck.Mercury.Mercury.MsgCreateAccount", MsgCreateAccount],
  ["/FloppyDisck.Mercury.Mercury.MsgUpdateAccount", MsgUpdateAccount],
  ["/FloppyDisck.Mercury.Mercury.MsgDeletePurchase", MsgDeletePurchase],
  ["/FloppyDisck.Mercury.Mercury.MsgUpdateListing", MsgUpdateListing],
  ["/FloppyDisck.Mercury.Mercury.MsgCreatePurchase", MsgCreatePurchase],
  ["/FloppyDisck.Mercury.Mercury.MsgDeleteAccount", MsgDeleteAccount],
  ["/FloppyDisck.Mercury.Mercury.MsgUpdatePurchase", MsgUpdatePurchase],
  ["/FloppyDisck.Mercury.Mercury.MsgCreateListing", MsgCreateListing],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgDeleteListing: (data: MsgDeleteListing): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgDeleteListing", value: data }),
    msgCreateAccount: (data: MsgCreateAccount): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgCreateAccount", value: data }),
    msgUpdateAccount: (data: MsgUpdateAccount): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgUpdateAccount", value: data }),
    msgDeletePurchase: (data: MsgDeletePurchase): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgDeletePurchase", value: data }),
    msgUpdateListing: (data: MsgUpdateListing): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgUpdateListing", value: data }),
    msgCreatePurchase: (data: MsgCreatePurchase): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgCreatePurchase", value: data }),
    msgDeleteAccount: (data: MsgDeleteAccount): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgDeleteAccount", value: data }),
    msgUpdatePurchase: (data: MsgUpdatePurchase): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgUpdatePurchase", value: data }),
    msgCreateListing: (data: MsgCreateListing): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgCreateListing", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
