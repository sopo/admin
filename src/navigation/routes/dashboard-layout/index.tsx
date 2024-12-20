import { Route } from "@/interfaces/interfaces";
import { USERS_ROUTES } from "./users";
import { ARTICLES_ROUTES } from "./articles";

export const DASHBOARD_ROUTES: Route[] = [
    ...USERS_ROUTES,
    ...ARTICLES_ROUTES
]