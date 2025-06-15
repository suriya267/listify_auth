import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/Loader";

const Login = lazy(() => import("./pages/Login"));
const View = lazy(() => import("./components/Layout"));

export default function AppRoutes() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/user",
      element: (
        <PrivateRoute>
          <Suspense fallback={<Loader />}>
            <View />
          </Suspense>
        </PrivateRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
