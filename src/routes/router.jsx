import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/home/HomePage";
import ToursPage from "../pages/tours/ToursPage";
import TourPage from "../pages/tour/TourPage";
import Login from "../pages/login/LoginPage";
import Register from "../pages/register/RegisterPage";
import SettingsPage from "../pages/settings/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "tours",
        element: <ToursPage />,
      },
      {
        path: "tours/:id",
        element: <TourPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
