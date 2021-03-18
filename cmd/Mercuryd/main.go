package main

import (
	"os"

	"github.com/FloppyDisck/Mercury/app"
	"github.com/FloppyDisck/Mercury/cmd/Mercuryd/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
