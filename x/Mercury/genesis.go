package Mercury

import (
	"github.com/FloppyDisck/Mercury/x/Mercury/keeper"
	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the review
	for _, elem := range genState.ReviewList {
		k.SetReview(ctx, *elem)
	}

	// Set review count
	k.SetReviewCount(ctx, uint64(len(genState.ReviewList)))

	// Set all the purchase
	for _, elem := range genState.PurchaseList {
		k.SetPurchase(ctx, *elem)
	}

	// Set purchase count
	k.SetPurchaseCount(ctx, uint64(len(genState.PurchaseList)))

	// Set all the listing
	for _, elem := range genState.ListingList {
		k.SetListing(ctx, *elem)
	}

	// Set listing count
	k.SetListingCount(ctx, uint64(len(genState.ListingList)))

	// Set all the account
	for _, elem := range genState.AccountList {
		k.SetAccount(ctx, *elem)
	}

	// Set account count
	k.SetAccountCount(ctx, uint64(len(genState.AccountList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all review
	reviewList := k.GetAllReview(ctx)
	for _, elem := range reviewList {
		elem := elem
		genesis.ReviewList = append(genesis.ReviewList, &elem)
	}

	// Get all purchase
	purchaseList := k.GetAllPurchase(ctx)
	for _, elem := range purchaseList {
		elem := elem
		genesis.PurchaseList = append(genesis.PurchaseList, &elem)
	}

	// Get all listing
	listingList := k.GetAllListing(ctx)
	for _, elem := range listingList {
		elem := elem
		genesis.ListingList = append(genesis.ListingList, &elem)
	}

	// Get all account
	accountList := k.GetAllAccount(ctx)
	for _, elem := range accountList {
		elem := elem
		genesis.AccountList = append(genesis.AccountList, &elem)
	}

	return genesis
}
