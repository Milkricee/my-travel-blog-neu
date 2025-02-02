"use client";

import RouteRenderer from "../components/RouteRenderer";
import GoogleMapProvider from "../components/GoogleMapProvider";

export default function MarokkoRoute() {
  return (
    <div id="map-marokko">
      <GoogleMapProvider center={{ lat: 31.6225, lng: -7.9898 }} zoom={7}>
        <RouteRenderer
          origin={{ lat: 31.6225, lng: -7.9898 }} // Marrakesch
          destination={{ lat: 31.6225, lng: -7.9898 }} // Marrakesch (Rückkehr)
          waypoints={[
            { location: { lat: 32.0142, lng: -6.7189 }, stopover: true }, // Bin El Ouidane
            { location: { lat: 32.1086, lng: -6.4617 }, stopover: true }, // La Cathédrale Imsfrane
            { location: { lat: 31.9822, lng: -6.1331 }, stopover: true }, // Agouti
            { location: { lat: 31.6393, lng: -6.481 }, stopover: true }, // Ouarzazate
            { location: { lat: 30.9335, lng: -6.937 }, stopover: true }, // Agadir
            { location: { lat: 30.428, lng: -9.5925 }, stopover: true }, // Taghazout
            { location: { lat: 30.5449, lng: -9.7085 }, stopover: true }, // Zwischenstopp
            { location: { lat: 31.5105, lng: -9.7719 }, stopover: true }, // Essaouira
          ]}
        />
      </GoogleMapProvider>
    </div>
  );
}
