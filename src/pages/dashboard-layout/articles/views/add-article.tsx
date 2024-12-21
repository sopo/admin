import { addArticle } from "@/api/articles/add-article";
import { ArticleProps } from "@/interfaces/types";
import { UserAtom } from "@/store/auth";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { useNavigate, Navigate } from "react-router-dom";
import ArticleForm from "../components/article-form";
import { AUTH_PATHS } from "@/pages/authorization-layout/auth.enum";
import { ARTICLES_PATHS } from "../article-routes";

const AddArticle:React.FC = () => {
  const {t} = useTranslation();
  const [user] = useAtom(UserAtom);

  const navigate = useNavigate()
  
  const mutation = useMutation(
    (values: ArticleProps) => {
        return addArticle(values);
    },
    {
      onSuccess: () => {
        navigate(`/${ARTICLES_PATHS.ARTICLES}/${ARTICLES_PATHS.ARTICLES_LIST}`);
      },
    }
  );

  const handleSubmit = (values: ArticleProps) => {
    mutation.mutate(values);
  }

  if(!user){
    return <Navigate to={AUTH_PATHS.SIGN_IN} />;
  }
    return(
        <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
        <h1 className="text-xl font-semibold text-gray-900">{t("dashboard.articles.form.titleAdd")}</h1>
        <ArticleForm 
        onSubmit={handleSubmit}
      />
      </div>
    )
}
export default AddArticle