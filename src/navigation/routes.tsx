import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/sign-in/sign-in";
import AuthorizationLayout from "../layouts/authorization/authorization";
import GuestGuard from "./guards/guest-guard";
import UserGuard from "./guards/user-guard";
import DashboardLayout from "../layouts/dashboard/dashboard-layout";
import Users from "../pages/dashboard/users/views/users";
import Articles from "../pages/dashboard/articles/views/articles";
import EditUser from "../pages/dashboard/users/views/edit-user";
import AddUser from "../pages/dashboard/users/views/add-user";
import AddArticle from "../pages/dashboard/articles/views/add-article";
import EditArticle from "../pages/dashboard/articles/views/edit-article";

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
        path: "users",
        element: <Users />,
      },
      {
        path: "users/edit/:id",
        element: <EditUser />,
      },
      {
        path: "users/add",
        element: <AddUser />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/articles/add",
        element: <AddArticle />,
      },
      {
        path: "/articles/edit/:id",
        element: <EditArticle/>,
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
