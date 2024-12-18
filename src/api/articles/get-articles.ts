import { supabase } from "../../supabase"


export const getArticles =async () => {
    return  supabase.from("blogs").select("*").throwOnError().then((res) => {
        return res.data
    })
  
}