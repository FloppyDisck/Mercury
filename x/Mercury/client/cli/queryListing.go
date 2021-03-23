package cli

import (
	"context"
	"strconv"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

// GetQueryAccount returns the cli query commands for this module
func GetQueryListing(queryRoute string) *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "listing",
		Short:                      "Querying listing",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdListListing())
	cmd.AddCommand(CmdShowListing())
	cmd.AddCommand(CmdShowListingWithName())
	cmd.AddCommand(CmdShowListingWithSeller())
	cmd.AddCommand(CmdShowListingWithReview())

	return cmd
}

func CmdListListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list",
		Short: "list all listing",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllListingRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ListingAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show [id]",
		Short: "shows a listing",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetListingRequest{
				Id: id,
			}

			res, err := queryClient.Listing(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowListingWithName() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "name [name]",
		Short: "shows all listings with that name ",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllListingWithNameRequest{
				Name:       args[0],
				Pagination: pageReq,
			}

			res, err := queryClient.ListingWithName(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowListingWithSeller() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "seller [seller]",
		Short: "shows all listings with that seller ",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllListingWithSellerRequest{
				Seller:     args[0],
				Pagination: pageReq,
			}

			res, err := queryClient.ListingWithSeller(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowListingWithReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "review [review]",
		Short: "shows all listings with that review ",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			rev, _ := strconv.ParseUint(args[0], 2, 32)

			params := &types.QueryAllListingWithReviewRequest{
				Review:     uint32(rev),
				Pagination: pageReq,
			}

			res, err := queryClient.ListingWithReview(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
