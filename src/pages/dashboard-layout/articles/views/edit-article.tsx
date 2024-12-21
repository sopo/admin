import { useForm } from "antd/es/form/Form";
import { useAtom } from "jotai";
import { Navigate, useParams } from "react-router-dom";
import { ArticleProps } from "@/interfaces/types";
import { UserAtom } from "@/store/auth";
import ArticleForm from "../components/article-form";
import { AUTH_PATHS } from "@/pages/authorization-layout/auth.enum";
import useEditArticle from "@/hooks/use-edit-article";
import useGetArticle from "@/hooks/use-get-article";


const EditArticle: React.FC = () => {
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const { id } = useParams();

  const { mutate, isLoading: isArticleLoading, isError: isArticleError, error: articleError } = useEditArticle(id || "");
  const { data, isLoading, isError, error } = useGetArticle({ id });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  if (isArticleLoading) {
    return <div>Loading...</div>;
  }

  if (isArticleError) {
    return <div>Error: {articleError instanceof Error ? articleError.message : "Error"}</div>;
  }


  if (!user) {
    return <Navigate to={AUTH_PATHS.SIGN_IN} />;
  }

  const handleSubmit = (values: ArticleProps) => {
    if (id) {
      mutate(values); 
    } else {
      console.error("undefined id");
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">Edit Article</h1>

      <ArticleForm
      form={form}
        initialValues={{
            title_ka: data?.title_ka || "", 
            title_en: data?.title_en || "",
            description_ka: data?.description_ka || "",
            description_en: data?.description_en || "",
          }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditArticle;
