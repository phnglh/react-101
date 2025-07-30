import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "../pages/home";
import RootLayout from "../components/layout/root-layout";
import LoginPage from "../pages/login";
import { NotFound } from "../components";

export const routes = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "home",
        Component: () => <Navigate to="/" />,
      },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
