import { useMutation } from "react-query";
import { editUser } from "@/api/users/edit-user";
import { RegisterProps } from "@/interfaces/interfaces";

const useEditUser = (id: string, onSuccess: () => void) => {
  const mutation = useMutation(
    (values: RegisterProps) => {
      if (id) {
        return editUser(id, values);
      }
      return Promise.reject("no ID found");
    },
    {
      onSuccess,
    },
  );

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useEditUser;
