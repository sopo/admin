import { ArticleProps } from "../../interfaces/types";
import { supabase } from "../../supabase";

export const getArticle = async (id: number | string): Promise<ArticleProps | null> => {
  const { data, error } = await supabase
    .from("blogs") 
    .select("*") 
    .eq("id", id) 
    .single();
  if (error) {
    throw new Error(error.message); 
  }

  if (!data) {
    throw new Error("article not found"); 
  }

  return data; 
};
