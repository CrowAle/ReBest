import Image from "next/image";

const Logo = () => {
 
    
    return (
        <div className="bg-white-700 flex items-center justify-center ">
        <a
                  className="items-center"
                  href="/"
                  target="_blank"
                  rel="immobiliare"   
                >
                  <Image
                    aria-hidden
                    src="/SoloLogoff00ffbicolor.svg"
                    alt="File icon"
                    width={50}
                    height={50}
                  />
                
                </a>
        </div>
    );
}

export default Logo