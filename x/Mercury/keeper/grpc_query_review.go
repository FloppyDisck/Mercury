package keeper

import (
	"context"
	"strconv"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ReviewAll(c context.Context, req *types.QueryAllReviewRequest) (*types.QueryAllReviewResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var reviews []*types.Review
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	reviewStore := prefix.NewStore(store, types.KeyPrefix(types.ReviewKey))

	pageRes, err := query.Paginate(reviewStore, req.Pagination, func(key []byte, value []byte) error {
		var review types.Review
		if err := k.cdc.UnmarshalBinaryBare(value, &review); err != nil {
			return err
		}

		reviews = append(reviews, &review)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllReviewResponse{Review: reviews, Pagination: pageRes}, nil
}

func (k Keeper) Review(c context.Context, req *types.QueryGetReviewRequest) (*types.QueryGetReviewResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var review types.Review
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasReview(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetReviewIDBytes(req.Id)), &review)

	return &types.QueryGetReviewResponse{Review: &review}, nil
}

func (k Keeper) ReviewWithScore(c context.Context, req *types.QueryAllReviewWithScoreRequest) (*types.QueryAllReviewResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var reviews []*types.Review
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	reviewStore := prefix.NewStore(store, types.KeyPrefix(types.ReviewScoreKey))

	scoreStr := strconv.Itoa(int(req.Score))
	pageRes, err := types.PrefixPaginate(reviewStore, types.KeyPrefix(scoreStr), req.Pagination, func(key []byte, value []byte) error {
		var review types.Review
		if err := k.cdc.UnmarshalBinaryBare(value, &review); err != nil {
			return err
		}

		reviews = append(reviews, &review)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllReviewResponse{Review: reviews, Pagination: pageRes}, nil
}

func (k Keeper) ReviewWithReviewer(c context.Context, req *types.QueryAllReviewWithReviewerRequest) (*types.QueryAllReviewResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var reviews []*types.Review
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	reviewStore := prefix.NewStore(store, types.KeyPrefix(types.ReviewReviewerKey))

	pageRes, err := types.PrefixPaginate(reviewStore, types.KeyPrefix(req.Creator), req.Pagination, func(key []byte, value []byte) error {
		var review types.Review
		if err := k.cdc.UnmarshalBinaryBare(value, &review); err != nil {
			return err
		}

		reviews = append(reviews, &review)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllReviewResponse{Review: reviews, Pagination: pageRes}, nil
}

func (k Keeper) ReviewWithReviewed(c context.Context, req *types.QueryAllReviewWithReviewedRequest) (*types.QueryAllReviewResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var reviews []*types.Review
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	reviewStore := prefix.NewStore(store, types.KeyPrefix(types.ReviewReviewedKey))

	idStr := strconv.FormatUint(req.Id, 10)
	pageRes, err := types.PrefixPaginate(reviewStore, types.KeyPrefix(req.Type+"-"+idStr+"-"), req.Pagination, func(key []byte, value []byte) error {
		var review types.Review
		if err := k.cdc.UnmarshalBinaryBare(value, &review); err != nil {
			return err
		}

		reviews = append(reviews, &review)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllReviewResponse{Review: reviews, Pagination: pageRes}, nil
}
