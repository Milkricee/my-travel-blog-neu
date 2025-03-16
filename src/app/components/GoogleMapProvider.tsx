"use client";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface GoogleMapProviderProps {
  children?: React.ReactNode; // Für Routen, Marker oder andere Komponenten
  center: google.maps.LatLngLiteral; // Erfordert eine explizite Kartenmitte
  zoom: number; // Erfordert ein explizites Zoom-Level
  height?: string; // Ermöglicht individuelle Anpassung der Kartengröße
}

export default function GoogleMapProvider({
  children,
  center,
  zoom,
  height = "500px", // Standardgröße, falls nichts angegeben wird
}: GoogleMapProviderProps) {
  return (
    <div className="map-wrapper">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        libraries={["places", "geometry"]} // Ergänze alle benötigten Bibliotheken
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height }}
          center={center}
          zoom={zoom}
        >
          {children} {/* Marker oder Polylines werden hier gerendert */}
        </GoogleMap>
      </LoadScript>
      <br /> {/* Fügt automatisch Abstand nach der Karte ein */}
    </div>
  );
}
