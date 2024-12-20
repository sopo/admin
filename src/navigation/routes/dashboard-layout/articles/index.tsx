import { Route } from "@/interfaces/interfaces";
import { ARTICLES_PATHS } from "./index.enum";
import { AddArticle } from "./lazy-imports/add-article.loader";
import { Articles } from "./lazy-imports/articles.loader";
import { EditArticle } from "./lazy-imports/edit-article.loader";


export const ARTICLES_ROUTES: Route [] = [{
    path: ARTICLES_PATHS.ARTICLES_LIST,
    element: (
        <Articles />
    ) 
  },
  {
    path: ARTICLES_PATHS.ARTICLES_ADD,
    element: <AddArticle />,
  },
  {
    path: ARTICLES_PATHS.ARTICLES_EDIT + "/:id",
    element: <EditArticle/>,
  }]