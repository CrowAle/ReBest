import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center">
        {/* Testo */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Benvenuto nel mio sito</h1>
          <p className="text-lg mb-6">
            Questo è un esempio di sezione hero con un'immagine e del testo.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Scopri di più
          </button>
        </div>

        {/* Immagine */}
        <div className="w-full md:w-1/2">
          <img
            src="/casa2.jpeg"
            alt="Hero"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;