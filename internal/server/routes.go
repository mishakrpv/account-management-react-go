package server

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/markbates/goth/gothic"
)

func (s *Server) RegisterRoutes() http.Handler {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/health", s.healthHandler)

	e.GET("/auth/{provider}/callback", s.getAuthCallback)

	return e
}

func (s *Server) healthHandler(c echo.Context) error {
	return c.JSON(http.StatusOK, s.db.Health())
}

func (s *Server) getAuthCallback(c echo.Context) error {
	provider := c.Param("provider")
	c.SetRequest(c.Request().WithContext(context.WithValue(context.Background(), "provider", provider)))

	user, err := gothic.CompleteUserAuth(c.Response(), c.Request())
	if err != nil {
		log.Print(err)
		return err
	}

	fmt.Println(user)

	http.Redirect(c.Response(), c.Request(), "http://localhost:5137/", http.StatusFound)
	return nil
}
