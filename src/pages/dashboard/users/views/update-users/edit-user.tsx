import { useForm } from "antd/es/form/Form";
import { RegisterProps } from "../../../../../interfaces/interfaces";
import { useAtom } from "jotai";
import { UserAtom } from "../../../../../store/auth";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../../../../../api/get-user";
import { editUser } from "../../../../../api/edit-user";
import EditUserForm from "../../components/user-form";


const EditUser: React.FC = () => {
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const { id } = useParams();
  const navigate = useNavigate()
  
  const { data, isLoading, isError, error } = useQuery(
    ["user", id],
    () =>(id ? getUser(id) : Promise.reject("undefined Id")),
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
    if (id) {
      editUser(id, values)
        .then(() => {
          
          navigate("/users");  
        })
        .catch((err) => {
          console.error("error updating user:", err);
        });
  };
  }
  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">Edit User</h1>
      
      <EditUserForm 
        initialValues={{ email: data?.email || "", password: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditUser;
