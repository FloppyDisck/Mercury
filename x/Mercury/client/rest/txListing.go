package rest

import (
	"net/http"
	"strconv"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/rest"
	"github.com/gorilla/mux"
)

type createListingRequest struct {
	BaseReq     rest.BaseReq `json:"base_req"`
	Creator     string       `json:"creator"`
	Price       string       `json:"price"`
	Name        string       `json:"name"`
	Description string       `json:"description"`
	Review      string       `json:"review"`
}

func createListingHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req createListingRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err := sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedPrice := req.Price

		parsedName := req.Name

		parsedDescription := req.Description

		parsedReview := req.Review

		msg := types.NewMsgCreateListing(
			req.Creator,
			parsedPrice,
			parsedName,
			parsedDescription,
			parsedReview,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type updateListingRequest struct {
	BaseReq     rest.BaseReq `json:"base_req"`
	Creator     string       `json:"creator"`
	Price       string       `json:"price"`
	Name        string       `json:"name"`
	Description string       `json:"description"`
	Review      string       `json:"review"`
}

func updateListingHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req updateListingRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedPrice := req.Price

		parsedName := req.Name

		parsedDescription := req.Description

		parsedReview := req.Review

		msg := types.NewMsgUpdateListing(
			req.Creator,
			id,
			parsedPrice,
			parsedName,
			parsedDescription,
			parsedReview,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type deleteListingRequest struct {
	BaseReq rest.BaseReq `json:"base_req"`
	Creator string       `json:"creator"`
}

func deleteListingHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req deleteListingRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		msg := types.NewMsgDeleteListing(
			req.Creator,
			id,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}
