package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAccount{}

func NewMsgCreateAccount(creator string, name string) *MsgCreateAccount {
	return &MsgCreateAccount{
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgCreateAccount) Route() string {
	return RouterKey
}

func (msg *MsgCreateAccount) Type() string {
	return "CreateAccount"
}

func (msg *MsgCreateAccount) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAccount) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAccount) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Name == "" {
		return sdkerrors.Wrapf(ErrInvalidAccountName, "invalid account name", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateAccount{}

func NewMsgUpdateAccount(creator string, id uint64, name string) *MsgUpdateAccount {
	return &MsgUpdateAccount{
		Id:      id,
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgUpdateAccount) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAccount) Type() string {
	return "UpdateAccount"
}

func (msg *MsgUpdateAccount) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAccount) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAccount) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Name == "" {
		return sdkerrors.Wrapf(ErrInvalidAccountName, "invalid account name", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateAccount{}

func NewMsgDeleteAccount(creator string, id uint64) *MsgDeleteAccount {
	return &MsgDeleteAccount{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteAccount) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAccount) Type() string {
	return "DeleteAccount"
}

func (msg *MsgDeleteAccount) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAccount) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAccount) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
