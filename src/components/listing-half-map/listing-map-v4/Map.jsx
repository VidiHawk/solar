// import React, { useState, useRef } from "react";
// import useSwr from "swr";
// import GoogleMapReact from "google-map-react";
// import useSupercluster from "use-supercluster";
// // import "./App.css";

// const Map = ({ coordinates, setCoordinates, setBounds, mapRef, zoom, bounds }) => {
//   const [isCard, setIsCard] = useState(false);
//   const [cardData, setCardData] = useState(null);

//   return (
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API_KEY }}
//       defaultCenter={{ lat: 53.342, lng: -6.235 }}
//       center={coordinates}
//       defaultZoom={10}
//       options={{ mapId: "58887c3f87185bbb" }}
//       yesIWantToUseGoogleMapApiInternals
//       onGoogleApiLoaded={({ map }) => {
//         mapRef.current = map;
//       }}
//       // onChange={(e) => {
//       //   setCoordinates({ lat: e.center.lat, lng: e.center.lng });
//       // }}
//       onChange={({ zoom, bounds }) => {
//         setZoom(zoom);
//         setBounds([
//           bounds.nw.lng,
//           bounds.se.lat,
//           bounds.se.lng,
//           bounds.nw.lat,
//         ]);
//       }}
//     >
//       {/* markers here */}
//     </GoogleMapReact>
//   );
// };

// export default Map;
