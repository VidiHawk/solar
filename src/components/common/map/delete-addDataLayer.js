import powerLayer from "./style_power";

export function addDataLayer(map, data, mapboxgl) {
  if (!map.getSource("power-generator")) {
    map.addSource("power-generator", {
      type: "geojson",
      data: data,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 40,
      clusterProperties: {
        sum: ["+", ["get", "capacity_mw"]],
      },
    });
  } else {
    map.getSource("power-generator").setData(data);
  }

  const hasPoint = ["has", "point_count"];
  const noPoint = ["!", ["has", "point_count"]];
  const windFilter = ["==", ["get", "primary_fuel"], "Wind"];
  const coalFilter = ["==", ["get", "primary_fuel"], "Coal"];
  const solarFilter = ["==", ["get", "primary_fuel"], "Solar"];
  const nuclearFilter = ["==", ["get", "primary_fuel"], "Nuclear"];
  const hydroFilter = ["==", ["get", "primary_fuel"], "Hydro"];
  const gasFilter = ["==", ["get", "primary_fuel"], "Gas"];

  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "power-generator",
    filter: ["all", hasPoint],
    paint: {
      "circle-color": "#101010",
      // "circle-radius": ["step", ["get", "point_count"], 15, 100, 30, 750, 40],
      "circle-radius": 15,
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
      "text-color": "#fff",
    },
  });

  map.addLayer({
    id: "unclustered-point-wind",
    type: "circle",
    source: "power-generator",
    filter: ["all", noPoint, windFilter],
    paint: {
      "circle-radius": ["step", ["get", "capacity_mw"], 15, 100, 30, 500, 40],
      "circle-color": "#01befa",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "capacity-mw-wind",
    type: "symbol",
    source: "power-generator",
    filter: ["all", noPoint, windFilter],
    layout: {
      "text-field": "{capacity_mw} MW",
      "text-font": ["Open Sans Bold"],
      "text-size": 12,
    },
    paint: {
      "text-color": "white",
    },
  });

  map.addLayer({
    id: "unclustered-point-coal",
    type: "circle",
    source: "power-generator",
    filter: ["all", noPoint, coalFilter],
    paint: {
      "circle-radius": ["step", ["get", "capacity_mw"], 15, 100, 30, 500, 40],
      "circle-color": "#964B00",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "capacity-mw-coal",
    type: "symbol",
    source: "power-generator",
    filter: ["all", noPoint, coalFilter],
    layout: {
      "text-field": "{capacity_mw} MW",
      "text-font": ["Open Sans Bold"],
      "text-size": 12,
    },
    paint: {
      "text-color": "white",
    },
  });

  map.addLayer({
    id: "unclustered-point-solar",
    type: "circle",
    source: "power-generator",
    filter: ["all", noPoint, solarFilter],
    paint: {
      "circle-radius": ["step", ["get", "capacity_mw"], 15, 100, 30, 500, 40],
      "circle-color": "#fadf01",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "capacity-mw-solar",
    type: "symbol",
    source: "power-generator",
    filter: ["all", noPoint, solarFilter],
    layout: {
      "text-field": "{capacity_mw} MW",
      "text-font": ["Open Sans Bold"],
      "text-size": 12,
    },
    paint: {
      "text-color": "white",
    },
  });

  map.addLayer({
    id: "unclustered-point-nuclear",
    type: "circle",
    source: "power-generator",
    filter: ["all", noPoint, nuclearFilter],
    paint: {
      "circle-radius": ["step", ["get", "capacity_mw"], 15, 100, 30, 500, 40],
      "circle-color": "#98fa01",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "capacity-mw-nuclear",
    type: "symbol",
    source: "power-generator",
    filter: ["all", noPoint, nuclearFilter],
    layout: {
      "text-field": "{capacity_mw} MW",
      "text-font": ["Open Sans Bold"],
      "text-size": 12,
    },
    paint: {
      "text-color": "white",
    },
  });

  map.addLayer({
    id: "unclustered-point-hydro",
    type: "circle",
    source: "power-generator",
    filter: ["all", noPoint, hydroFilter],
    paint: {
      "circle-radius": ["step", ["get", "capacity_mw"], 15, 100, 30, 500, 40],
      "circle-color": "#0110fa",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "capacity-mw-hydro",
    type: "symbol",
    source: "power-generator",
    filter: ["all", noPoint, hydroFilter],
    layout: {
      "text-field": "{capacity_mw} MW",
      "text-font": ["Open Sans Bold"],
      "text-size": 12,
    },
    paint: {
      "text-color": "white",
    },
  });

  map.addLayer({
    id: "unclustered-point-gas",
    type: "circle",
    source: "power-generator",
    filter: ["all", noPoint, gasFilter],
    paint: {
      "circle-radius": ["step", ["get", "capacity_mw"], 15, 100, 30, 500, 40],
      "circle-color": "#6e01fa",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "capacity-mw-gas",
    type: "symbol",
    source: "power-generator",
    filter: ["all", noPoint, gasFilter],
    layout: {
      "text-field": "{capacity_mw} MW",
      "text-font": ["Open Sans Bold"],
      "text-size": 12,
    },
    paint: {
      "text-color": "white",
    },
  });
}
