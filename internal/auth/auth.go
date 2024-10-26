package auth

import (
	"am-react-go/api/internal/config"

	"github.com/gorilla/sessions"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
)

func AddAuthentication() {
	store := sessions.NewCookieStore([]byte("examplekey"))

	store.Options.Path = "/"
	store.Options.HttpOnly = true
	store.Options.Secure = config.IsInProdEnvironment()

	gothic.Store = store

	goth.UseProviders(
		googleProvider(),
	)
}
