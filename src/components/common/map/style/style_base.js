// INVERT COLORS:
// darkMode is currently set to false as colors are already inverted in main.css
// under "my-map"

const darkMode = false;

function padZero(str, len) {
  len = len || 2;
  const zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

function invertColor(colors) {
  const invertedColors = {};
  for (let key in colors) {
    const r = parseInt(colors[key].slice(0, 2), 16),
      g = parseInt(colors[key].slice(2, 4), 16),
      b = parseInt(colors[key].slice(4, 6), 16);
    // invert color components
    const ri = (255 - r).toString(16);
    const gi = (255 - g).toString(16);
    const bi = (255 - b).toString(16);
    // pad each with zeros and return
    invertedColors[key] = "#" + padZero(ri) + padZero(gi) + padZero(bi);
  }
  return invertedColors;
}

const colors = {
  background: "#F2F3F0",
  park: "#E6E9E5",
  water: "#C0C8CE",
  ice_shelf: "#FAFAFA",
  glacier: "#FAFAFA",
  land_residential: "#EAEAE6",
  landcover_wood: "#DCE2DC",
  waterway: "#BCC8D2",
  building_fill: "#EAEAE5",
  building_outline: "#DBDBDA",
  tunnel_motorway_casing: "#D5D5D5",
  tunnel_motorway_inner: "#EAEAEA",
  aeroway: "#E0E0E0",
  aeroway_runway_casing: "#E0E0E0",
  aeroway_area: "#FFFFFF",
  aeroway_runway: "#FFFFFF",
  highway_path: "#EAEAEA",
  highway_minor_casing: "#D4D4D4",
  highway_minor: "#EBEBEB",
  highway_major_casing: "#D5D5D5",
  highway_major_inner: "#FFFFFF",
  highway_major_subtle: "#D9D9D9",
  highway_motorway_casing: "#D5D5D5",
  highway_motorway_inner: "#D9D9D9",
  highway_motorway_inner2: "#FFFFFF",
  highway_motorway_subtle: "#D9D9D9",
  railway_transit: "#DDDDDD",
  railway_transit_dashline: "#FAFAFA",
  railway_service: "#DDDDDD",
  railway_service_dashline: "#FAFAFA",
  railway: "#C0C0C0",
  railway_dashline: "#FAFAFA",
  highway_motorway_bridge_casing: "#D5D5D5",
  highway_motorway_bridge_inner: "#D9D9D9",
  highway_motorway_bridge_inner2: "#FFFFFF",
  boundary_country: "#E6CCCF",
};

const colorMode = darkMode ? invertColor(colors) : colors;

const layers = [
  {
    id: "background",
    type: "background",
    paint: {
      "background-color": colorMode.background,
    },
  },
  {
    id: "park",
    type: "fill",
    source: "openmaptiles",
    "source-layer": "park",
    filter: ["==", "$type", "Polygon"],
    layout: {
      visibility: "visible",
    },
    paint: {
      "fill-color": colorMode.park,
    },
  },
  {
    id: "water",
    type: "fill",
    source: "openmaptiles",
    "source-layer": "water",
    filter: ["==", "$type", "Polygon"],
    layout: {
      visibility: "visible",
    },
    paint: {
      "fill-color": colorMode.water,
      "fill-antialias": true,
    },
  },
  {
    id: "landcover_ice_shelf",
    type: "fill",
    source: "openmaptiles",
    "source-layer": "landcover",
    maxzoom: 8,
    filter: [
      "all",
      ["==", "$type", "Polygon"],
      ["==", "subclass", "ice_shelf"],
    ],
    layout: {
      visibility: "visible",
    },
    paint: {
      "fill-color": colorMode.ice_shelf,
      "fill-opacity": 0.7,
    },
  },
  {
    id: "landcover_glacier",
    type: "fill",
    source: "openmaptiles",
    "source-layer": "landcover",
    maxzoom: 8,
    filter: ["all", ["==", "$type", "Polygon"], ["==", "subclass", "glacier"]],
    layout: {
      visibility: "visible",
    },
    paint: {
      "fill-color": colorMode.glacier,
      "fill-opacity": {
        base: 1,
        stops: [
          [0, 1],
          [8, 0.5],
        ],
      },
    },
  },
  {
    id: "landuse_residential",
    type: "fill",
    source: "openmaptiles",
    "source-layer": "landuse",
    maxzoom: 16,
    filter: ["all", ["==", "$type", "Polygon"], ["==", "class", "residential"]],
    layout: {
      visibility: "visible",
    },
    paint: {
      "fill-color": colorMode.land_residential,
      "fill-opacity": {
        base: 0.6,
        stops: [
          [8, 0.8],
          [9, 0.6],
        ],
      },
    },
  },
  {
    id: "landcover_wood",
    type: "fill",
    source: "openmaptiles",
    "source-layer": "landcover",
    minzoom: 10,
    filter: ["all", ["==", "$type", "Polygon"], ["==", "class", "wood"]],
    layout: {
      visibility: "visible",
    },
    paint: {
      "fill-color": colorMode.landcover_wood,
      "fill-opacity": {
        base: 1,
        stops: [
          [8, 0],
          [12, 1],
        ],
      },
    },
  },
  {
    id: "waterway",
    type: "line",
    source: "openmaptiles",
    "source-layer": "waterway",
    filter: ["==", "$type", "LineString"],
    layout: {
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.waterway,
    },
  },
  {
    id: "building",
    type: "fill",
    source: "openmaptiles",
    "source-layer": "building",
    minzoom: 12,
    paint: {
      "fill-color": colorMode.building_fill,
      "fill-outline-color": colorMode.building_outline,
      "fill-antialias": true,
    },
  },
  {
    id: "tunnel_motorway_casing",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 6,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "brunnel", "tunnel"], ["==", "class", "motorway"]],
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "miter",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.tunnel_motorway_casing,
      "line-width": {
        base: 1.4,
        stops: [
          [5.8, 0],
          [6, 3],
          [20, 40],
        ],
      },
      "line-opacity": 1,
    },
  },
  {
    id: "tunnel_motorway_inner",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 6,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "brunnel", "tunnel"], ["==", "class", "motorway"]],
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.tunnel_motorway_inner,
      "line-width": {
        base: 1.4,
        stops: [
          [4, 2],
          [6, 1.3],
          [20, 30],
        ],
      },
    },
  },
  {
    id: "aeroway-taxiway",
    type: "line",
    source: "openmaptiles",
    "source-layer": "aeroway",
    minzoom: 12,
    filter: ["all", ["in", "class", "taxiway"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.aeroway,
      "line-width": {
        base: 1.55,
        stops: [
          [13, 1.8],
          [20, 20],
        ],
      },
      "line-opacity": 1,
    },
  },
  {
    id: "aeroway-runway-casing",
    type: "line",
    source: "openmaptiles",
    "source-layer": "aeroway",
    minzoom: 11,
    filter: ["all", ["in", "class", "runway"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.aeroway_runway_casing,
      "line-width": {
        base: 1.5,
        stops: [
          [11, 6],
          [17, 55],
        ],
      },
      "line-opacity": 1,
    },
  },
  {
    id: "aeroway-area",
    type: "fill",
    source: "openmaptiles",
    "source-layer": "aeroway",
    minzoom: 4,
    filter: [
      "all",
      ["==", "$type", "Polygon"],
      ["in", "class", "runway", "taxiway"],
    ],
    layout: {
      visibility: "visible",
    },
    paint: {
      "fill-opacity": {
        base: 1,
        stops: [
          [13, 0],
          [14, 1],
        ],
      },
      "fill-color": colorMode.aeroway_area,
    },
  },
  {
    id: "aeroway-runway",
    type: "line",
    source: "openmaptiles",
    "source-layer": "aeroway",
    minzoom: 11,
    filter: ["all", ["in", "class", "runway"], ["==", "$type", "LineString"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.aeroway_runway,
      "line-width": {
        base: 1.5,
        stops: [
          [11, 4],
          [17, 50],
        ],
      },
      "line-opacity": 1,
    },
  },
  {
    id: "highway_path",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    filter: ["all", ["==", "$type", "LineString"], ["==", "class", "path"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.highway_path,
      "line-width": {
        base: 1.2,
        stops: [
          [13, 1],
          [20, 10],
        ],
      },
      "line-opacity": 0.9,
    },
  },
  {
    id: "highway_minor_casing",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 8,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["in", "class", "minor", "service", "track"],
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.highway_minor_casing,
      "line-width": {
        base: 1.3,
        stops: [
          [13, 1.9],
          [20, 21],
        ],
      },
    },
  },
  {
    id: "highway_minor",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 8,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["in", "class", "minor", "service", "track"],
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.highway_minor,
      "line-width": {
        base: 1.55,
        stops: [
          [13, 1.8],
          [20, 20],
        ],
      },
    },
  },
  {
    id: "highway_major_casing",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 11,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["in", "class", "primary", "secondary", "tertiary", "trunk"],
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "miter",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.highway_major_casing,
      "line-dasharray": [12, 0],
      "line-width": {
        base: 1.3,
        stops: [
          [10, 3],
          [20, 23],
        ],
      },
    },
  },
  {
    id: "highway_major_inner",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 11,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["in", "class", "primary", "secondary", "tertiary", "trunk"],
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.highway_major_inner,
      "line-width": {
        base: 1.3,
        stops: [
          [10, 2],
          [20, 20],
        ],
      },
    },
  },
  {
    id: "highway_major_subtle",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    maxzoom: 11,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["in", "class", "primary", "secondary", "tertiary", "trunk"],
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.highway_major_subtle,
      "line-width": 1,
    },
  },
  {
    id: "highway_motorway_casing",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 6,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
      ],
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "miter",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.highway_motorway_casing,
      "line-width": {
        base: 1.4,
        stops: [
          [5.8, 0],
          [6, 3],
          [20, 40],
        ],
      },
      "line-dasharray": [2, 0],
      "line-opacity": 1,
    },
  },
  {
    id: "highway_motorway_inner",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 6,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
      ],
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": {
        base: 1,
        stops: [
          [5.8, colorMode.highway_motorway_inner],
          [6, colorMode.highway_motorway_inner2],
        ],
      },
      "line-width": {
        base: 1.4,
        stops: [
          [4, 2],
          [6, 1.3],
          [20, 30],
        ],
      },
    },
  },
  {
    id: "highway_motorway_subtle",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    maxzoom: 6,
    filter: ["all", ["==", "$type", "LineString"], ["==", "class", "motorway"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.highway_motorway_subtle,
      "line-width": {
        base: 1,
        stops: [
          [4, 1],
          [6, 1.3],
        ],
      },
    },
  },
  {
    id: "railway_transit",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 16,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "class", "transit"], ["!in", "brunnel", "tunnel"]],
    ],
    layout: {
      visibility: "visible",
      "line-join": "round",
    },
    paint: {
      "line-color": colorMode.railway_transit,
      "line-width": 3,
    },
  },
  {
    id: "railway_transit_dashline",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 16,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "class", "transit"], ["!in", "brunnel", "tunnel"]],
    ],
    layout: {
      visibility: "visible",
      "line-join": "round",
    },
    paint: {
      "line-color": colorMode.railway_transit_dashline,
      "line-width": 2,
      "line-dasharray": [3, 3],
    },
  },
  {
    id: "railway_service",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 16,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "class", "rail"], ["has", "service"]],
    ],
    layout: {
      visibility: "visible",
      "line-join": "round",
    },
    paint: {
      "line-color": colorMode.railway_service,
      "line-width": 3,
    },
  },
  {
    id: "railway_service_dashline",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 16,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["==", "class", "rail"],
      ["has", "service"],
    ],
    layout: {
      visibility: "visible",
      "line-join": "round",
    },
    paint: {
      "line-color": colorMode.railway_service_dashline,
      "line-width": 2,
      "line-dasharray": [3, 3],
    },
  },
  {
    id: "railway",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 7,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["!has", "service"], ["==", "class", "rail"]],
    ],
    layout: {
      visibility: "visible",
      "line-join": "round",
    },
    paint: {
      "line-color": colorMode.railway,
      "line-width": {
        base: 1.3,
        stops: [
          [9, 1],
          [20, 7],
        ],
      },
    },
  },
  {
    id: "railway_dashline",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 11,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["!has", "service"], ["==", "class", "rail"]],
    ],
    layout: {
      visibility: "visible",
      "line-join": "round",
    },
    paint: {
      "line-color": colorMode.railway_dashline,
      "line-width": {
        base: 1.3,
        stops: [
          [11, 1],
          [20, 6],
        ],
      },
      "line-dasharray": [3, 3],
    },
  },
  {
    id: "highway_motorway_bridge_casing",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 6,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "brunnel", "bridge"], ["==", "class", "motorway"]],
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "miter",
      visibility: "visible",
    },
    paint: {
      "line-color": colorMode.highway_motorway_bridge_casing,
      "line-width": {
        base: 1.4,
        stops: [
          [5.8, 0],
          [6, 5],
          [20, 45],
        ],
      },
      "line-dasharray": [2, 0],
      "line-opacity": 1,
    },
  },
  {
    id: "highway_motorway_bridge_inner",
    type: "line",
    source: "openmaptiles",
    "source-layer": "transportation",
    minzoom: 6,
    filter: [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "brunnel", "bridge"], ["==", "class", "motorway"]],
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
      visibility: "visible",
    },
    paint: {
      "line-color": {
        base: 1,
        stops: [
          [5.8, colorMode.highway_motorway_bridge_inner],
          [6, colorMode.highway_motorway_bridge_inner2],
        ],
      },
      "line-width": {
        base: 1.4,
        stops: [
          [4, 2],
          [6, 1.3],
          [20, 30],
        ],
      },
    },
  },
  {
    id: "boundary_country",
    type: "line",
    source: "openmaptiles",
    "source-layer": "boundary",
    filter: ["==", "admin_level", 2],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": colorMode.boundary_country,
      "line-width": {
        base: 1.1,
        stops: [
          [3, 1],
          [22, 20],
        ],
      },
      "line-blur": {
        base: 1,
        stops: [
          [0, 0.4],
          [22, 4],
        ],
      },
      "line-dasharray": [4, 4],
    },
  },
];

export default layers;
