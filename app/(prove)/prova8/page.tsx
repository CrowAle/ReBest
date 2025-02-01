import React from 'react';

const CenteredTextGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-2">Servizio {item}</h3>
            <p className="text-gray-600">
              Descrizione breve del servizio offerto.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenteredTextGrid;