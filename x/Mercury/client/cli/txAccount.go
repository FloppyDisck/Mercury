package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/FloppyDisck/Mercury/x/Mercury/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

// GetTXAccount returns the cli edit commands for this module
func GetTXAccount() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "account",
		Short:                      "Account editing",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateAccount())
	cmd.AddCommand(CmdUpdateAccount())
	cmd.AddCommand(CmdDeleteAccount())

	return cmd
}

func CmdCreateAccount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create [name]",
		Short: "Creates a new account",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName := string(args[0])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAccount(clientCtx.GetFromAddress().String(), string(argsName))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateAccount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update [id] [name]",
		Short: "Update a account",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsName := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateAccount(clientCtx.GetFromAddress().String(), id, string(argsName))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteAccount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete [id]",
		Short: "Delete a account by id",
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

			msg := types.NewMsgDeleteAccount(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
