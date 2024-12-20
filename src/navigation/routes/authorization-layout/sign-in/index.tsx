import { Route } from "@/interfaces/interfaces";

import { SIGN_IN_PATHS } from "./index.enum";
import { Suspense } from "react";
import { Fallback } from "../../fallback-loader";
import { SignIn } from "./lazy-imports/sign-in.loader";


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
