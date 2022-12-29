import customCard from "./customCardJquery";
import getCardData from "./cardData";

export function initializeMap(mapboxgl, map, setSharedCard, setSelectedMarker) {
  map.on("click", "data", function (e) {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["data"],
    });
    const clusterId = features[0].properties.cluster_id;
    map
      .getSource("power-generator")
      .getClusterExpansionZoom(clusterId, function (err, zoom) {
        if (err) return;
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom,
        });
      });
  });

  const getCoordinates = (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    return coordinates;
  };

  const cardData = [];
  const markerData = [];

  const markerEvent = (id) => {
    map.on("click", id, function (e) {
      // const [coordinates, customPop] = [getCoordinates(e), customCard(e)];
      // const card = new mapboxgl.Marker(customPop[0]).setLngLat([
      //   coordinates[0],
      //   coordinates[1] - 0.3,
      // ]);
      // card.addTo(map);
      // cardData.push(card);
      markerData = [];
      const coordinates = getCoordinates(e);
      markerData.push([coordinates, getCardData(e)]);
      setSelectedMarker(markerData);
    });

    map.on("mouseenter", id, function (e) {
      map.getCanvas().style.cursor = "pointer";
      const [coordinates, customPop] = [getCoordinates(e), customCard(e)];
      const zoom = map.getZoom();
      const lng =
        zoom <= 3
          ? coordinates[0] + 15
          : 3 < zoom && zoom <= 4
          ? coordinates[0] + 5
          : 4 < zoom && zoom <= 5
          ? coordinates[0] + 2.5
          : 5 < zoom && zoom <= 6
          ? coordinates[0] + 1.5
          : 6 < zoom && zoom <= 8
          ? coordinates[0] + 0.4
          : 8 < zoom && zoom <= 11
          ? coordinates[0] + 0.02
          : coordinates[0] + 0.005;
      const lat =
        zoom <= 3
          ? coordinates[1] - 10
          : 3 < zoom && zoom <= 4
          ? coordinates[1] - 3
          : 4 < zoom && zoom <= 5
          ? coordinates[1] - 1.5
          : 5 < zoom && zoom <= 6
          ? coordinates[1] - 0.8
          : 6 < zoom && zoom <= 8
          ? coordinates[1] - 0.1
          : 8 < zoom && zoom <= 11
          ? coordinates[1] - 0.02
          : coordinates[1] - 0.005;
      -0.005;
      const card = new mapboxgl.Marker(customPop[0]).setLngLat([lng, lat]);
      card.addTo(map);
      cardData.push(card);
      // const coordinates = getCoordinates(e);
      // cardData.push([coordinates, getCardData(e)]);
      // setSharedCard(cardData);
    });

    map.on("mouseleave", id, function (e) {
      map.getCanvas().style.cursor = "";
      cardData.forEach((card) => card.remove());
      cardData = [];
      // setSharedCard(cardData);
    });
  };
  markerEvent("unclustered-point-coal");
  markerEvent("unclustered-point-wind");
  markerEvent("unclustered-point-solar");
  markerEvent("unclustered-point-hydro");
  markerEvent("unclustered-point-nuclear");
  markerEvent("unclustered-point-gas");

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );
  map.addControl(new mapboxgl.FullscreenControl());
}

// new mapboxgl.Popup({ className: "blabla" })
//   .setLngLat(coordinates)
//   .setHTML(
//     "Name: " +
//       name +
//       "<br>Fuel: " +
//       fuel +
//       "<br>Owner: " +
//       owner +
//       "<br>Commissioned in " +
//       commissioned
//   )
//   .addTo(map);
