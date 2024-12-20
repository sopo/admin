import { Route } from "@/interfaces/interfaces";

import { Suspense } from "react";
import { Fallback } from "../../fallback-loader";
import { SignIn } from "./lazy-imports/sign-in.loader";

export enum SIGN_IN_PATHS {
  SIGN_IN = "sign-in"
}

export const SIGN_IN_ROUTES: Route[] = [
  {
    path: SIGN_IN_PATHS.SIGN_IN,
    element: (
      <Suspense fallback={Fallback}>
        <SignIn />
      </Suspense>
    ),
  },
];
