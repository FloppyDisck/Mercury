package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers Mercury-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/Mercury/purchases/{id}", getPurchaseHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/Mercury/purchases", listPurchaseHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/Mercury/listings/{id}", getListingHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/Mercury/listings", listListingHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/Mercury/accounts/{id}", getAccountHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/Mercury/accounts", listAccountHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/Mercury/purchases", createPurchaseHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/Mercury/purchases/{id}", updatePurchaseHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/Mercury/purchases/{id}", deletePurchaseHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/Mercury/listings", createListingHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/Mercury/listings/{id}", updateListingHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/Mercury/listings/{id}", deleteListingHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/Mercury/accounts", createAccountHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/Mercury/accounts/{id}", updateAccountHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/Mercury/accounts/{id}", deleteAccountHandler(clientCtx)).Methods("POST")

}
