package cli

import (
	"context"
	"strconv"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

// GetQueryReview returns the cli query commands for this module
func GetQueryReview(queryRoute string) *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "review",
		Short:                      "Review listing",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdListReview())
	cmd.AddCommand(CmdShowReview())
	cmd.AddCommand(CmdShowReviewWithScore())
	cmd.AddCommand(CmdShowReviewWithReviewer())
	cmd.AddCommand(CmdShowReviewWithReviewed())

	return cmd
}

func CmdListReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list",
		Short: "list all reviews",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllReviewRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ReviewAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show [id]",
		Short: "shows a review",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetReviewRequest{
				Id: id,
			}

			res, err := queryClient.Review(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowReviewWithScore() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "score [score]",
		Short: "shows reviews with that score",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			score, err := strconv.ParseUint(args[0], 10, 32)
			if err != nil {
				return err
			}

			params := &types.QueryAllReviewWithScoreRequest{
				Score:      uint32(score),
				Pagination: pageReq,
			}

			res, err := queryClient.ReviewWithScore(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowReviewWithReviewer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "reviewer [id]",
		Short: "shows all reviews by that id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllReviewWithReviewerRequest{
				Creator:    args[0],
				Pagination: pageReq,
			}

			res, err := queryClient.ReviewWithReviewer(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowReviewWithReviewed() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "reviewed [type] [id]",
		Short: "shows reviews from that listing or account",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			score, err := strconv.ParseUint(args[1], 10, 32)
			if err != nil {
				return err
			}

			params := &types.QueryAllReviewWithReviewedRequest{
				Type:       args[0],
				Id:         score,
				Pagination: pageReq,
			}

			res, err := queryClient.ReviewWithReviewed(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
