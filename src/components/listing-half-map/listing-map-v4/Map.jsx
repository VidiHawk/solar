/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */

import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

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
      // margin={[50, 50, 50, 50]}
      options={{ mapId: "58887c3f87185bbb" }}
      onChange={(e) => {
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      }}
      onChildClick={(child) => {
        setCardData(places[child]);
        setIsCard(true);
      }}
    ></GoogleMapReact>
  );
};

export default Map;
