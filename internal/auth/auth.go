package auth

import (
	"am-react-go/api/internal/config"

	"github.com/gorilla/sessions"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
)

const MAX_AGE = 86400 * 30

func AddAuthentication() {
	store := sessions.NewCookieStore([]byte("examplekey"))
	store.MaxAge(MAX_AGE)

	store.Options.Path = "/"
	store.Options.HttpOnly = true
	store.Options.Secure = config.IsProd()

	gothic.Store = store

	goth.UseProviders(
		googleProvider(),
	)
}
