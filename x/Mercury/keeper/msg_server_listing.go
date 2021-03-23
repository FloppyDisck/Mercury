package keeper

import (
	"context"
	"fmt"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateListing(goCtx context.Context, msg *types.MsgCreateListing) (*types.MsgCreateListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendListing(
		ctx,
		msg.Creator,
		msg.Amount,
		msg.Currency,
		msg.Name,
		msg.Description,
	)

	return &types.MsgCreateListingResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateListing(goCtx context.Context, msg *types.MsgUpdateListing) (*types.MsgUpdateListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	if !k.HasListing(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	listing := k.GetListing(ctx, msg.Id)
	listing.Name = msg.Name
	listing.Price.Amount = msg.Amount
	//TODO: check supported currency
	listing.Price.Currency = msg.Currency
	listing.Description = msg.Description

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetListingOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetListing(ctx, listing)

	return &types.MsgUpdateListingResponse{}, nil
}

func (k msgServer) DeleteListing(goCtx context.Context, msg *types.MsgDeleteListing) (*types.MsgDeleteListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasListing(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetListingOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveListing(ctx, msg.Id)

	return &types.MsgDeleteListingResponse{}, nil
}
