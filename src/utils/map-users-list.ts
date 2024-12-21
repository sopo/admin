import { User } from "@supabase/supabase-js";
import { formatDate } from "./format-date";

export const mapUsersList = (users: User[]) => {
    return (
        users?.map((user) => ({
            email: user?.email,
            created_at: user?.created_at ? formatDate(user.created_at) : "-",
            lastSignIn: user?.last_sign_in_at ? formatDate(user.last_sign_in_at) : "-",
            key: user?.id ?? Math.random().toString(36).slice(2, 11),
            app_metadata: user?.app_metadata ?? {},
            user_metadata: user?.user_metadata ?? {},
            aud: user?.aud ?? "",
        }))
    )
}