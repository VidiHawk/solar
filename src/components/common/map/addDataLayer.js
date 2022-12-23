import $ from "jquery";
// import "slick-carousel";
import Card from "./Card";

export function addDataLayer(map, data, mapboxgl) {
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

  const marker = $(`
    <div class="marker-wrapper">
    <div class="custommarker"></div>
    <div class="office-wrap">
      <div class="office-slider">
        <div class="office-slide">
          <div class="office-img">
            <img src="assets/images/generators/american-public-power-association-513dBrMJ_5w-unsplash.jpg" />
          </div>
          <div class="office-content">
            <h3 class="office-title">15 MW  Hartford Power</h3>
            <p class="office-address">
              <i class="fa-solid fa-location-dot"></i> Wexford road,
              County Wicklow, Ireland
            </p>
            <p class="office-telephone">
              <i class="fa-solid fa-phone"></i> Solar
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `);

  marker.find(".custommarker").click(function () {
    $(this).parent().toggleClass("open");
  });
  marker.find(".close").click(function () {
    $(this).closest(".marker-wrapper").removeClass("open");
  });
  new mapboxgl.Marker(marker[0]).setLngLat([-6.235, 53.342]).addTo(map);

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

<div class="marker-wrapper">
  <div class="custommarker"></div>
  <div class="office-wrap">
    <div class="office-slider">
      <div class="office-slide">
        <div class="office-img">
          <img src="./images/office-2.jpg" />
        </div>
        <div class="office-content">
          <span class="pagination">1/3</span>
          <h3 class="office-title">Hartford</h3>
          <p class="office-address">
            <i class="fa-solid fa-location-dot"></i> 4749 Meadow View Drive,
            Hartford, Connecticut, 06103
          </p>
          <p class="office-telephone">
            <i class="fa-solid fa-phone"></i> 860-517-1646
          </p>
        </div>
      </div>
      <div class="office-slide">
        <div class="office-img">
          <img src="./images/office-4.jpg" />
        </div>
        <div class="office-content">
          <span class="pagination">2/3</span>
          <h3 class="office-title">Bridgeport</h3>
          <p class="office-address">
            <i class="fa-solid fa-location-dot"></i> 4210 Colony Street,
            Connecticut, 06604
          </p>
          <p class="office-telephone">
            <i class="fa-solid fa-phone"></i> 203-334-1323
          </p>
        </div>
      </div>
      <div class="office-slide">
        <div class="office-img">
          <img src="./images/office-1.jpg" />
        </div>
        <div class="office-content">
          <span class="pagination">3/3</span>
          <h3 class="office-title">Stamford</h3>
          <p class="office-address">
            <i class="fa-solid fa-location-dot"></i> 4206 Whitman Court,
            Stamford, Connecticut, 06995
          </p>
          <p class="office-telephone">
            <i class="fa-solid fa-phone"></i> 203-638-2939
          </p>
        </div>
      </div>
    </div>
    <div class="button-wrap">
      <button class="close">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <button class="prev">
        <i class="fa-solid fa-arrow-left-long"></i>
      </button>
      <button class="next">
        <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  </div>
</div>;
