// components/MapComponent.tsx
import React from 'react';
import {  GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 41.9028, // Centrato su Roma, Italia
  lng: 12.4964,
};

interface Location {
  lat: number;
  lng: number;
  address: string;
}

interface MapComponentProps {
  locations: Location[];
}

const MapComponent: React.FC<MapComponentProps> = ({ locations }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.address}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;