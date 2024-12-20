import { lazy } from "react";

export const AddArticle = lazy(() => 
    import("../views/add-article")
    )