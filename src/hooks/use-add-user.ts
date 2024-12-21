import { useMutation } from "react-query";
import { AddUser as AddUserApi } from "@/api/users/add-user";
import { RegisterProps } from "@/interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import { USERS_PATHS } from "@/pages/dashboard-layout/users/users-routes";


const useAddUser = () => {
  const navigate = useNavigate();

  const mutation = useMutation(
    (values: RegisterProps) => AddUserApi(values),
    {
      onSuccess: () => {
        navigate(`/${USERS_PATHS.USERS}/${USERS_PATHS.USERS_LIST}`);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useAddUser;
