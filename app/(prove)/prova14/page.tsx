import React from 'react';

const ImageTextSideGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="casa.jpeg"
              alt="Placeholder"
              className="w-full md:w-1/2 h-48 object-cover rounded-lg"
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-2">Titolo {item}</h3>
              <p className="text-gray-600">
                Questo è un esempio di testo descrittivo per l'elemento {item}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTextSideGrid;