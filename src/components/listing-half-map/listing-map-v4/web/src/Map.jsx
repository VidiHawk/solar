import React, { useRef, useEffect, useState } from "react";
// import { mount } from "redom";

import LayerSwitcher from "./components/LayerSwitcher";
import URLHash from "./components/urlhash";

import EditButton from "./editbutton.js";
import InfoBox from "./infobox.js";
import InfoPopup from "./infopopup.js";
import KeyControl from "./key/key.js";

import maplibregl from "maplibre-gl";
import map_style from "./style/style.json";
import style_base from "./style/style_base.js";
import style_labels from "./style/style_labels.js";
import style_oim_power from "./style/style_oim_power.js";
import style_oim_power_heatmap from "./style/style_oim_power_heatmap.js";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [center] = useState([12, 26]);
  const [minZoom] = useState(2);
  const [maxZoom] = useState(17.9);

  // if (!maplibregl.supported({ failIfMajorPerformanceCaveat: true })) {
  //   const infobox = new InfoBox("Warning");
  //   infobox.update(
  //     "Your browser may have performance or functionality issues with OpenInfraMap.<br/>" +
  //       '<a href="http://webglreport.com">WebGL</a> with hardware acceleration is required for this site ' +
  //       "to perform well."
  //   );
  //   mount(document.body, infobox);
  // }

  const oim_layers = style_oim_power.concat(style_oim_power_heatmap);

  oim_layers.sort((a, b) => {
    if (a["zorder"] < b["zorder"]) return -1;
    if (a["zorder"] > b["zorder"]) return 1;
    return 0;
  });

  const layers = {
    Power: "power_",
    "Solar Generation": "heatmap_",
    Labels: "place_",
  };
  const layers_enabled = ["Power", "Labels"];
  const layer_switcher = new LayerSwitcher(layers, layers_enabled);
  const url_hash = new URLHash(layer_switcher);
  layer_switcher.urlhash = url_hash;

  map_style.layers = style_base.concat(oim_layers, style_labels);

  layer_switcher.setInitialVisibility(map_style);

  // map_style["sprite"] = "http://localhost:8080/style/sprite";

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once

    maplibregl.setRTLTextPlugin(
      "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
      null,
      true // Lazy load the plugin
    );

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: map_style,
      minZoom: minZoom,
      maxZoom: maxZoom,
      center: center,
    });

    map.current.dragRotate.disable();
    map.current.touchZoomRotate.disableRotation();

    url_hash.enable(map.current);
    map.current.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right"
    );
    map.current.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    map.current.addControl(
      new maplibregl.ScaleControl({ position: "bottom-left" })
    );
    map.current.addControl(new KeyControl(), "top-right");
    map.current.addControl(layer_switcher, "top-right");
    map.current.addControl(new EditButton(), "bottom-right");
    map.current.addControl(new maplibregl.FullscreenControl());
    new InfoPopup(
      oim_layers.map((layer) => layer["id"]),
      9
    ).add(map.current);
  });

  // useEffect(() => {
  //   // get the users current location on initial session
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoordinates({ lat: latitude, lng: longitude });
  //     }
  //   );
  // }, []);

  return (
    <div className="map-canvas">
      <div
        ref={mapContainer}
        className="my-map"
        style={{ height: 600, width: 650 }}
      />
    </div>
  );
}
