import { lazy } from "react";

export const AddArticle = lazy(() => 
    import("@/pages/dashboard/articles/views/add-article")
    )