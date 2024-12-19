import { addArticle } from "@/api/articles/add-article";
import { ArticleProps } from "@/interfaces/types";
import { UserAtom } from "@/store/auth";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { useNavigate, Navigate } from "react-router-dom";
import ArticleForm from "../components/article-form";

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
        navigate("/articles");
      },
    }
  );

  const handleSubmit = (values: ArticleProps) => {
    mutation.mutate(values);
  }

  if(!user){
    return <Navigate to="/sign-in" />;
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