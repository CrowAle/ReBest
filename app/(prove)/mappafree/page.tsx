"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// Carica il componente lato client
const OSMMapComponent = dynamic(() => import('@/app/components/OSMMapComponent'), {
  ssr: false, // Disabilita il rendering lato server
});

const HomePage: React.FC = () => {
  const locations = [
    { lat: 41.9028, lng: 12.4964, address: 'Colosseo, Roma' },
    { lat: 41.8902, lng: 12.4922, address: 'Foro Romano, Roma' },
    { lat: 41.9036, lng: 12.4545, address: 'Basilica di San Pietro, Città del Vaticano' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mappa degli indirizzi</h1>
      <OSMMapComponent locations={locations} />
    </div>
  );
};

export default HomePage;