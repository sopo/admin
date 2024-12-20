import { Route } from "@/interfaces/interfaces";
import { Suspense } from "react";
import { SignIn } from "./sign-in.loader";
import { AUTH_PATHS } from "../auth.enum";
import { Loader } from "@/components/loader/loader";

export const SIGN_IN_ROUTES: Route[] = [
  {
    path: AUTH_PATHS.SIGN_IN,
    element: (
      <Suspense fallback={Loader}>
        <SignIn />
      </Suspense>
    ),
  },
];
