import { useForm } from "antd/es/form/Form";
import { useAtom } from "jotai";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { UserAtom } from "../../../../store/auth";
import ArticleForm from "../components/article-form";
import { ArticleProps } from "../../../../interfaces/types";
import { editArticle } from "../../../../api/articles/edit-article";
import { getArticle } from "../../../../api/articles/get-article";


const EditArticle: React.FC = () => {
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const { id } = useParams();
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
        navigate("/articles");
      },
    }
  );
  const { data, isLoading, isError, error } = useQuery(
    ["article", id],
    () => (id ? getArticle(id) : Promise.reject("undefined Id")),
    {
      enabled: !!id,
      onSuccess: (articleData) => {
        form.setFieldsValue({
          title_ka: articleData?.title_ka,
          title_en: articleData?.title_en,
          description_ka: articleData?.description_ka,
          description_en: articleData?.description_en
        });
      },
    }
  );
console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  const handleSubmit = (values: ArticleProps) => {
    mutation.mutate(values);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">Edit Article</h1>

      <ArticleForm
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
