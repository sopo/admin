import { supabase } from "@/supabase"

export const editUser = (id: string, payload: {email:string, password:string}) => {
    return supabase.auth.admin.updateUserById(id, {...payload})
}