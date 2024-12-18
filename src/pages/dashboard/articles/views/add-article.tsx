import { useAtom } from "jotai";
import {  Navigate, useNavigate,} from "react-router-dom";
import { UserAtom } from "../../../../store/auth";

import { useMutation } from "react-query";
import { ArticleProps } from "../../../../interfaces/types";

import ArticleForm from "../components/article-form";
import { addArticle } from "../../../../api/articles/add-article";


const AddArticle:React.FC = () => {
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
        <h1 className="text-xl font-semibold text-gray-900">Add Article</h1>
        <ArticleForm 
        onSubmit={handleSubmit}
      />
      </div>
    )
}
export default AddArticle