import { useForm } from "antd/es/form/Form";
import { useAtom } from "jotai";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { editUser } from "../../../../api/edit-user";
import { getUser } from "../../../../api/get-user";
import { RegisterProps } from "../../../../interfaces/interfaces";
import { UserAtom } from "../../../../store/auth";
import EditUserForm from "../../users/components/user-form";


const EditArticle: React.FC = () => {
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const mutation = useMutation(
    (values: RegisterProps) => {
      if (id) {
        return editUser(id, values);
      }
      return Promise.reject("no ID found");
    },
    {
      onSuccess: () => {
        navigate("/users");
      },
    }
  );
  const { data, isLoading, isError, error } = useQuery(
    ["user", id],
    () => (id ? getUser(id) : Promise.reject("undefined Id")),
    {
      enabled: !!id,
      onSuccess: (userData) => {
        form.setFieldsValue({
          email: userData?.email,
          password: "",
        });
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  const handleSubmit = (values: RegisterProps) => {
    mutation.mutate(values);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">Edit Article</h1>

      <EditUserForm
        initialValues={{ email: data?.email || "", password: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditArticle;
