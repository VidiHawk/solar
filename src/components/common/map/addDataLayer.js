export function addDataLayer(map, data) {
  if (!map.getSource("power-generator")) {
    map.addSource("power-generator", {
      type: "geojson",
      data: data,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
      clusterProperties: {
        sum: ["+", ["get", "capacity_mw"]],
      },
    });
  } else {
    map.getSource("power-generator").setData(data);
  }
  const hasPoint = ["has", "point_count"];
  const noPoint = ["!", ["has", "point_count"]];
  const wind = ["==", ["get", "primary_fuel"], "Wind"];

  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "power-generator",
    filter: ["all", hasPoint],
    paint: {
      "circle-color": "rgb(231, 76, 60)",
      "circle-radius": ["step", ["get", "point_count"], 15, 100, 30, 750, 40],
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: "power-generator",
    filter: ["all", hasPoint],
    layout: {
      "text-field": ["get", "point_count_abbreviated"],
      "text-font": ["Open Sans Bold"],
      "text-size": 12,
    },
    paint: {
      "text-color": "white",
    },
  });

  map.addLayer({
    id: "unclustered-point",
    type: "circle",
    source: "power-generator",
    filter: ["all", noPoint],
    paint: {
      "circle-radius": ["step", ["get", "capacity_mw"], 15, 100, 30, 500, 40],
      "circle-color": "rgb(231, 76, 60)",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "capacity-mw",
    type: "symbol",
    source: "power-generator",
    filter: ["all", noPoint],
    layout: {
      "text-field": "{capacity_mw}",
      "text-font": ["Open Sans Bold"],
      "text-size": 16,
    },
    paint: {
      "text-color": "white",
    },
  });
}
