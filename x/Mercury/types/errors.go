package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/Mercury module sentinel errors
var (
	ErrSample             = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInvalidAccountName = sdkerrors.Register(ModuleName, 1101, "Account name is invalid")
	ErrAmountInvalid      = sdkerrors.Register(ModuleName, 1102, "Amount is invalid")
	ErrCurrencyInvalid    = sdkerrors.Register(ModuleName, 1103, "Currency is invalid")
	ErrInvalidName        = sdkerrors.Register(ModuleName, 1104, "Name is invalid")
	ErrInvalidDescription = sdkerrors.Register(ModuleName, 1105, "Description is invalid")
)
