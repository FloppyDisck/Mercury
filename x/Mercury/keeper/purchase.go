package keeper

import (
	"encoding/binary"
	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetPurchaseCount get the total number of purchase
func (k Keeper) GetPurchaseCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseCountKey))
	byteKey := types.KeyPrefix(types.PurchaseCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetPurchaseCount set the total number of purchase
func (k Keeper) SetPurchaseCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseCountKey))
	byteKey := types.KeyPrefix(types.PurchaseCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPurchase appends a purchase in the store with a new id and update the count
func (k Keeper) AppendPurchase(
	ctx sdk.Context,
	creator string,
	listing uint64,
	amount uint64,
	currency string,
	description string,
) uint64 {
	// Create the purchase
	count := k.GetPurchaseCount(ctx)

	var price = types.Price{
		Amount:   amount,
		Currency: currency,
	}

	var purchase = types.Purchase{
		Creator:     creator,
		Id:          count,
		Listing:     listing,
		Price:       &price,
		Description: description,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseKey))
	value := k.cdc.MustMarshalBinaryBare(&purchase)
	store.Set(GetPurchaseIDBytes(purchase.Id), value)

	countStr := strconv.FormatUint(count, 10)
	listingStr := strconv.FormatUint(listing, 10)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseListingKey)).Set(types.GetStringBytes(listingStr+"-"+countStr), value)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseBuyerKey)).Set(types.GetStringBytes(creator+"-"+countStr), value)

	// Update purchase count
	k.SetPurchaseCount(ctx, count+1)

	return count
}

// SetPurchase set a specific purchase in the store
func (k Keeper) SetPurchase(ctx sdk.Context, purchase types.Purchase) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseKey))
	b := k.cdc.MustMarshalBinaryBare(&purchase)
	store.Set(GetPurchaseIDBytes(purchase.Id), b)

	countStr := strconv.FormatUint(purchase.Id, 10)
	listingStr := strconv.FormatUint(purchase.Listing, 10)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseListingKey)).Set(types.GetStringBytes(listingStr+"-"+countStr), b)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseBuyerKey)).Set(types.GetStringBytes(purchase.Creator+"-"+countStr), b)
}

// GetPurchase returns a purchase from its id
func (k Keeper) GetPurchase(ctx sdk.Context, id uint64) types.Purchase {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseKey))
	var purchase types.Purchase
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPurchaseIDBytes(id)), &purchase)
	return purchase
}

// HasPurchase checks if the purchase exists in the store
func (k Keeper) HasPurchase(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseKey))
	return store.Has(GetPurchaseIDBytes(id))
}

// GetPurchaseOwner returns the creator of the purchase
func (k Keeper) GetPurchaseOwner(ctx sdk.Context, id uint64) string {
	return k.GetPurchase(ctx, id).Creator
}

// RemovePurchase removes a purchase from the store
func (k Keeper) RemovePurchase(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseKey))
	store.Delete(GetPurchaseIDBytes(id))
}

// GetAllPurchase returns all purchase
func (k Keeper) GetAllPurchase(ctx sdk.Context) (list []types.Purchase) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PurchaseKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Purchase
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPurchaseIDBytes returns the byte representation of the ID
func GetPurchaseIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPurchaseIDFromBytes returns ID in uint64 format from a byte array
func GetPurchaseIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
