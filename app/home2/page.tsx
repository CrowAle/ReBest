import Home2 from "../components/layout/home2";
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

const IndexPage: React.FC = () => {

  return (
 
  <Home2 />
  )
   
  ;
};

export default IndexPage;