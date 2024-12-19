import { supabase } from "@/supabase"

export const getUser = (id: string) => {
    return supabase.auth.admin.getUserById(id).then((res) => {
        return res.data.user
    })
}