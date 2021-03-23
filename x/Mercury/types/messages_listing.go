package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateListing{}

func NewMsgCreateListing(creator string, amount uint64, currency string, name string, description string) *MsgCreateListing {
	return &MsgCreateListing{
		Creator:     creator,
		Amount:      amount,
		Currency:    currency,
		Name:        name,
		Description: description,
	}
}

func (msg *MsgCreateListing) Route() string {
	return RouterKey
}

func (msg *MsgCreateListing) Type() string {
	return "CreateListing"
}

func (msg *MsgCreateListing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateListing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateListing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Amount <= 0 {
		return sdkerrors.Wrapf(ErrAmountInvalid, "Amount is invalid (%s)")
	}
	if msg.Currency == "" {
		return sdkerrors.Wrapf(ErrCurrencyInvalid, "Currency is invalid (%s)")
	}
	if msg.Name == "" {
		return sdkerrors.Wrapf(ErrInvalidName, "Name is invalid (%s)")
	}
	if msg.Description == "" || len(msg.Description) > 280 {
		return sdkerrors.Wrapf(ErrInvalidDescription, "Description is invalid (%s)")
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateListing{}

func NewMsgUpdateListing(creator string, id uint64, amount uint64, currency string, name string, description string) *MsgUpdateListing {
	return &MsgUpdateListing{
		Id:          id,
		Creator:     creator,
		Amount:      amount,
		Currency:    currency,
		Name:        name,
		Description: description,
	}
}

func (msg *MsgUpdateListing) Route() string {
	return RouterKey
}

func (msg *MsgUpdateListing) Type() string {
	return "UpdateListing"
}

func (msg *MsgUpdateListing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateListing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateListing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Amount <= 0 {
		return sdkerrors.Wrapf(ErrAmountInvalid, "Amount is invalid (%s)")
	}
	if msg.Currency == "" {
		return sdkerrors.Wrapf(ErrCurrencyInvalid, "Currency is invalid (%s)")
	}
	if msg.Name == "" {
		return sdkerrors.Wrapf(ErrInvalidName, "Name is invalid (%s)")
	}
	if msg.Description == "" || len(msg.Description) > 280 {
		return sdkerrors.Wrapf(ErrInvalidDescription, "Description is invalid (%s)")
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteListing{}

func NewMsgDeleteListing(creator string, id uint64) *MsgDeleteListing {
	return &MsgDeleteListing{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteListing) Route() string {
	return RouterKey
}

func (msg *MsgDeleteListing) Type() string {
	return "DeleteListing"
}

func (msg *MsgDeleteListing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteListing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteListing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
