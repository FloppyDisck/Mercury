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
func GetQueryAccount(queryRoute string) *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "account",
		Short:                      "Querying account",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdListAccount())
	cmd.AddCommand(CmdShowAccount())
	cmd.AddCommand(CmdShowAccountWithName())
	cmd.AddCommand(CmdShowAccountWithReview())
	cmd.AddCommand(CmdShowAccountWallet())

	return cmd
}

func CmdListAccount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list",
		Short: "list all account",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllAccountRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.AccountAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowAccount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show [id]",
		Short: "shows a account",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetAccountRequest{
				Id: id,
			}

			res, err := queryClient.Account(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowAccountWithName() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "name [name]",
		Short: "shows all accounts with that name ",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllAccountWithNameRequest{
				Name:       args[0],
				Pagination: pageReq,
			}

			res, err := queryClient.AccountWithName(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowAccountWithReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "review [review]",
		Short: "shows all accounts with that review ",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			rev, _ := strconv.ParseUint(args[0], 2, 32)

			params := &types.QueryAllAccountWithReviewRequest{
				Review:     uint32(rev),
				Pagination: pageReq,
			}

			res, err := queryClient.AccountWithReview(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowAccountWallet() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "wallet [wallet]",
		Short: "shows account with that wallet",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetAccountWithWalletRequest{
				User: args[0],
			}

			res, err := queryClient.AccountWallet(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
