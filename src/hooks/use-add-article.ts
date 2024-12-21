import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { addArticle } from "@/api/articles/add-article";
import { ArticleProps } from "@/interfaces/types";
import { ARTICLES_PATHS } from "@/pages/dashboard-layout/articles/article-routes";

const useAddArticle = () => {
  const navigate = useNavigate();

  const mutation = useMutation(
    (values: ArticleProps) => addArticle(values),
    {
      onSuccess: () => {

        navigate(`/${ARTICLES_PATHS.ARTICLES}/${ARTICLES_PATHS.ARTICLES_LIST}`);
      },
      onError: (error) => {

        console.error("error adding article:", error);
      },
    }
  );

  return mutation;
};

export default useAddArticle;
