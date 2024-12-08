"use client";

import RouteRenderer from "../components/RouteRenderer";
import GoogleMapProvider from "../components/GoogleMapProvider";

export default function SenegalRoute() {
  return (
    <div id="map-senegal" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapProvider center={{ lat: 14.7167, lng: -17.4677 }} zoom={8}>
        <RouteRenderer
          origin={{ lat: 14.7167, lng: -17.4677 }} // Dakar
          destination={{ lat: 14.4353, lng: -17.0023 }} // Saly
        />
      </GoogleMapProvider>
    </div>
  );
}
