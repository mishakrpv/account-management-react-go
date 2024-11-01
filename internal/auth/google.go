package auth

import (
	"os"

	"github.com/markbates/goth/providers/google"
)

const (
	G_CLIENT_ID     = "AUTHENTICATION__GOOGLE__CLIENT_ID"
	G_CLIENT_SECRET = "AUTHENTICATION__GOOGLE__CLIENT_SECRET"
)

func googleProvider() *google.Provider {
	clientID := os.Getenv(G_CLIENT_ID)
	clientSecret := os.Getenv(G_CLIENT_SECRET)

	return google.New(clientID, clientSecret, "http://localhost:5173/")
}
