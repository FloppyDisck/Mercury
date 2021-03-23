// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteAccount } from "./types/Mercury/tx";
import { MsgUpdateListing } from "./types/Mercury/tx";
import { MsgUpdateAccount } from "./types/Mercury/tx";
import { MsgCreateListing } from "./types/Mercury/tx";
import { MsgDeleteListing } from "./types/Mercury/tx";
import { MsgCreateAccount } from "./types/Mercury/tx";


const types = [
  ["/FloppyDisck.Mercury.Mercury.MsgDeleteAccount", MsgDeleteAccount],
  ["/FloppyDisck.Mercury.Mercury.MsgUpdateListing", MsgUpdateListing],
  ["/FloppyDisck.Mercury.Mercury.MsgUpdateAccount", MsgUpdateAccount],
  ["/FloppyDisck.Mercury.Mercury.MsgCreateListing", MsgCreateListing],
  ["/FloppyDisck.Mercury.Mercury.MsgDeleteListing", MsgDeleteListing],
  ["/FloppyDisck.Mercury.Mercury.MsgCreateAccount", MsgCreateAccount],
  
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
    msgDeleteAccount: (data: MsgDeleteAccount): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgDeleteAccount", value: data }),
    msgUpdateListing: (data: MsgUpdateListing): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgUpdateListing", value: data }),
    msgUpdateAccount: (data: MsgUpdateAccount): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgUpdateAccount", value: data }),
    msgCreateListing: (data: MsgCreateListing): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgCreateListing", value: data }),
    msgDeleteListing: (data: MsgDeleteListing): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgDeleteListing", value: data }),
    msgCreateAccount: (data: MsgCreateAccount): EncodeObject => ({ typeUrl: "/FloppyDisck.Mercury.Mercury.MsgCreateAccount", value: data }),
    
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
