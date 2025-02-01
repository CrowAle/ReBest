'use client';
import React, { useState } from 'react';

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 border-b">
        {[1, 2, 3].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600'
            }`}
          >
            Tab {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 1 && <p>Contenuto del Tab 1</p>}
        {activeTab === 2 && <p>Contenuto del Tab 2</p>}
        {activeTab === 3 && <p>Contenuto del Tab 3</p>}
      </div>
    </div>
  );
};

export default TabLayout;