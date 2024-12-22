import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { AddUser } from "./lazy-imports/add-user.loader";
import { EditUser } from "./lazy-imports/edit-user.loader";
import { Users } from "./lazy-imports/users.loader";
import { Loader } from "../../../components/loader/loader";
import UsersLayout from "./views/users-layout";

export enum USERS_PATHS {
  USERS = "users",
  USERS_LIST = "user-list",
  USERS_EDIT = "edit",
  USERS_ADD = "add",
}

export const USERS_ROUTES = [
  {
    path: "/",
    element: (
      <Suspense fallback={Loader}>
        <Navigate to={USERS_PATHS.USERS} />
      </Suspense>
    ),
  },
  {
    path: USERS_PATHS.USERS,
    element: <UsersLayout />,
    children: [
      {
        path: USERS_PATHS.USERS_LIST,
        element: (
          <Suspense fallback={Loader}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: USERS_PATHS.USERS_EDIT + "/:id",
        element: (
          <Suspense fallback={Loader}>
            <EditUser />
          </Suspense>
        ),
      },
      {
        path: USERS_PATHS.USERS_ADD,
        element: (
          <Suspense fallback={Loader}>
            <AddUser />
          </Suspense>
        ),
      },
    ],
  },
];
