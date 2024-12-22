import { login } from "@/api/authorization";
import { useMutation } from "react-query";

const useSignIn = (onSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: login,
    onSuccess,
  });

  return mutation;
};
export default useSignIn;
