import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import View from "./pages/View";
import Layout from "./components/Layout";

export default function AppRoutes() {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/user",
      element: <Layout />,
      children: [
        {
          path: "view",
          element: <View />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
