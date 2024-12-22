import { getArticle } from "@/api/articles/get-article";
import { ArticleProps } from "@/interfaces/types";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "./enums";

const useGetArticle = <T = ArticleProps>({
  id,
  queryOptions,
}: {
  id: string | undefined;
  queryOptions?: Omit<
    UseQueryOptions<ArticleProps, Error, T>,
    "queryKey" | "queryFn"
  >;
}): UseQueryResult<T, Error> => {
  return useQuery<ArticleProps, Error, T>({
    queryKey: [QUERY_KEYS.ARTICLE, id],
    queryFn: async () => {
      if (!id) {
        throw new Error("id is missing");
      }
      const result = await getArticle(id);
      if (!result) {
        throw new Error("article is missing");
      }
      return result;
    },
    enabled: !!id,
    ...queryOptions,
  });
};

export default useGetArticle;
