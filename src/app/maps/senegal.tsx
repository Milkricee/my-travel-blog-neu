"use client";

import RouteRenderer from "../components/RouteRenderer";
import GoogleMapProvider from "../components/GoogleMapProvider";

export default function SenegalRoute() {
  return (
    <div id="map-senegal">
      <GoogleMapProvider center={{ lat: 13.7914, lng: -16.3180 }} zoom={7}>
        <RouteRenderer
          origin={{ lat: 14.7167, lng: -17.4677 }} // Dakar
          destination={{ lat: 12.3614, lng: -16.7146 }} // Cap Skirring
          waypoints={[
            { location: { lat: 14.4207, lng: -16.9716 }, stopover: true }, // M'bour
            { location: { lat: 14.0765, lng: -16.7024 }, stopover: true }, // Dangane
            { location: { lat: 14.1652, lng: -16.0758 }, stopover: true }, // Kaolack
            { location: { lat: 13.4544, lng: -16.5753 }, stopover: true }, // Banjul
          ]}
        />
      </GoogleMapProvider>
    </div>
  );
}
