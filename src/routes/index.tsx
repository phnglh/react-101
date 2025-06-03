import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "../pages/home";
import RootLayout from "../components/layout/root-layoyt";

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
]);
