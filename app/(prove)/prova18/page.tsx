import React from 'react';

const EnhancedSidebarWithGridLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Barra Laterale */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-3">
            <a
              href="#"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <span>Home</span>
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <span>Servizi</span>
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <span>Contatti</span>
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#"
              className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <span>Chi Siamo</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Contenuto Principale */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Contenuto Principale</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <a
              key={item}
              href="#"
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src="casa.jpeg"
                alt="Placeholder"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-blue-500 transition-colors duration-200">
                  Card {item}
                </h3>
                <p className="text-gray-600">
                  Questo è un esempio di contenuto per la card. Clicca per
                  saperne di più.
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedSidebarWithGridLayout;