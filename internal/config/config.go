package config

import "os"

func IsInProdEnvironment() bool {
	env := os.Getenv("APP_ENV")
	return env == "prod"
}
