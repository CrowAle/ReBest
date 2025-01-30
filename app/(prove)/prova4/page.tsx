import React from 'react';

const ResponsiveList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="space-y-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6"
          >
            <img
              src="casa.jpeg"
              alt="Thumbnail"
              className="w-full md:w-1/4 mb-4 md:mb-0 rounded-lg"
            />
            <div className="w-full md:w-3/4 md:ml-6">
              <h3 className="text-xl font-bold mb-2">Elemento {item}</h3>
              <p className="text-gray-600">
                Questo è un esempio di contenuto per l'elemento della lista.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveList;