import $ from "jquery";

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

  const customPop = $(`
  <div class="project-wrap">
    <div class="project-content">
      <div class="project-img">
        <img src="assets/images/generators/american-public-power-association-513dBrMJ_5w-unsplash.jpg" />
      </div>
      <h3 class="project-title">15 MW  Hartford Power</h3>
      <p class="project-address">
        <i class="fa-solid fa-location-dot"></i> Wexford road,
        County Wicklow, Ireland
      </p>
      <p class="project-telephone">
        </i> Solar
      </p>
    </div>
  </div>

  `);

  map.on("click", "unclustered-point-wind", function (e) {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const fuel = e.features[0].properties.primary_fuel;
    const name = e.features[0].properties.name;
    const owner = e.features[0].properties.owner;
    const commissioned = e.features[0].properties.commissioning_year;
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // customPop.find(".custommarker").click(function () {
    //   $(this).parent().toggleClass("open");
    // });
    // customPop.find(".close").click(function () {
    //   $(this).closest(".marker-wrapper").removeClass("open");
    // });
    new mapboxgl.Marker(customPop[0])
      .setLngLat([coordinates[0] + 2.2, coordinates[1] - 1])
      .addTo(map);

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

{
  /* <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1, transition: { delay: Math.random() * 0.3 } }}
exit={{ opacity: 0 }}
transition={{
  type: "spring",
  stiffness: 400,
  damping: 20,
}}
>
<button
  className={`rounded-full bg-zinc-600 py-1.5 px-2 drop-shadow text-xs text-white ${
    highlight && "text-black bg-zinc-50 font-bold py-2 px-2.5"
  }`}
  onClick={handleClick}
>{`$ ${price}`}</button>
</motion.div>  */
}
