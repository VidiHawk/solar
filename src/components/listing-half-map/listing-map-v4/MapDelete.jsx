import { useState } from "react";
import ReactMapGL from "react-map-gl";
export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // The latitude and longitude of the center of London
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 10,
  });
  return (
    <ReactMapGL
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/thefabster/cl7qbppp0003l15o6drhio03h"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}
