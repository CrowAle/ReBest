import React from 'react';

const TwoColumnLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Sidebar</h2>
          <ul>
            <li className="mb-2">Link 1</li>
            <li className="mb-2">Link 2</li>
            <li className="mb-2">Link 3</li>
          </ul>
        </div>

        {/* Contenuto Principale */}
        <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Contenuto Principale</h1>
          <p>
            Questo è il contenuto principale della pagina. Su mobile, la sidebar
            va sopra o sotto il contenuto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
