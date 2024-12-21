import { useMutation } from "react-query";
import { editUser } from "@/api/users/edit-user"; 
import { useNavigate } from "react-router-dom";
import { RegisterProps } from "@/interfaces/interfaces"; 
import { USERS_PATHS } from "@/pages/dashboard-layout/users/users-routes";

const useEditUser = (id: string) => {
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
        navigate(`/users/${USERS_PATHS.USERS_LIST}`);
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

export default useEditUser;
