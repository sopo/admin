import { ArticleProps } from "../interfaces/types";
import { supabase } from "../supabase";

export const addArticle = async (payload: ArticleProps) => {
    const { data, error } = await supabase
      .from("blogs")
      .insert([payload])  
      .select();          

    if (error) {
      throw new Error(error.message);  
    }

    return data;  
};
