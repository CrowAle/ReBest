import React from 'react';


    
// Interfaccia per gli articoli
interface Article {
  id: number;
  title: string;
  excerpt: string;
  link: string;
}

// Dummy data per gli ultimi articoli
const latestArticles: Article[] = [
  {
    id: 1,
    title: 'Guida alla Legislazione Immobiliare',
    excerpt: 'Scopri tutto sulle nuove leggi immobiliari e come influenzano il mercato.',
    link: '/blog/legislazione',
  },
  {
    id: 2,
    title: 'Risparmio Energetico in Casa',
    excerpt: 'Consigli pratici per ridurre i consumi e risparmiare energia.',
    link: '/blog/risparmio-energetico',
  },
  {
    id: 3,
    title: 'Ristrutturazioni: Da Dove Iniziare',
    excerpt: 'Una guida passo-passo per pianificare e gestire ristrutturazioni.',
    link: '/blog/ristrutturazioni',
  },
];

const Home2: React.FC = () => {
  return (
   
    
    <div className="min-h-screen bg-gray-100">
      {/* Sezione Hero con immagine di sfondo */}
      <div
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/casa.jpeg')`  }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Benvenuto nel Futuro dell'Immobiliare</h1>
          <p className="text-lg">
            Scopri le ultime novità su legislazione, risparmio energetico e ristrutturazioni.
          </p>
        </div>
      </div>

      {/* Sezione Contenuto Principale */}
      <div className="container mx-auto px-4 py-12">
        {/* Descrizione del Sito */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Il Tuo Portale di Informazioni Immobiliari</h2>
          <p className="text-gray-700">
            Offriamo guide aggiornate, consigli pratici e prodotti consigliati per aiutarti a
            gestire al meglio il tuo immobile.
          </p>
        </div>

        {/* Ultimi Articoli (3 Colonne) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <a
                href={article.link}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Leggi di più →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
 
  );
};

export default Home2;