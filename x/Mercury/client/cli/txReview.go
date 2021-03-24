package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

// GetTXReview returns the cli edit commands for this module
func GetTXReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "review",
		Short:                      "Review editing",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateReview())
	cmd.AddCommand(CmdUpdateReview())
	cmd.AddCommand(CmdDeleteReview())

	return cmd
}

func CmdCreateReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create [reviewType] [id] [score] [description]",
		Short: "Creates a new review",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {

			argsReviewType := args[0]
			argsReviewed, _ := strconv.ParseUint(args[1], 10, 64)
			argsScore, _ := strconv.ParseUint(args[2], 10, 32)
			argsDescription := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateReview(clientCtx.GetFromAddress().String(), argsReviewType, argsReviewed, uint32(argsScore), argsDescription)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update [id] [score] [description]",
		Short: "Update a review",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsScore, _ := strconv.ParseUint(args[1], 10, 32)
			argsDescription := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateReview(clientCtx.GetFromAddress().String(), id, uint32(argsScore), argsDescription)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete [id]",
		Short: "Delete a review by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteReview(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
