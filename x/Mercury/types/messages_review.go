package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateReview{}

func NewMsgCreateReview(creator string, reviewType string, reviewId uint64, reviewScore uint32, description string) *MsgCreateReview {
	return &MsgCreateReview{
		Creator:     creator,
		ReviewType:  reviewType,
		ReviewId:    reviewId,
		Score:       reviewScore,
		Description: description,
	}
}

func (msg *MsgCreateReview) Route() string {
	return RouterKey
}

func (msg *MsgCreateReview) Type() string {
	return "CreateReview"
}

func (msg *MsgCreateReview) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateReview) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateReview) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Score <= 0 || msg.Score > 10 {
		return sdkerrors.Wrapf(ErrInvalidReviewScore, "invalid review score (%s)", msg.Score)
	}
	if msg.ReviewType != "account" && msg.ReviewType != "listing" {
		return sdkerrors.Wrapf(ErrInvalidReviewType, "invalid review score (%s)", msg.Score)
	}
	if msg.Description == "" || len(msg.Description) > 280 {
		return sdkerrors.Wrapf(ErrInvalidDescription, "Description is invalid (%s)")
	}

	return nil
}

var _ sdk.Msg = &MsgUpdateReview{}

func NewMsgUpdateReview(creator string, id uint64, score uint32, description string) *MsgUpdateReview {
	return &MsgUpdateReview{
		Id:          id,
		Creator:     creator,
		Score:       score,
		Description: description,
	}
}

func (msg *MsgUpdateReview) Route() string {
	return RouterKey
}

func (msg *MsgUpdateReview) Type() string {
	return "UpdateReview"
}

func (msg *MsgUpdateReview) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateReview) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateReview) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Score <= 0 || msg.Score > 10 {
		return sdkerrors.Wrapf(ErrInvalidReviewScore, "invalid review score (%s)", msg.Score)
	}
	if msg.Description == "" || len(msg.Description) > 280 {
		return sdkerrors.Wrapf(ErrInvalidDescription, "Description is invalid (%s)")
	}
	return nil
}

var _ sdk.Msg = &MsgCreateReview{}

func NewMsgDeleteReview(creator string, id uint64) *MsgDeleteReview {
	return &MsgDeleteReview{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteReview) Route() string {
	return RouterKey
}

func (msg *MsgDeleteReview) Type() string {
	return "DeleteReview"
}

func (msg *MsgDeleteReview) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteReview) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteReview) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
