package common

import "github.com/urfave/cli/v2"

var CountFlag = &cli.IntFlag{
	Name:    "count",
	Aliases: []string{"c"},
	Value:   1,
	Usage:   "Number of random strings to display",
}
