import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "ReBest Il futuro dell Immobiliare",
  description: "Informazioni utili su legislazione, risparmio energetico e ristrutturazioni.",
  openGraph: {
    title: "ReBest Il futuro dell Immobiliare",
    description: "Informazioni utili su legislazione, risparmio energetico e ristrutturazioni.",
    images: "/SoloLogoff00ffbicolor.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReBest Il futuro dell Immobiliare",
    description: "Informazioni utili su legislazione, risparmio energetico e ristrutturazioni.",
    images: "/SoloLogoff00ffbicolor.svg",
  },
  icons: {
    icon: "/SoloLogoff00ffbicolor.svg",
  },
};

export default function Home() {
  return (
    <div className=" p-4">
  
    <div className="bg-cover bg-center bg-no-repeat  sm:grid grid-cols-3 items-center justify-items-center  font-[family-name:var(--font-geist-sans)] " >
      
     <div className=" min-h-80 bg-contain bg-no-repeat bg-auto  bg-center h-32 w-full p-4" style={{ 
      backgroundImage: `url('/casa2.jpeg')` 
    }} > </div>
  <div className=" bg-contain  h-full w-full p-4">hjtyjty tyjdryjryj ryretyhr thrth rth </div>
  <div className=" h-full w-full p-4">asvluiadvasdv sfdbsfjk sldovahnvd</div>
     
    </div>
    </div>
  );
}
