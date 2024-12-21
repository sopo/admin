import { useMutation } from "react-query";
import { editArticle } from "@/api/articles/edit-article";
import { useNavigate } from "react-router-dom";
import { ArticleProps } from "@/interfaces/types";
import { ARTICLES_PATHS } from "@/pages/dashboard-layout/articles/article-routes";

const useEditArticle = (id: string) => {
  const navigate = useNavigate();

  const mutation = useMutation(
    (values: ArticleProps) => {
      if (id) {
        return editArticle(id, values);
      }
      return Promise.reject("no ID found");
    },
    {
      onSuccess: () => {
        navigate(`/${ARTICLES_PATHS.ARTICLES}/${ARTICLES_PATHS.ARTICLES_LIST}`);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useEditArticle;
