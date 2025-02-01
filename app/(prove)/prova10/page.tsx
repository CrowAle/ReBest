'use client';
import React, { useState } from 'react';

const FilterableGrid = () => {
  const [filter, setFilter] = useState('all');
  const items = [
    { id: 1, category: 'web', title: 'Progetto Web 1' },
    { id: 2, category: 'design', title: 'Progetto Design 1' },
    { id: 3, category: 'web', title: 'Progetto Web 2' },
    { id: 4, category: 'marketing', title: 'Progetto Marketing 1' },
  ];

  const filteredItems =
    filter === 'all'
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } rounded-lg`}
        >
          Tutto
        </button>
        <button
          onClick={() => setFilter('web')}
          className={`px-4 py-2 ${
            filter === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } rounded-lg`}
        >
          Web
        </button>
        <button
          onClick={() => setFilter('design')}
          className={`px-4 py-2 ${
            filter === 'design' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } rounded-lg`}
        >
          Design
        </button>
        <button
          onClick={() => setFilter('marketing')}
          className={`px-4 py-2 ${
            filter === 'marketing' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } rounded-lg`}
        >
          Marketing
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">Categoria: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterableGrid;