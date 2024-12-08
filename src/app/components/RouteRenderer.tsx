import { DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";
import { useState, useEffect } from "react";

interface RouteRendererProps {
  origin: google.maps.LatLngLiteral; // Startpunkt der Route
  destination: google.maps.LatLngLiteral; // Zielpunkt der Route
}

export default function RouteRenderer({ origin, destination }: RouteRendererProps) {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  useEffect(() => {
    if (isLoaded) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error("Fehler beim Abrufen der Route:", status);
          }
        }
      );
    }
  }, [isLoaded, origin, destination]);

  return directions ? <DirectionsRenderer directions={directions} /> : null;
}
