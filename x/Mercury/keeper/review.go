package keeper

import (
	"encoding/binary"
	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetReviewCount get the total number of review
func (k Keeper) GetReviewCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewCountKey))
	byteKey := types.KeyPrefix(types.ReviewCountKey)
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

// SetReviewCount set the total number of review
func (k Keeper) SetReviewCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewCountKey))
	byteKey := types.KeyPrefix(types.ReviewCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendReview appends a review in the store with a new id and update the count
func (k Keeper) AppendReview(
	ctx sdk.Context,
	creator string,
	reviewType string,
	reviewId uint64,
	reviewScore uint32,
	description string,
) uint64 {
	// Create the review
	count := k.GetReviewCount(ctx)

	reviewInfo := types.Reviewed{
		Type: reviewType,
		Id:   reviewId,
	}

	var review = types.Review{
		Creator:     creator,
		Id:          count,
		Reviewed:    &reviewInfo,
		Score:       reviewScore,
		Description: description,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewKey))
	value := k.cdc.MustMarshalBinaryBare(&review)
	store.Set(GetReviewIDBytes(review.Id), value)

	countStr := strconv.FormatUint(count, 10)
	reviewedIdStr := strconv.FormatUint(reviewId, 10)
	scoreStr := strconv.Itoa(int(reviewScore))
	// Extra key stores
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewScoreKey)).Set(types.GetStringBytes(scoreStr+"-"+countStr), value)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewReviewerKey)).Set(types.GetStringBytes(creator+"-"+countStr), value)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewReviewedKey)).Set(types.GetStringBytes(reviewType+"-"+reviewedIdStr+"-"+countStr), value)

	// Update review count
	k.SetReviewCount(ctx, count+1)

	return count
}

// SetReview set a specific review in the store
func (k Keeper) SetReview(ctx sdk.Context, review types.Review) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewKey))
	b := k.cdc.MustMarshalBinaryBare(&review)
	store.Set(GetReviewIDBytes(review.Id), b)

	countStr := strconv.FormatUint(review.Id, 10)
	reviewedIdStr := strconv.FormatUint(review.Reviewed.Id, 10)
	scoreStr := strconv.Itoa(int(review.Score))
	// Extra key stores
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewScoreKey)).Set(types.GetStringBytes(scoreStr+"-"+countStr), b)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewReviewerKey)).Set(types.GetStringBytes(review.Creator+"-"+countStr), b)
	prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewReviewedKey)).Set(types.GetStringBytes(review.Reviewed.Type+"-"+reviewedIdStr+"-"+countStr), b)
}

// GetReview returns a review from its id
func (k Keeper) GetReview(ctx sdk.Context, id uint64) types.Review {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewKey))
	var review types.Review
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetReviewIDBytes(id)), &review)
	return review
}

// HasReview checks if the review exists in the store
func (k Keeper) HasReview(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewKey))
	return store.Has(GetReviewIDBytes(id))
}

// GetReviewOwner returns the creator of the review
func (k Keeper) GetReviewOwner(ctx sdk.Context, id uint64) string {
	return k.GetReview(ctx, id).Creator
}

// RemoveReview removes a review from the store
func (k Keeper) RemoveReview(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewKey))
	store.Delete(GetReviewIDBytes(id))
}

// GetAllReview returns all review
func (k Keeper) GetAllReview(ctx sdk.Context) (list []types.Review) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Review
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetReviewIDBytes returns the byte representation of the ID
func GetReviewIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetReviewIDFromBytes returns ID in uint64 format from a byte array
func GetReviewIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
