import { ArticleProps } from "@/interfaces/types";
import { UserAtom } from "@/store/auth";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";
import ArticleForm from "../components/article-form";
import { AUTH_PATHS } from "@/pages/authorization-layout/auth.enum";
import useAddArticle from "@/hooks/use-add-article";
import { ARTICLES_PATHS } from "../article-routes";
import { useForm } from "antd/es/form/Form";

const AddArticle: React.FC = () => {
  const { t } = useTranslation();
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useAddArticle(() => {
    navigate(`/${ARTICLES_PATHS.ARTICLES}/${ARTICLES_PATHS.ARTICLES_LIST}`);
  });

  const handleSubmit = (values: ArticleProps) => {
    mutate(values);
  };

  if (!user) {
    return <Navigate to={AUTH_PATHS.SIGN_IN} />;
  }
  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">
        {t("dashboard.articles.form.titleAdd")}
      </h1>
      {isLoading && <div>Loading...</div>}

      {isError && (
        <div className="text-red-500">
          Error: {error instanceof Error ? error.message : "Unknown error"}
        </div>
      )}

      {!isLoading && !isError && <ArticleForm form={form} onSubmit={handleSubmit} />}
    </div>
  );
};
export default AddArticle;
