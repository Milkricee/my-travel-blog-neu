"use client";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface GoogleMapProviderProps {
  children?: React.ReactNode; // Für Routen, Marker oder andere Kinder-Komponenten
  center?: google.maps.LatLngLiteral; // Optional: Kartenzentrum
  zoom?: number; // Optional: Zoom-Level
}

export default function GoogleMapProvider({
  children,
  center = { lat: 14.7167, lng: -17.4677 }, // Default: Dakar
  zoom = 10,
}: GoogleMapProviderProps) {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "500px" }}
        center={center}
        zoom={zoom}
      >
        {children} {/* Routen oder Marker werden hier gerendert */}
      </GoogleMap>
    </LoadScript>
  );
}
