import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./pages/error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./components/Auth/Auth.jsx";
import LogIn from "./components/Auth/LogIn.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";

console.log("process env", process.env.NODE_ENV);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <LogIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
