package config

import "os"

func IsProd() bool {
	env := os.Getenv("APP_ENV")
	return env == "prod"
}
