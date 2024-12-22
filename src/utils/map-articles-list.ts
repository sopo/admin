import { ArticlesListProps } from "../interfaces/types";
import { formatDate } from "./format-date";

export const mapArticlesList = (articles: ArticlesListProps) => {
  return articles?.map((article) => ({
    author_en: article?.author_en,
    author_ka: article?.author_ka,
    createdAt: article?.created_at ? formatDate(article.created_at) : "-",
    title_en: article?.title_en,
    title_ka: article?.title_ka,
    description_en: article?.description_en,
    description_ka: article?.description_ka,
    key: article?.id ?? Math.random().toString(36).slice(2, 11),
  }));
};
