import { lazy } from "react";

export const Articles = lazy(() =>
    import("../views/articles"))