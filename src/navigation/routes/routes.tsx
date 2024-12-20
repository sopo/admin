import AuthorizationLayout from "@/layouts/authorization/authorization";
import DashboardLayout from "@/layouts/dashboard/dashboard-layout";
import AddArticle from "@/pages/dashboard/articles/views/add-article";
import Articles from "@/pages/dashboard/articles/views/articles";
import EditArticle from "@/pages/dashboard/articles/views/edit-article";
import SignIn from "@/pages/sign-in/sign-in";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import GuestGuard from "../guards/guest-guard";
import UserGuard from "../guards/user-guard";
import { DASHBOARD_ROUTES } from "./dashboard-layout";


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
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
