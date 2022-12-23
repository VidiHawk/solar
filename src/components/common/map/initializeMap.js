// import { motion } from "framer-motion";

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

  map.on("click", "unclustered-point", function (e) {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const fuel = e.features[0].properties.primary_fuel;
    const name = e.features[0].properties.name;
    const owner = e.features[0].properties.owner;
    const commissioned = e.features[0].properties.commissioning_year;
    // if (e.features[0].properties.name === 1) {
    //   name = "yes";
    // } else {
    //   name = "no";
    // }
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(
        "Name: " +
          name +
          "<br>Fuel: " +
          fuel +
          "<br>Owner: " +
          owner +
          "<br>Commissioned in " +
          commissioned
      )
      .addTo(map);
  });

  map.on("mouseenter", "unclustered-point", function () {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "unclustered-point", function () {
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
