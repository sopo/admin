import { User } from "@supabase/supabase-js";
import { formatDate } from "./format-date";

export const mapUsersList = (users: User[]) => {
    return (
        users?.map((user) => ({
            email: user?.email,
            createdAt: user?.created_at ? formatDate(user.created_at) : "-",
            lastSignIn: user?.last_sign_in_at ? formatDate(user.last_sign_in_at) : "-",
            key: user?.id
        }))
    )
}