import { useAtom } from "jotai";
import { Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserAtom } from "@/store/auth";
import { RegisterProps } from "@/interfaces/interfaces";
import EditUserForm from "../components/user-form";
import { AUTH_PATHS } from "@/pages/authorization-layout/auth.enum";
import useAddUser from "@/hooks/use-add-user";
import { USERS_PATHS } from "../users-routes";
import { useForm } from "antd/es/form/Form";

const AddUser: React.FC = () => {
  const [user] = useAtom(UserAtom);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form] = useForm();
  const { mutate, isLoading, isError, error } = useAddUser(() => {
    navigate(`/${USERS_PATHS.USERS}/${USERS_PATHS.USERS_LIST}`);
  });

  const handleSubmit = (values: RegisterProps) => {
    mutate(values);
  };

  if (!user) {
    return <Navigate to={AUTH_PATHS.SIGN_IN} />;
  }
  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">
        {t("dashboard.users.form.titleAdd")}{" "}
      </h1>
      {isLoading && <div>Submitting...</div>}

      {isError && (
        <div className="text-red-500">
          Error: {error instanceof Error ? error.message : "Unknown error"}
        </div>
      )}
      {!isLoading && !isError && (
        <EditUserForm form={form} onSubmit={handleSubmit} />
      )}
    </div>
  );
};
export default AddUser;
