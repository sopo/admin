import { supabase } from "../supabase"
export const getUsers = () => {
    return supabase.auth.admin.listUsers().then((res) => {
        return res.data.users
       })
}