/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */

import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { OverlayView } from "react-google-maps";

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const [isCard, setIsCard] = useState(false);
  const [cardData, setCardData] = useState(null);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API_KEY }}
      version="weekly"
      defaultCenter={{ lat: 54.526, lng: 15.2551 }}
      center={coordinates}
      defaultZoom={10}
      options={{ mapId: "58887c3f87185bbb" }}
      onChange={(e) => {
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
      }}
    >
      {/* <Marker position={{ lat: 18.52043, lng: 73.856743 }} /> */}
    </GoogleMapReact>
  );
};

export default Map;
