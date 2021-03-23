package types

const (
	// ModuleName defines the module name
	ModuleName = "Mercury"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_capability"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// GetStringBytes Turns strings to Bytes
func GetStringBytes(str string) []byte {
	bz := KeyPrefix(str)
	return bz
}

// GetBytesString Turns bytes into a string
func GetBytesString(bz []byte) string {
	return string(bz)
}

const (
	AccountKey       = "Account-value-"
	AccountNameKey   = "Account-name-"
	AccountReviewKey = "Account-review-"
	AccountWalletKey = "Account-wallet-"
	AccountCountKey  = "Account-count-"
)

const (
	ListingKey       = "Listing-value-"
	ListingSellerKey = "Listing-seller-"
	ListingReviewKey = "Listing-review-"
	ListingNameKey   = "Listing-name-"
	ListingCountKey  = "Listing-count-"
)
