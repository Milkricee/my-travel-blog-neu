"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 4.5709, lng: -74.2973 }; // Zentrum auf Kolumbien setzen

// Korrekte Koordinaten für besuchte Orte in Kolumbien
const locations = [
  { name: "Bogotá", lat: 4.6097, lng: -74.0817 },
  { name: "San Andrés", lat: 12.5847, lng: -81.7004 },
  { name: "Cartagena", lat: 10.3932, lng: -75.4832 },
  { name: "Santa Marta", lat: 11.2408, lng: -74.199 },
  { name: "Minca", lat: 11.1433, lng: -74.1144 },
  { name: "Palomino", lat: 11.2509, lng: -73.5661 },
  { name: "Medellín", lat: 6.2442, lng: -75.5812 },
  { name: "Guatapé", lat: 6.2333, lng: -75.1645 },
  { name: "Mesetas", lat: 3.381995, lng: -74.043801 },
  { name: "Leticia", lat: -4.2164, lng: -69.9406 },
  { name: "Iquitos, Peru", lat: -3.7489, lng: -73.2516 },
  { name: "Bahía Solano", lat: 6.2272, lng: -77.4121 },
  { name: "El Valle", lat: 6.0482, lng: -77.5027 },
  { name: "Nuquí", lat: 5.7099, lng: -77.2683 },
  { name: "Villa de Leyva", lat: 5.636499, lng: -73.527058 },
];

export default function Nicaraguaroute() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5}>
      {/* Blaue Marker für die Orte */}
      {locations.map((loc, index) => (
        <Marker
          key={index}
          position={{ lat: loc.lat, lng: loc.lng }}
          label={{
            text: loc.name,
            color: "#0000FF", // Blau
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
