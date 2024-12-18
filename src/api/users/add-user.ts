import { supabase } from "../../supabase";


export const AddUser = async (payload: { email: string, password: string }) => {
    try {
      const { data, error } = await supabase.auth.admin.createUser({
        email: payload.email,
        password: payload.password,
   
      });
      if (error) throw error;
      return data;  
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };