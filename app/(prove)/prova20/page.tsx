import React from 'react';

const SidebarWithGridLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Barra Laterale */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">Link 1</li>
          <li className="mb-2">Link 2</li>
          <li className="mb-2">Link 3</li>
        </ul>
      </div>

      {/* Contenuto Principale */}
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Contenuto Principale</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
};

export default SidebarWithGridLayout;