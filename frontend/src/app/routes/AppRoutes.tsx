import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../../layouts/AuthLayout";
import MainLayout from "../../layouts/MainLayout";

import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";
import Home from "../../pages/home/Home";

import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";

const AppRoutes = () => {
  const router = createBrowserRouter([
    // =========================
    // PUBLIC ROUTES
    // =========================
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    // =========================
    // PROTECTED ROUTES
    // =========================
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;