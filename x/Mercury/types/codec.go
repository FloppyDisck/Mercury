package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateReview{}, "Mercury/CreateReview", nil)
	cdc.RegisterConcrete(&MsgUpdateReview{}, "Mercury/UpdateReview", nil)
	cdc.RegisterConcrete(&MsgDeleteReview{}, "Mercury/DeleteReview", nil)

	cdc.RegisterConcrete(&MsgCreatePurchase{}, "Mercury/CreatePurchase", nil)
	cdc.RegisterConcrete(&MsgUpdatePurchase{}, "Mercury/UpdatePurchase", nil)
	cdc.RegisterConcrete(&MsgDeletePurchase{}, "Mercury/DeletePurchase", nil)

	cdc.RegisterConcrete(&MsgCreateListing{}, "Mercury/CreateListing", nil)
	cdc.RegisterConcrete(&MsgUpdateListing{}, "Mercury/UpdateListing", nil)
	cdc.RegisterConcrete(&MsgDeleteListing{}, "Mercury/DeleteListing", nil)

	cdc.RegisterConcrete(&MsgCreateAccount{}, "Mercury/CreateAccount", nil)
	cdc.RegisterConcrete(&MsgUpdateAccount{}, "Mercury/UpdateAccount", nil)
	cdc.RegisterConcrete(&MsgDeleteAccount{}, "Mercury/DeleteAccount", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateReview{},
		&MsgUpdateReview{},
		&MsgDeleteReview{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePurchase{},
		&MsgUpdatePurchase{},
		&MsgDeletePurchase{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateListing{},
		&MsgUpdateListing{},
		&MsgDeleteListing{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAccount{},
		&MsgUpdateAccount{},
		&MsgDeleteAccount{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
