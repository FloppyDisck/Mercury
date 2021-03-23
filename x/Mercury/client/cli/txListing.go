package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-listing [name] [amount] [currency] [description]",
		Short: "Creates a new listing",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName := string(args[0])
			argsAmount := string(args[1])
			amount, _ := strconv.ParseUint(argsAmount, 2, 64)
			argsCurrency := string(args[2])
			argsDescription := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateListing(clientCtx.GetFromAddress().String(), amount, argsCurrency, argsName, argsDescription)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-listing [id] [name] [amount] [currency] [description]",
		Short: "Update a listing",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsName := string(args[1])
			argsAmount := string(args[2])
			amount, _ := strconv.ParseUint(argsAmount, 2, 64)
			argsCurrency := string(args[3])
			argsDescription := string(args[4])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateListing(clientCtx.GetFromAddress().String(), id, amount, argsCurrency, argsName, argsDescription)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-listing [id]",
		Short: "Delete a listing by id",
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

			msg := types.NewMsgDeleteListing(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
