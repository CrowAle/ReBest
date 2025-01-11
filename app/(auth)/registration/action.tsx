'use server';

import { createClient } from "@/app/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export type FormState = {
    message : string;
    error : string;
}
export async function createUser (prevstate : FormState, formData : FormData) {
    const username  = formData.get('username');
    const password   = formData.get('password');
    const confirmpassword = formData.get('confirm-password');
 
    if (!password || password != confirmpassword || !username) {
        return {error : "Password should be the same as the confirm password and username is required"}
    }
    const supabaseClient = await createClient();
   const dataa = { email: username,
    password:password }
    
    
const {  data,error } = await supabaseClient.auth.signUp(dataa)
 if(error){
    return {error : "Registrazione fallita" + error.message}
 } 

return{message :"registration ok " + username +"check your email"}

}
