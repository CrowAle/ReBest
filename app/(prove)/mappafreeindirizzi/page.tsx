"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { geocodeAddress } from '@/app/utils/geocode';

const OSMMapComponent = dynamic(() => import('@/app/components/OSMMapComponent'), {
  ssr: false,
});

const HomePage: React.FC = () => {
  const [locations, setLocations] = useState<{ lat: number | 0 ; lng: number | 0; address: string }[]>([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const addresses = [
        'Colosseo, Roma',
        'Foro Romano, Roma',
        'Basilica di San Pietro, Città del Vaticano',
        'via bonino 24, Pralungo',
        'dubai',
        'bangkok',
      ];

      const locationsWithCoords = await Promise.all(
        addresses.map(async (address) => {
          const coords = await geocodeAddress(address);
          return { ...coords, address };
        })
      );

      setLocations(locationsWithCoords.filter((loc): number | undefined => loc.lat   && loc.lng));
    };

    fetchCoordinates();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mappa degli indirizzi</h1>
      {locations.length > 0 ? (
        <OSMMapComponent locations={locations} />
      ) : (
        <p>Caricamento in corso...</p>
      )}
    </div>
  );
};

export default HomePage;