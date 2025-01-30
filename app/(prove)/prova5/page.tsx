import React from 'react';

const AlternatingSections = () => {
  return (
    <div className="space-y-12">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className={`flex flex-col ${
            item % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
          } items-center gap-8 p-8`}
        >
          <img
            src="casa.jpeg"
            alt="Section"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Sezione {item}</h2>
            <p className="text-gray-600">
              Questo è un esempio di contenuto per la sezione.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingSections;