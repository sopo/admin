import { Route } from "@/interfaces/interfaces";
import { AddArticle } from "./lazy-imports/add-article.loader";
import { Articles } from "./lazy-imports/articles.loader";
import { EditArticle } from "./lazy-imports/edit-article.loader";

export enum ARTICLES_PATHS {
  ARTICLES_LIST = "articles",
  ARTICLES_EDIT = "articles/edit",
  ARTICLES_ADD = "articles/add"
}

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