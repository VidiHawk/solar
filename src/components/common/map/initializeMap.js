import customCard from "./customCardJquery";
import getCardData from "./cardData";

export function initializeMap(mapboxgl, map, setSharedCard) {
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

  const markerEvent = (id) => {
    // const cardData = [];

    map.on("click", id, function (e) {
      // const [coordinates, customPop] = [getCoordinates(e), customCard(e)];
      // const card = new mapboxgl.Marker(customPop[0]).setLngLat([
      //   coordinates[0],
      //   coordinates[1] - 0.3,
      // ]);
      // card.addTo(map);
      // cardData.push(card);
    });

    map.on("mouseenter", id, function (e) {
      map.getCanvas().style.cursor = "pointer";
      // const [coordinates, customPop] = [getCoordinates(e), customCard(e)];
      const coordinates = getCoordinates(e);
      // const card = new mapboxgl.Marker(customPop[0]).setLngLat([
      //   coordinates[0],
      //   coordinates[1] - 0.1,
      // ]);
      // card.addTo(map);
      // cardData.push(card);
      cardData.push([coordinates, getCardData(e)]);
      setSharedCard(cardData);
    });

    map.on("mouseleave", id, function (e) {
      map.getCanvas().style.cursor = "";
      // cardData.forEach((card) => card.remove());
      cardData = [];
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
