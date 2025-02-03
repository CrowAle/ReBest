import React from 'react';

const CardWithButtonsGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Card {item}</h3>
            <p className="text-gray-600 mb-4">
              Questo è un esempio di contenuto per la card.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Dettagli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardWithButtonsGrid;