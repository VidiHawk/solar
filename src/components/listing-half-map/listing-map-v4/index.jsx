/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react-hooks/rules-of-hooks */
import Pagination from "../../common/blog/Pagination";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar2 from "../../common/listing/FilterTopBar2";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing2 from "../../common/listing/SidebarListing2";
import PopupSignInUp from "../../common/PopupSignInUp";
import FeaturedItem from "./FeaturedItem";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Script from "next/script";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import useSupercluster from "use-supercluster";
import useSwr from "swr"; // excellent API fetching library
// import generatorData from "./global_power_plant_database.json";
import generatorData from "./global.json";
import dynamic from "next/dynamic";
import Head from "next/head";
import { addDataLayer } from "../../common/map/addDataLayer";
import { initializeMap } from "../../common/map/initializeMap";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

const index = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/thefabster/cl7qbppp0003l15o6drhio03h",
      center: [-6.235, 53.342],
      zoom: 5,
    });

    initializeMap(mapboxgl, map);
    setMap(map);
  }, []);

  useEffect(() => {
    if (pageIsMounted && generatorData) {
      Map.on("load", function () {
        addDataLayer(Map, generatorData);
      });
      // for (const feature of generatorData.features) {
      //   // create a HTML element for each feature
      //   const el = document.createElement("div");
      //   el.className = "generator-marker";

      //   new mapboxgl.Marker(el)
      //     .setLngLat(feature.geometry.coordinates)
      //     .addTo(Map);
      // }
    }
  }, [pageIsMounted, setMap, generatorData, Map]);

  // useEffect(() => {
  //   // get the users current location on initial session
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoordinates({ lat: latitude, lng: longitude });
  //     }
  //   );
  // }, []);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Grid View --> */}
      <section
        id="feature-property"
        className="our-listing our-listing_map2 bgc-f7 pt0 pb0  mt85 md-mt0"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sidebar_switch mobile_style dn db-991 mt30 mb0">
                {" "}
                <ShowFilter />
              </div>

              {/* sidebar switch */}

              <div
                className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                tabIndex="-1"
                id="sidebarListing"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Advanced Search</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End .offcanvas-heade */}

                <div className="offcanvas-body">
                  <SidebarListing2 />
                </div>
              </div>
              {/* End mobile sidebar listing  */}
            </div>
            {/* End .col */}

            <div className="col-xxl-7 col-xl-6 p0 position-relative">
              <div className="sidebar_switch style2 text-right dn-991 visible-filter filter-let-top">
                <ShowFilter />
              </div>
              {/* filter switch */}

              <div className="home_two_map style2 half_map_area">
                <div className="">
                  <div className="map_canvas half_style">
                    <Head>
                      {/* <link rel="icon" href="/favicon.ico" /> */}
                      <link
                        href="https://api.mapbox.com/mapbox-gl-js/v2.11.1/mapbox-gl.css"
                        rel="stylesheet"
                      />
                    </Head>
                    <main className="map-canvas">
                      {/* <div id="my-map" style={{ height: 500, width: 500 }} /> */}
                      <div id="my-map" style={{ height: 600, width: 650 }} />
                    </main>
                  </div>
                  {/* <ReactMapGL
                    {...viewport}
                    maxZoom={20}
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/thefabster/cl7qbppp0003l15o6drhio03h"
                    onViewportChange={(newViewport) => {
                      setViewport({ ...newViewport });
                    }}
                    attributionControl={false}
                    center={coordinates}
                    ref={mapRef}
                  >
                    {clusters.map((cluster) => {
                      const [longitude, latitude] =
                        cluster.geometry.coordinates;
                      const { cluster: isCluster, point_count: pointCount } =
                        cluster.properties;

                      if (isCluster) {
                        return (
                          <Marker
                            key={`cluster-${cluster.id}`}
                            latitude={latitude}
                            longitude={longitude}
                          >
                            <div
                              className="cluster-marker"
                              style={{
                                width: `${
                                  10 + (pointCount / points.length) * 20
                                }px`,
                                height: `${
                                  10 + (pointCount / points.length) * 20
                                }px`,
                              }}
                              onClick={() => {
                                const expansionZoom = Math.min(
                                  supercluster.getClusterExpansionZoom(
                                    cluster.id
                                  ),
                                  20
                                );

                                setViewport({
                                  ...viewport,
                                  latitude,
                                  longitude,
                                  zoom: expansionZoom,
                                  transitionInterpolator: new FlyToInterpolator(
                                    {
                                      speed: 2,
                                    }
                                  ),
                                  transitionDuration: "auto",
                                });
                              }}
                            >
                              {pointCount}
                            </div>
                          </Marker>
                        );
                      }

                      return (
                        <Marker
                          key={`crime-${cluster.properties.crimeId}`}
                          latitude={latitude}
                          longitude={longitude}
                        >
                          <button className="generator-marker">
                            <img
                              src="/assets/images/energy-icon.svg"
                              alt="generator location"
                            />
                          </button>
                        </Marker>
                      );
                    })}
                  </ReactMapGL> */}
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xxl-5 col-xl-6 ">
              <div className="half_map_area_content mt30">
                <div className="listing_list_style listing-map-style m0 mb20">
                  <GridListButton />
                </div>
                {/* GridListButton */}

                <div className="col-md-12">
                  <div className="grid_list_search_result ">
                    <div className="row align-items-center">
                      <FilterTopBar2 />
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row">
                    <FeaturedItem />
                  </div>
                  {/* End .row */}

                  <div className="row">
                    <div className="col-lg-12 mt20">
                      <div className="mbp_pagination">
                        <Pagination />
                      </div>
                    </div>
                    {/* End paginaion .col */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End  page conent */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
