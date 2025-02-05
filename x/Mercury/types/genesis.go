package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		ReviewList:   []*Review{},
		PurchaseList: []*Purchase{},
		ListingList:  []*Listing{},
		AccountList:  []*Account{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in review
	reviewIdMap := make(map[uint64]bool)

	for _, elem := range gs.ReviewList {
		if _, ok := reviewIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for review")
		}
		reviewIdMap[elem.Id] = true
	}
	// Check for duplicated ID in purchase
	purchaseIdMap := make(map[uint64]bool)

	for _, elem := range gs.PurchaseList {
		if _, ok := purchaseIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for purchase")
		}
		purchaseIdMap[elem.Id] = true
	}
	// Check for duplicated ID in listing
	listingIdMap := make(map[uint64]bool)

	for _, elem := range gs.ListingList {
		if _, ok := listingIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for listing")
		}
		listingIdMap[elem.Id] = true
	}
	// Check for duplicated ID in account
	accountIdMap := make(map[uint64]bool)

	for _, elem := range gs.AccountList {
		if _, ok := accountIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for account")
		}
		accountIdMap[elem.Id] = true
	}

	return nil
}
