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
	// Get all account
	accountList := k.GetAllAccount(ctx)
	for _, elem := range accountList {
		elem := elem
		genesis.AccountList = append(genesis.AccountList, &elem)
	}

	return genesis
}
