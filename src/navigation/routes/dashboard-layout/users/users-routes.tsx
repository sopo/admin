import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Route } from "@/interfaces/interfaces";
import { AddUser } from "./lazy-imports/add-user.loader";
import { EditUser } from "./lazy-imports/edit-user.loader";
import { Users } from "./lazy-imports/users.loader";
import { Fallback } from "../../fallback-loader";

export enum USERS_PATHS {
  USERS_LIST = "users",
  USERS_EDIT = "users/edit",
  USERS_ADD = "users/add"
}

export const USERS_ROUTES: Route[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={Fallback}>
        <Navigate to={USERS_PATHS.USERS_LIST} />
      </Suspense>
    ),
  },
  {
    path: USERS_PATHS.USERS_LIST,
    element: (
      <Suspense fallback={Fallback}>
        <Users />
      </Suspense>
    ),
  },
  {
    path: USERS_PATHS.USERS_EDIT + "/:id",
    element: (
      <Suspense fallback={Fallback}>
        <EditUser />
      </Suspense>
    ),
  },
  {
    path: USERS_PATHS.USERS_ADD,
    element: (
      <Suspense fallback={Fallback}>
        <AddUser />
      </Suspense>
    ),
  },
];
