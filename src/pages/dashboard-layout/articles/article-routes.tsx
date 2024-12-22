import { AddArticle } from "./lazy-imports/add-article.loader";
import { Articles } from "./lazy-imports/articles.loader";
import { EditArticle } from "./lazy-imports/edit-article.loader";
import ArticlesLayout from "./views/articles-layout";

export enum ARTICLES_PATHS {
  ARTICLES = "articles",
  ARTICLES_LIST = "articles-list",
  ARTICLES_EDIT = "edit",
  ARTICLES_ADD = "add",
}

export const ARTICLES_ROUTES = [
  {
    path: ARTICLES_PATHS.ARTICLES,
    element: <ArticlesLayout />,
    children: [
      {
        path: ARTICLES_PATHS.ARTICLES_LIST,
        element: <Articles />,
      },
      {
        path: ARTICLES_PATHS.ARTICLES_ADD,
        element: <AddArticle />,
      },
      {
        path: ARTICLES_PATHS.ARTICLES_EDIT + "/:id",
        element: <EditArticle />,
      },
    ],
  },
];
