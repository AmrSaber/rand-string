package common

import (
	"bytes"
	"fmt"
	"log"
	"os"

	"github.com/fatih/color"
)

var Err = color.New(color.FgRed)
var Std = log.New(os.Stdout, "", 0)

func Fail(message any) {
	Err.Fprint(os.Stderr, fmt.Sprintf("%s\n", message))
	os.Exit(1)
}

func ColorStr(str string, attributes ...color.Attribute) string {
	var buffer bytes.Buffer
	color.New(attributes...).Fprint(&buffer, str)
	return buffer.String()
}
