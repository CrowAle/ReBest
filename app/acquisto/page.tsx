import Image from "next/image";

import Casa from "../components/layout/casa";
import Hero from "../components/layout/hero";

 


export default function Home() {
  return (
    <div className="bg-violet-200 grid grid-rows-[1px_1fr_1px] items-center justify-items-center  p-1 pb-1 gap-1 sm:p-1 font-[family-name:var(--font-geist-sans)]">
     
      <main className="flex flex-col gap-0 row-start-2 items-center sm:items-start">
        <Casa />
        <Hero />
      </main> 
     
    </div>
  );
}
