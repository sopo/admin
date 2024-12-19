import { useAtom } from "jotai";
import {  Navigate, useNavigate,} from "react-router-dom";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";
import { UserAtom } from "@/store/auth";
import { RegisterProps } from "@/interfaces/interfaces";
import { AddUser as AddUserApi } from "@/api/users/add-user";
import EditUserForm from "../components/user-form";


const AddUser:React.FC = () => {
  const [user] = useAtom(UserAtom);
  const {t} =  useTranslation()
  const navigate = useNavigate()
  
  const mutation = useMutation(
    (values: RegisterProps) => {
        return AddUserApi(values);
    },
    {
      onSuccess: () => {
        navigate("/users");
      },
    }
  );

  const handleSubmit = (values: RegisterProps) => {
    mutation.mutate(values);
  }

  if(!user){
    return <Navigate to="/sign-in" />;
  }
    return(
        <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
        <h1 className="text-xl font-semibold text-gray-900">{t("dashboard.users.form.titleAdd")} </h1>
        <EditUserForm 
        onSubmit={handleSubmit}
      />
      </div>
    )
}
export default AddUser