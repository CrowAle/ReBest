import React from 'react';

const CardGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Card {item}</h3>
            <p className="text-gray-600">
              Questo è un esempio di contenuto per la card.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
