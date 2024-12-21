import { getArticles } from "@/api/articles/get-articles";
import { ArticleProps } from "@/interfaces/types";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";

const useGetArticles = <T = ArticleProps[]>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<ArticleProps[], Error, T>, "queryKey" | "queryFn">;
} = {}): UseQueryResult<T, Error> => {
  return useQuery<ArticleProps[], Error, T>({
    queryKey: ["articles"],
    queryFn: async() => {
      const result = await getArticles()
      return result ?? [];
    },
    ...queryOptions,
  });
};
export default useGetArticles;
