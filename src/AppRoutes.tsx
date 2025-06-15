import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/Loader";

const Login = lazy(() => import("./pages/Login"));
const View = lazy(() => import("./pages/View"));

export default function AppRoutes() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader/>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loader/>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/user",
      element: (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ),
      children: [
        {
          path: "view",
          element: (
            <Suspense fallback={<></>}>
              <View />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
