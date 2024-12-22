import { getUsers } from "@/api/users/get-users";
import { User } from "@supabase/supabase-js";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "./enums";

const useGetUsers = <T = User[]>({
  queryOptions,
}: {
  queryOptions?: Omit<
    UseQueryOptions<User[], Error, T>,
    "queryKey" | "queryFn"
  >;
} = {}): UseQueryResult<T, Error> => {
  return useQuery<User[], Error, T>({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: async () => {
      const result = await getUsers();
      return result ?? [];
    },
    ...queryOptions,
  });
};
export default useGetUsers;
