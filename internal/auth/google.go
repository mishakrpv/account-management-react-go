package auth

import (
	"os"

	"github.com/markbates/goth/providers/google"
)

const (
	EV_CLIENT_ID     = "AUTHENTICATION__GOOGLE__CLIENT_ID"
	EV_CLIENT_SECRET = "AUTHENTICATION__GOOGLE__CLIENT_SECRET"
)

func googleProvider() *google.Provider {
	clientID := os.Getenv(EV_CLIENT_ID)
	clientSecret := os.Getenv(EV_CLIENT_SECRET)

	return google.New(clientID, clientSecret, "callback_url")
}
