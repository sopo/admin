import { lazy } from "react";

export const Articles = lazy(() =>
    import("@/pages/dashboard/articles/views/articles"))