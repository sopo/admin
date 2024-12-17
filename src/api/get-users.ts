import { supabase } from "../supabase"
export const getUsers = () => {
    return supabase.auth.admin.listUsers().then((res) => {
    
            console.log("user data", res.data)
           return res.data.users

       })
}