import { Route } from "@/interfaces/interfaces";
import { USERS_ROUTES } from "./users/users-routes";
import { ARTICLES_ROUTES } from "./articles/article-routes";

export const DASHBOARD_ROUTES: Route[] = [
    ...USERS_ROUTES,
    ...ARTICLES_ROUTES
]