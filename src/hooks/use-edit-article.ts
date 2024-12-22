import { useMutation } from "react-query";
import { editArticle } from "@/api/articles/edit-article";
import { ArticleProps } from "@/interfaces/types";

const useEditArticle = (id: string, onSuccess: () => void) => {
  const mutation = useMutation(
    (values: ArticleProps) => {
      if (id) {
        return editArticle(id, values);
      }
      return Promise.reject("no ID found");
    },
    {
      onSuccess,
    },
  );

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useEditArticle;
