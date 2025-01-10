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
                    src="/logo.svg"
                    alt="File icon"
                    width={60}
                    height={60}
                  />
                
                </a>
        </div>
    );
}

export default Logo