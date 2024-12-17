import { User } from "@supabase/supabase-js";

export const mapUsersList = (users: User[]) => {
    return (
        users?.map((user) => ({
            email: user?.email,
            createdAt: user?.created_at,
            lastSignIn: user?.last_sign_in_at,
            key: user?.id
        }))
    )
}