// components/OSMMapComponent.tsx
'use client'; // Assicurati che il componente venga eseguito lato client

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importa gli stili CSS di Leaflet

// Fix per i marker mancanti (problema noto con React Leaflet)
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41], // Dimensioni dell'icona del marker
  iconAnchor: [12, 41], // Punto di ancoraggio del marker
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Location {
  lat: number;
  lng: number;
  address: string;
}

interface OSMMapComponentProps {
  locations: Location[];
}

const OSMMapComponent: React.FC<OSMMapComponentProps> = ({ locations }) => {
  const center: [number | 0, number | 0] = [41.9028, 12.4964]; // Centrato su Roma, Italia

  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat  || 0, location.lng || 0]}>
          <Popup><a href={`https://www.google.com/maps/search/?api=1&query=${location.address}`} target="_blank">{location.address}</a></Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default OSMMapComponent;

