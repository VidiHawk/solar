import customCard from "./Card";

export function initializeMap(mapboxgl, map) {
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

  // const bla = 20;

  // const customPop = $(`
  // <div class="project-wrap">
  //   <div class="project-content">
  //     <div class="project-img">
  //       <img src="assets/images/generators/american-public-power-association-513dBrMJ_5w-unsplash.jpg" />
  //     </div>
  //     <h3 class="project-title">${bla} MW  Hartford Power</h3>
  //     <p class="project-address">
  //       <i class="fa-solid fa-location-dot"></i> Wexford road,
  //       County Wicklow, Ireland
  //     </p>
  //     <p class="project-telephone">
  //       </i> Solar
  //     </p>
  //   </div>
  // </div>
  // `);

  map.on("click", "unclustered-point-wind", function (e) {
    const coordinates = e.features[0].geometry.coordinates.slice();
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    const customPop = customCard(e);

    new mapboxgl.Marker(customPop[0])
      .setLngLat([coordinates[0] + 2.2, coordinates[1] - 1])
      .addTo(map);
  });

  map.on("mouseenter", "unclustered-point-wind", function () {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "unclustered-point-wind", function () {
    map.getCanvas().style.cursor = "";
  });

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
