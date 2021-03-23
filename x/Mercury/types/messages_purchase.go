package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePurchase{}

func NewMsgCreatePurchase(creator string, listing uint64, description string) *MsgCreatePurchase {
	return &MsgCreatePurchase{
		Creator:     creator,
		Listing:     listing,
		Description: description,
	}
}

func (msg *MsgCreatePurchase) Route() string {
	return RouterKey
}

func (msg *MsgCreatePurchase) Type() string {
	return "CreatePurchase"
}

func (msg *MsgCreatePurchase) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePurchase) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePurchase) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Description == "" || len(msg.Description) > 280 {
		return sdkerrors.Wrapf(ErrInvalidDescription, "Description is invalid (%s)")
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePurchase{}

func NewMsgUpdatePurchase(creator string, id uint64, description string) *MsgUpdatePurchase {
	return &MsgUpdatePurchase{
		Id:          id,
		Creator:     creator,
		Description: description,
	}
}

func (msg *MsgUpdatePurchase) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePurchase) Type() string {
	return "UpdatePurchase"
}

func (msg *MsgUpdatePurchase) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePurchase) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePurchase) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Description == "" || len(msg.Description) > 280 {
		return sdkerrors.Wrapf(ErrInvalidDescription, "Description is invalid (%s)")
	}
	return nil
}

var _ sdk.Msg = &MsgCreatePurchase{}

func NewMsgDeletePurchase(creator string, id uint64) *MsgDeletePurchase {
	return &MsgDeletePurchase{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePurchase) Route() string {
	return RouterKey
}

func (msg *MsgDeletePurchase) Type() string {
	return "DeletePurchase"
}

func (msg *MsgDeletePurchase) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePurchase) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePurchase) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
