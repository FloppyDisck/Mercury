package keeper

import (
	"context"
	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"strconv"
)

func (k Keeper) ListingAll(c context.Context, req *types.QueryAllListingRequest) (*types.QueryAllListingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var listings []*types.Listing
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	listingStore := prefix.NewStore(store, types.KeyPrefix(types.ListingKey))

	pageRes, err := query.Paginate(listingStore, req.Pagination, func(key []byte, value []byte) error {
		var listing types.Listing
		if err := k.cdc.UnmarshalBinaryBare(value, &listing); err != nil {
			return err
		}

		listings = append(listings, &listing)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllListingResponse{Listing: listings, Pagination: pageRes}, nil
}

func (k Keeper) ListingWithSeller(c context.Context, req *types.QueryAllListingWithSellerRequest) (*types.QueryAllListingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var listings []*types.Listing
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	accountStore := prefix.NewStore(store, types.KeyPrefix(types.ListingSellerKey))

	pageRes, err := types.PrefixPaginate(accountStore, types.KeyPrefix(req.Seller), req.Pagination, func(key []byte, value []byte) error {
		var listing types.Listing
		if err := k.cdc.UnmarshalBinaryBare(value, &listing); err != nil {
			return err
		}

		listings = append(listings, &listing)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllListingResponse{Listing: listings, Pagination: pageRes}, nil
}

func (k Keeper) ListingWithReview(c context.Context, req *types.QueryAllListingWithReviewRequest) (*types.QueryAllListingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var listings []*types.Listing
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	accountStore := prefix.NewStore(store, types.KeyPrefix(types.ListingReviewKey))

	pageRes, err := types.PrefixPaginate(accountStore, types.KeyPrefix(strconv.Itoa(int(req.Review))), req.Pagination, func(key []byte, value []byte) error {
		var listing types.Listing
		if err := k.cdc.UnmarshalBinaryBare(value, &listing); err != nil {
			return err
		}

		listings = append(listings, &listing)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllListingResponse{Listing: listings, Pagination: pageRes}, nil
}

func (k Keeper) ListingWithName(c context.Context, req *types.QueryAllListingWithNameRequest) (*types.QueryAllListingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var listings []*types.Listing
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	accountStore := prefix.NewStore(store, types.KeyPrefix(types.ListingNameKey))

	pageRes, err := types.PrefixPaginate(accountStore, types.KeyPrefix(req.Name), req.Pagination, func(key []byte, value []byte) error {
		var listing types.Listing
		if err := k.cdc.UnmarshalBinaryBare(value, &listing); err != nil {
			return err
		}

		listings = append(listings, &listing)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllListingResponse{Listing: listings, Pagination: pageRes}, nil
}

func (k Keeper) Listing(c context.Context, req *types.QueryGetListingRequest) (*types.QueryGetListingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var listing types.Listing
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasListing(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetListingIDBytes(req.Id)), &listing)

	return &types.QueryGetListingResponse{Listing: &listing}, nil
}
