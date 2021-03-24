package cli

import (
	"context"
	"strconv"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

// GetQueryPurchase returns the cli query commands for this module
func GetQueryPurchase(queryRoute string) *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "purchase",
		Short:                      "Purchase listing",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdListPurchase())
	cmd.AddCommand(CmdShowPurchase())
	cmd.AddCommand(CmdShowPurchaseWithListing())
	cmd.AddCommand(CmdShowPurchaseWithBuyer())

	return cmd
}

func CmdListPurchase() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list",
		Short: "list all purchases",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPurchaseRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PurchaseAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPurchase() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show [id]",
		Short: "shows a purchase",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetPurchaseRequest{
				Id: id,
			}

			res, err := queryClient.Purchase(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPurchaseWithListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "listing [listing]",
		Short: "list all purchases under that listing",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			listing, _ := strconv.ParseUint(args[0], 10, 64)

			params := &types.QueryAllPurchaseWithListingRequest{
				Listing:    listing,
				Pagination: pageReq,
			}

			res, err := queryClient.PurchaseWithListing(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPurchaseWithBuyer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "buyer [buyer]",
		Short: "list all purchases under that buyer",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPurchaseWithBuyerRequest{
				Buyer:      string(args[0]),
				Pagination: pageReq,
			}

			res, err := queryClient.PurchaseWithBuyer(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
