import { Button } from "@/components/ui/button";
import Logo from "./logo";
import UserMenu from "./user-menu";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/server";
import Linksnav from "./linksnav";


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
    <div className=" bg-gray-100 grid  md:grid-cols-[1fr_5fr_1fr] sm:grid-cols-[1fr_8fr_1fr] h-30 md:h-35 w-full content-center pt-4 border-b-8 border-gray-200 " >
        <div className="justify-center content-center"><Logo  /></div>
        <div className=" grid  sm:grid-cols-1 md:grid-cols-1 content-center justify-center pt-4 pb-4">
            <div className="sm:col-start-1 md:col-start-1 justify-items-center content-center font-bold text-sm"> <Linksnav/></div>  </div>
        <div className="justify-items-center content-center"> 
            
            {user ? <UserMenu user={user}/> : 
           
            <Button variant="immo"  asChild><Link href="/login"> Login </Link></Button>
        }

     </div>
     </div>
    

    )};


export default Navbar;