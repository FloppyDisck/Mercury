package keeper

import (
	"context"
	"fmt"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePurchase(goCtx context.Context, msg *types.MsgCreatePurchase) (*types.MsgCreatePurchaseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasListing(ctx, msg.Listing) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Listing key %d doesn't exist", msg.Listing))
	}

	listing := k.GetListing(ctx, msg.Listing)

	//TODO: substract listing price from account
	//TODO: encrypt description

	id := k.AppendPurchase(
		ctx,
		msg.Creator,
		msg.Listing,
		listing.Price.Amount,
		listing.Price.Currency,
		msg.Description,
	)

	//TODO: validate the currency

	return &types.MsgCreatePurchaseResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePurchase(goCtx context.Context, msg *types.MsgUpdatePurchase) (*types.MsgUpdatePurchaseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	if !k.HasPurchase(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPurchaseOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	purchase := k.GetPurchase(ctx, msg.Id)
	purchase.Description = msg.Description

	k.SetPurchase(ctx, purchase)

	return &types.MsgUpdatePurchaseResponse{}, nil
}

func (k msgServer) DeletePurchase(goCtx context.Context, msg *types.MsgDeletePurchase) (*types.MsgDeletePurchaseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPurchase(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPurchaseOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePurchase(ctx, msg.Id)

	return &types.MsgDeletePurchaseResponse{}, nil
}
