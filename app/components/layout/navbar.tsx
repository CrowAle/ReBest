import { Button } from "@/components/ui/button";
import Logo from "./logo";
import UserMenu from "./user-menu";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/server";



async function Navbar() {
    /**
     * Get the user from the supabase client
     */

    const supabaseClient =  await createClient();
    const { data: { user }} = await supabaseClient.auth.getUser();
    console.log(user);
    
   
    /**
     * Render the navbar
     */
   
    return (
    <div className="flex bg-lime-100 grid grid-cols-4 gap-4 content-center h-30 md:h-35 w-full items-center">
        <div className="flex text-center justify-center content-center w-32 md:w-40 "><Logo  /></div>
        <div className=""></div>
        <div className=""></div>
        <div className="text-center justify-center content-center  "> 
            
            {user ? <UserMenu user={user}/> : 
           
            <Button variant="immo"  asChild><Link href="/login"> Login </Link></Button>
        }

     </div>
     </div>
    

    )};


export default Navbar;