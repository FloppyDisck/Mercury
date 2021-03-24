package keeper

import (
	"context"
	"fmt"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateReview(goCtx context.Context, msg *types.MsgCreateReview) (*types.MsgCreateReviewResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if msg.ReviewType == "account" {
		if !k.HasAccount(ctx, msg.ReviewId) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.ReviewId))
		}
		// Get if user can review account
		if !k.HasPurchasedListingAccount(ctx, msg.ReviewId, msg.Creator) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, fmt.Sprintf("user has not purchased anything on that account %d", msg.ReviewId))
		}
		// Add Review
		k.AddAccountReview(ctx, msg.ReviewId, msg.Score)

	} else if msg.ReviewType == "listing" {
		if !k.HasListing(ctx, msg.ReviewId) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.ReviewId))
		}
		// Get if user can review listing
		if !k.HasPurchased(ctx, msg.ReviewId, msg.Creator) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, fmt.Sprintf("user has not purchased %d", msg.ReviewId))
		}
		// Add Review
		k.AddListingReview(ctx, msg.ReviewId, msg.Score)

	}

	id := k.AppendReview(
		ctx,
		msg.Creator,
		msg.ReviewType,
		msg.ReviewId,
		msg.Score,
		msg.Description,
	)

	return &types.MsgCreateReviewResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateReview(goCtx context.Context, msg *types.MsgUpdateReview) (*types.MsgUpdateReviewResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	if !k.HasReview(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetReviewOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	review := k.GetReview(ctx, msg.Id)

	if review.Reviewed.Type == "account" {
		// Remove original score
		k.RemoveAccountReview(ctx, review.Id, review.Score)
		// Add Review
		k.AddAccountReview(ctx, review.Id, msg.Score)

	} else if review.Reviewed.Type == "listing" {
		// Remove original score
		k.RemoveListingReview(ctx, review.Id, review.Score)
		// Add Review
		k.AddListingReview(ctx, review.Id, msg.Score)

	}

	review.Score = msg.Score
	review.Description = msg.Description

	k.SetReview(ctx, review)

	return &types.MsgUpdateReviewResponse{}, nil
}

func (k msgServer) DeleteReview(goCtx context.Context, msg *types.MsgDeleteReview) (*types.MsgDeleteReviewResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasReview(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetReviewOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	review := k.GetReview(ctx, msg.Id)

	if review.Reviewed.Type == "account" {
		// Remove original score
		k.RemoveAccountReview(ctx, review.Id, review.Score)

	} else if review.Reviewed.Type == "listing" {
		// Remove original score
		k.RemoveListingReview(ctx, review.Id, review.Score)

	}

	k.RemoveReview(ctx, msg.Id)

	return &types.MsgDeleteReviewResponse{}, nil
}
