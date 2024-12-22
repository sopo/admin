import { getSession } from "@/api/session/get-session";
import { Session } from "@supabase/supabase-js";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "./enums";

const useGetUserSession = (onSuccess: (data: Session | null) => void) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_SESSION],
    queryFn: async () => {
      return await getSession();
    },
    onSuccess: onSuccess,
  });
};
export default useGetUserSession;
