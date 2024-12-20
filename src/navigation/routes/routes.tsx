import AuthorizationLayout from "@/layouts/authorization/authorization";
import DashboardLayout from "@/layouts/dashboard/dashboard-layout";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import GuestGuard from "../guards/guest-guard";
import UserGuard from "../guards/user-guard";
import { DASHBOARD_ROUTES } from "./dashboard-layout";
import { AUTH_ROUTES } from "./authorization-layout";


export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <GuestGuard>
        <DashboardLayout />
      </GuestGuard>
    ),
    children: [
      ...DASHBOARD_ROUTES
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
      ...AUTH_ROUTES
    ],
  },
];
export const router = createBrowserRouter(routes);