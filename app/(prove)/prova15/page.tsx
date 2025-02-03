"use client";
import React, { useState } from 'react';

const SidebarWithTabsLayout = () => {
  const [activeTab, setActiveTab] = useState(1);

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
        <div className="flex space-x-4 border-b mb-4">
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
        <div>
          {activeTab === 1 && <p>Contenuto del Tab 1</p>}
          {activeTab === 2 && <p>Contenuto del Tab 2</p>}
          {activeTab === 3 && <p>Contenuto del Tab 3</p>}
        </div>
      </div>
    </div>
  );
};

export default SidebarWithTabsLayout;