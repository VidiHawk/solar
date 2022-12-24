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
      clusterRadius: 40,
      clusterProperties: {
        sum: ["+", ["get", "capacity_mw"]],
      },
    });
  } else {
    map.getSource("power-generator").setData(data);
  }

  // const marker = $(`
  //   <div class="marker-wrapper">
  //   <div class="custommarker">
  //     <p class="marker-text"> 12 MW </>
  //   </div>
  //   <div class="project-wrap">

  //     <div class="project-content">
  //       <div class="project-img">
  //         <img src="assets/images/generators/american-public-power-association-513dBrMJ_5w-unsplash.jpg" />
  //       </div>
  //       <h3 class="project-title">15 MW  Hartford Power</h3>
  //       <p class="project-address">
  //         <i class="fa-solid fa-location-dot"></i> Wexford road,
  //         County Wicklow, Ireland
  //       </p>
  //       <p class="project-telephone">
  //         </i> Solar
  //       </p>
  //     </div>
  //   </div>
  // </div>
  //   `);

  // marker.find(".custommarker").click(function () {
  //   $(this).parent().toggleClass("open");
  // });
  // marker.find(".close").click(function () {
  //   $(this).closest(".marker-wrapper").removeClass("open");
  // });
  // new mapboxgl.Marker(marker[0]).setLngLat([-6.235, 53.342]).addTo(map);

  const hasPoint = ["has", "point_count"];
  const noPoint = ["!", ["has", "point_count"]];
  const wind = ["==", ["get", "primary_fuel"], "Wind"];
  const coal = ["==", ["get", "primary_fuel"], "Coal"];

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
    filter: ["all", noPoint, wind],
    paint: {
      "circle-radius": ["step", ["get", "capacity_mw"], 15, 100, 30, 500, 40],
      "circle-color": "#0096ff",
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
    filter: ["all", noPoint, wind],
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
    filter: ["all", noPoint, coal],
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
    id: "capacity-mw-coal",
    type: "symbol",
    source: "power-generator",
    filter: ["all", noPoint, coal],
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

<div class="marker-wrapper">
  <div class="custommarker"></div>
  <div class="project-wrap">
    <div class="office-slider">
      <div class="office-slide">
        <div class="project-img">
          <img src="./images/office-2.jpg" />
        </div>
        <div class="project-content">
          <span class="pagination">1/3</span>
          <h3 class="project-title">Hartford</h3>
          <p class="project-address">
            <i class="fa-solid fa-location-dot"></i> 4749 Meadow View Drive,
            Hartford, Connecticut, 06103
          </p>
          <p class="project-telephone">
            <i class="fa-solid fa-phone"></i> 860-517-1646
          </p>
        </div>
      </div>
      <div class="office-slide">
        <div class="project-img">
          <img src="./images/office-4.jpg" />
        </div>
        <div class="project-content">
          <span class="pagination">2/3</span>
          <h3 class="project-title">Bridgeport</h3>
          <p class="project-address">
            <i class="fa-solid fa-location-dot"></i> 4210 Colony Street,
            Connecticut, 06604
          </p>
          <p class="project-telephone">
            <i class="fa-solid fa-phone"></i> 203-334-1323
          </p>
        </div>
      </div>
      <div class="office-slide">
        <div class="project-img">
          <img src="./images/office-1.jpg" />
        </div>
        <div class="project-content">
          <span class="pagination">3/3</span>
          <h3 class="project-title">Stamford</h3>
          <p class="project-address">
            <i class="fa-solid fa-location-dot"></i> 4206 Whitman Court,
            Stamford, Connecticut, 06995
          </p>
          <p class="project-telephone">
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
