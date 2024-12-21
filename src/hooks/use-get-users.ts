import { getUsers } from "@/api/users/get-users";
import { User } from "@supabase/supabase-js";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";

const useGetUsers = <T = User[]>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<User[], Error, T>, "queryKey" | "queryFn">;
} = {}): UseQueryResult<T, Error> => {
  return useQuery<User[], Error, T>({
    queryKey: ["users"],
    queryFn: async() => {
      const result = await getUsers()
      return result ?? [];
    },
    ...queryOptions,
  });
};
export default useGetUsers;
