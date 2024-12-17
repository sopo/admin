import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/sign-in/sign-in";
import AuthorizationLayout from "../layouts/authorization/authorization";
import GuestGuard from "./guards/guest-guard";
import UserGuard from "./guards/user-guard";
import DashboardLayout from "../layouts/dashboard/dashboard-layout";
import Users from "../pages/dashboard/users";
import Articles from "../pages/dashboard/articles";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <GuestGuard>
        <DashboardLayout />
      </GuestGuard>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/users" />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: (
      <UserGuard>
        <AuthorizationLayout />
      </UserGuard>
    ),
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
