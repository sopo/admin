import { ArticleProps } from "../../interfaces/types";
import { supabase } from "../../supabase";


export const editArticle = async (id: number | string, payload: ArticleProps) => {
    const { data, error } = await supabase
      .from("blogs") 
      .update(payload) 
      .eq("id", id)
      .select(); 
  
    if (error) {
      throw new Error(error.message); 
    }
  
    return data; 
  };