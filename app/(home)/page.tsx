import Image from "next/image";
import Casa from "../components/layout/casa";


 


export default function Home() {
  return (
    <div className="bg-violet-200">
  
    <div className="bg-cover bg-center bg-no-repeat bg-violet-200 grid grid-rows items-center justify-items-center  font-[family-name:var(--font-geist-sans)]" >
      
     <div className=" min-h-80 bg-contain bg-no-repeat bg-auto  bg-center bg-blue-500 h-32 w-full row-start-1" style={{ 
      backgroundImage: `url('/casa2.jpeg')` 
    }} > </div>
  <div className=" bg-contain bg-green-500 h-full row-start-2"></div>
  <div className="bg-yellow-500 h-full"></div>
     
    </div>
    </div>
  );
}
