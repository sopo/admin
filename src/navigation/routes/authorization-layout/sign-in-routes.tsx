import { Route } from "@/interfaces/interfaces";
import { SIGN_IN_ROUTES } from "./sign-in/sign-in-paths";

export const AUTH_ROUTES:Route[] = [
    ...SIGN_IN_ROUTES
]