import { useForm } from "antd/es/form/Form";
import { useAtom } from "jotai";
import { Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RegisterProps } from "@/interfaces/interfaces";
import { UserAtom } from "@/store/auth";
import EditUserForm from "../components/user-form";
import { USERS_PATHS } from "../users-routes";
import useGetUser from "@/hooks/use-get-user";
import useEditUser from "@/hooks/use-edit-user";

const EditUser: React.FC = () => {
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const { id } = useParams();
  const {t} = useTranslation()
  
  const { mutate, isLoading: isEditLoading, isError: isEditError, error: editError } = useEditUser(id || "");
  

  const { data, isLoading, isError, error } = useGetUser({
    id: id || "",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  if (isEditLoading) {
    return <div>Loading...</div>;
  }

  if (isEditError) {
    return <div>Error: {editError instanceof Error ? editError.message : "Error"}</div>;
  }
  if (!user) {
    return <Navigate to={USERS_PATHS.USERS_LIST} />;
  }

  const handleSubmit = (values: RegisterProps) => {
    mutate(values);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">{t("dashboard.users.form.titleEdit")}</h1>

      <EditUserForm
      form = {form}
        initialValues={{ email: data?.email || "", password: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditUser;
