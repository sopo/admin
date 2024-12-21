import DashboardLayout from "@/pages/dashboard-layout/dashboard-layout";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import GuestGuard from "../guards/guest-guard";
import UserGuard from "../guards/user-guard";
import { DASHBOARD_ROUTES } from "../../pages/dashboard-layout/dashboard-routes";
import { AUTH_PATHS } from "@/pages/authorization-layout/auth.enum";
import AuthorizationLayout from "@/pages/authorization-layout/authorization-layout";
import { AUTH_ROUTES } from "@/pages/authorization-layout/auth-routes";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <GuestGuard>
        <DashboardLayout />
      </GuestGuard>
    ),
    children: [...DASHBOARD_ROUTES],
  },
  {
    path: AUTH_PATHS.AUTH,
    element: (
      <UserGuard>
        <AuthorizationLayout />
      </UserGuard>
    ),
    children: [...AUTH_ROUTES],
  },
];
export const router = createBrowserRouter(routes);
