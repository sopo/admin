import { useMutation } from "react-query";
import { addArticle } from "@/api/articles/add-article";
import { ArticleProps } from "@/interfaces/types";

const useAddArticle = (onSuccess: () => void) => {
  const mutation = useMutation((values: ArticleProps) => addArticle(values), {
    onSuccess,
  });

  return mutation;
};

export default useAddArticle;
