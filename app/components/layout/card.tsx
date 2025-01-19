import Image from "next/image";

const Card = () => {
    return (
       
        <div className=" grid grid-cols-4 ">
      <div className="backdrop-blur col-start-2 flex justify-between py-6 px-4 bg-rose-50/80 rounded-lg ">
                    <div className="flex items-center space-x-4">
                        <Image src="/casa.jpeg"
                         alt="Next.js logo"
                         fill = {true}
                          priority   />
                        <div className="flex flex-col space-y-1">
                            <span className="font-bold">Leonard Krashner</span>
                            <span className="text-sm">Yeah same question here too 🔥</span>
                        </div>
                    </div>
                    <div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                        17m ago
                    </div>
         </div>
         </div>
    );
}

export default Card