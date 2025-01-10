'use server';

import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";
import { headers } from "next/headers";
  const loginAction=  async ( formData : FormData ) => {
    const supabaseClient = await createClient();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log(email + " " + password);
    
    const auth ={email, password};
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    })
    if(error){ 
      console.log('ciccia' + error.message);
      return
    }
    redirect("/");
  };

  export default loginAction