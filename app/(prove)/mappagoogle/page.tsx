"use client";
import MapComponent from '@/app/components/MapComponent';
import React from 'react';


const HomePage: React.FC = () => {
  const locations = [
    { lat: 43.9028, lng: 10.4964, address: 'Colosseo, Roma' },
    { lat: 41.8902, lng: 12.4922, address: 'Foro Romano, Roma' },
    { lat: 41.9036, lng: 12.4545, address: 'Basilica di San Pietro, Città del Vaticano' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mappa degli indirizzi</h1>
      <MapComponent locations={locations} />
    </div>
  );
};

export default HomePage;