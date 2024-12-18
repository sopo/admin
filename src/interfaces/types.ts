import { Database } from "../supabase/database.types";

export type ArticlesListProps =  Database["public"]["Tables"]["blogs"]["Insert"][]