'use server';

import { createClient } from "@/app/utils/supabase/server";
export type FormState = {
    message : string | null ;
    error : string | null ;
}

export async function createUser (prevstate : FormState, formData : FormData) { 
    const username  = (formData.get('username') as string) || '';
    const password   = (formData.get('password') as string) || '';
    const confirmpassword = formData.get('confirm-password');
 
    if (!password || password != confirmpassword || !username) {
        return {error : "Password should be the same as the confirm password and username is required"}
    }
    const supabaseClient = await createClient();
   const d   = { email: username,
    password:password }
    
    
const {  data,error } = await supabaseClient.auth.signUp( d )   ;
 if(error){
    return {error : "Registrazione fallita" + error.message}
 } 

return{message :"registration ok " + username +"check your email"}

}
