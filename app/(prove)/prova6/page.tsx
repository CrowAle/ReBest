import React from 'react';

const ImageGridWithOverlay = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="relative group">
            <img
              src="casa.jpeg"
              alt="Gallery"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              <p className="text-white text-lg font-bold">Titolo {item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGridWithOverlay;