"use client";
import { createClient } from "@/app/utils/supabase/client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
  
interface UserMenuProps {
   user : User;
}
const UserMenu = ( { user } : UserMenuProps) => {
   const router = useRouter();
  const logout = async () => {
    const supabase = await createClient();
     const { error } = await supabase.auth.signOut();
     if (!error) {
      router.refresh();
    }
  }
    return (<div className="justify-center content-center">
    <DropdownMenu>
    <DropdownMenuTrigger><Image src="/avatar.svg" alt="Logout" width={40} height={40} /></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>{user.email}</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu></div>)
  
};

export default UserMenu