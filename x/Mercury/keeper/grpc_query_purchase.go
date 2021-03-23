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

func (k Keeper) PurchaseAll(c context.Context, req *types.QueryAllPurchaseRequest) (*types.QueryAllPurchaseResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var purchases []*types.Purchase
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	purchaseStore := prefix.NewStore(store, types.KeyPrefix(types.PurchaseKey))

	pageRes, err := query.Paginate(purchaseStore, req.Pagination, func(key []byte, value []byte) error {
		var purchase types.Purchase
		if err := k.cdc.UnmarshalBinaryBare(value, &purchase); err != nil {
			return err
		}

		purchases = append(purchases, &purchase)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPurchaseResponse{Purchase: purchases, Pagination: pageRes}, nil
}

func (k Keeper) Purchase(c context.Context, req *types.QueryGetPurchaseRequest) (*types.QueryGetPurchaseResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var purchase types.Purchase
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPurchase(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPurchaseIDBytes(req.Id)), &purchase)

	return &types.QueryGetPurchaseResponse{Purchase: &purchase}, nil
}

func (k Keeper) PurchaseWithListing(c context.Context, req *types.QueryAllPurchaseWithListingRequest) (*types.QueryAllPurchaseResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var purchases []*types.Purchase
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	purchaseStore := prefix.NewStore(store, types.KeyPrefix(types.PurchaseListingKey))

	pageRes, err := types.PrefixPaginate(purchaseStore, types.KeyPrefix(strconv.Itoa(int(req.Listing))), req.Pagination, func(key []byte, value []byte) error {
		var purchase types.Purchase
		if err := k.cdc.UnmarshalBinaryBare(value, &purchase); err != nil {
			return err
		}

		purchases = append(purchases, &purchase)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPurchaseResponse{Purchase: purchases, Pagination: pageRes}, nil
}

func (k Keeper) PurchaseWithBuyer(c context.Context, req *types.QueryAllPurchaseWithBuyerRequest) (*types.QueryAllPurchaseResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var purchases []*types.Purchase

	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	purchaseStore := prefix.NewStore(store, types.KeyPrefix(types.PurchaseBuyerKey))

	pageRes, err := types.PrefixPaginate(purchaseStore, types.KeyPrefix(req.Buyer), req.Pagination, func(key []byte, value []byte) error {
		var purchase types.Purchase
		if err := k.cdc.UnmarshalBinaryBare(value, &purchase); err != nil {
			return err
		}

		purchases = append(purchases, &purchase)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPurchaseResponse{Purchase: purchases, Pagination: pageRes}, nil
}
