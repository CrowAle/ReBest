import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-content bg-gray-900">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Benvenuto nel mio sito!</h1>
          <p className="text-lg">
            Questo è un breve testo che descrive il tuo sito e ciò che offre.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Scopri di più
          </button>
        </div>
        <img src="/casa.jpeg" alt="Immagine del tuo sito" className="w-full md:w-1/2 h-auto object-cover" />
      </div>
    </div>
  );
};

export default Hero;