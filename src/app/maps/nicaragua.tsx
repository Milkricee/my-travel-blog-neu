"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

// Zentrum auf Nicaragua setzen (ungefähre Mitte des Landes)
const center = { lat: 11.859229, lng: -86.00854259485322 };

// Koordinaten für besuchte Orte in Nicaragua
const locations = [
  { name: "Managua", lat: 12.1364, lng: -86.251 },
  { name: "San Juan del Sur", lat: 11.2529, lng: -85.87 },
  { name: "Ometepe (Moyogalpa)", lat: 11.5385, lng: -85.6963 },
  { name: "Ometepe (Balgue)", lat: 11.4932, lng: -85.5451 },
  { name: "Playa Coco", lat: 11.156927148914894, lng: -85.80219044642963 },
  { name: "Playa Escondida", lat: 11.25, lng: -85.85 },
  { name: "El Gigante", lat: 11.3792, lng: -86.0375 },
  { name: "Granada", lat: 11.9299, lng: -85.956 },
  { name: "Laguna de Apoyo", lat: 11.9224, lng: -86.0297 },
  { name: "Treehouse Nicaragua", lat: 11.859229, lng: -86.00854259485322 },

  ,
];

export default function NicaraguaRoute() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={7}>
      {/* Marker für alle Orte */}
      {locations.map((loc, index) => (
        <Marker
          key={index}
          position={{ lat: loc.lat, lng: loc.lng }}
          label={{
            text: loc.name,
            color: "#0000FF", // Blaue Schriftfarbe
            fontWeight: "bold",
          }}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Blaue Marker
          }}
        />
      ))}
    </GoogleMap>
  );
}
