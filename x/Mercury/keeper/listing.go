package keeper

import (
	"encoding/binary"
	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetListingCount get the total number of listing
func (k Keeper) GetListingCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingCountKey))
	byteKey := types.KeyPrefix(types.ListingCountKey)
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

// SetListingCount set the total number of listing
func (k Keeper) SetListingCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingCountKey))
	byteKey := types.KeyPrefix(types.ListingCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendListing appends a listing in the store with a new id and update the count
func (k Keeper) AppendListing(
	ctx sdk.Context,
	creator string,
	amount uint64,
	currency string,
	name string,
	description string,
) uint64 {
	// Create the listing
	count := k.GetListingCount(ctx)

	var review = types.AvgReview{
		Average: 0,
		Count:   0,
		Sum:     0,
	}

	var price = types.Price{
		Amount:   amount,
		Currency: currency,
	}

	var listing = types.Listing{
		Creator:     creator,
		Id:          count,
		Price:       &price,
		Name:        name,
		Description: description,
		Review:      &review,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKey))
	value := k.cdc.MustMarshalBinaryBare(&listing)
	store.Set(GetListingIDBytes(listing.Id), value)

	countStr := strconv.FormatUint(count, 10)
	reviewStr := strconv.Itoa(int(review.Average))
	// Extra key stores
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingNameKey)).Set(types.GetStringBytes(name+"-"+countStr), value)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingReviewKey)).Set(types.GetStringBytes(reviewStr+"-"+countStr), value)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingSellerKey)).Set(types.GetStringBytes(creator+"-"+countStr), value)

	// Update listing count
	k.SetListingCount(ctx, count+1)

	return count
}

// SetListing set a specific listing in the store
func (k Keeper) SetListing(ctx sdk.Context, listing types.Listing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKey))
	b := k.cdc.MustMarshalBinaryBare(&listing)
	store.Set(GetListingIDBytes(listing.Id), b)

	countStr := strconv.FormatUint(listing.Id, 10)
	reviewStr := strconv.Itoa(int(listing.Review.Average))
	// Extra account key stores
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingNameKey)).Set(types.GetStringBytes(listing.Name+"-"+countStr), b)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingReviewKey)).Set(types.GetStringBytes(reviewStr+"-"+countStr), b)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingSellerKey)).Set(types.GetStringBytes(listing.Creator+"-"+countStr), b)
}

// AddListingReview adds a new listing average
func (k Keeper) AddListingReview(ctx sdk.Context, id uint64, review uint32) {
	listing := k.GetListing(ctx, id)
	listing.Review.Count++
	listing.Review.Sum += review
	listing.Review.Average = listing.Review.Sum / listing.Review.Count
	k.SetListing(ctx, listing)
}

// RemoveListingReview calculate new average
func (k Keeper) RemoveListingReview(ctx sdk.Context, id uint64, review uint32) {
	listing := k.GetListing(ctx, id)
	listing.Review.Count--
	listing.Review.Sum -= review
	listing.Review.Average = listing.Review.Sum / listing.Review.Count
	k.SetListing(ctx, listing)
}

// GetListing returns a listing from its id
func (k Keeper) GetListing(ctx sdk.Context, id uint64) types.Listing {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKey))
	var listing types.Listing
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetListingIDBytes(id)), &listing)
	return listing
}

// HasListing checks if the listing exists in the store
func (k Keeper) HasListing(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKey))
	return store.Has(GetListingIDBytes(id))
}

// GetListingOwner returns the creator of the listing
func (k Keeper) GetListingOwner(ctx sdk.Context, id uint64) string {
	return k.GetListing(ctx, id).Creator
}

// RemoveListing removes a listing from the store
func (k Keeper) RemoveListing(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKey))
	store.Delete(GetListingIDBytes(id))
}

// GetAllListing returns all listing
func (k Keeper) GetAllListing(ctx sdk.Context) (list []types.Listing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Listing
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetListingIDBytes returns the byte representation of the ID
func GetListingIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetListingIDFromBytes returns ID in uint64 format from a byte array
func GetListingIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
