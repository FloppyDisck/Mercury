package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/Mercury module sentinel errors
var (
	ErrSample             = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInvalidAccountName = sdkerrors.Register(ModuleName, 1101, "Account name is invalid")
)
