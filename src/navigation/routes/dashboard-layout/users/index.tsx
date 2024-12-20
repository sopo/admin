import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Route } from "@/interfaces/interfaces";
import { DASHBOARD_PATHS } from "./index.enum";
import { AddUser } from "./lazy-loaders/add-user.loader";
import { EditUser } from "./lazy-loaders/edit-user.loader";
import { Users } from "./lazy-loaders/users.loader";
import { Fallback } from "../../fallback-loader";

export const USERS_ROUTES: Route[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={Fallback}>
        <Navigate to={DASHBOARD_PATHS.USERS_LIST} />
      </Suspense>
    ),
  },
  {
    path: DASHBOARD_PATHS.USERS_LIST,
    element: (
      <Suspense fallback={Fallback}>
        <Users />
      </Suspense>
    ),
  },
  {
    path: DASHBOARD_PATHS.USERS_EDIT + "/:id",
    element: (
      <Suspense fallback={Fallback}>
        <EditUser />
      </Suspense>
    ),
  },
  {
    path: DASHBOARD_PATHS.USERS_ADD,
    element: (
      <Suspense fallback={Fallback}>
        <AddUser />
      </Suspense>
    ),
  },
];
