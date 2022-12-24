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
import generatorData from "./testData.json";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const index = () => {
  const [coordinates, setCoordinates] = useState({ lat: 53.342, lng: -6.235 });
  const [zoom, setZoom] = useState(10);
  const [viewport, setViewport] = useState({
    latitude: 52.6376,
    longitude: -1.135171,
    // width: "100vw",
    // height: "100vh",
    zoom: zoom,
  });
  const [bounds, setBounds] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    // get the users current location on initial session
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // const Marker = ({ children }) => children;

  // const url =
  //   "https://data.police.uk/api/crimes-street/all-crime?poly=52.268,0.543:52.794,0.238:52.130,0.478&date=2020-01";
  // const { data, error } = useSwr(url, { fetcher });
  // const newData = data && !error ? data.slice(0, 2000) : [];
  // console.log("data: ", newData);

  // const points = newData.map((generator) => ({
  //   type: "Feature",
  //   properties: {
  //     cluster: false,
  //     generatorID: generator.crime.id,
  //     category: generator.crime.category,
  //   },
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       parseFloat(generator.location.longitude),
  //       parseFloat(generator.location.latitude),
  //     ],
  //   },
  // }));
  const points = generatorData.map((generator) => ({
    type: "Feature",
    properties: {
      cluster: false,
      generatorID: generator.gppd_idnr,
      category: generator.primary_fuel,
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(generator.longitude),
        parseFloat(generator.latitude),
      ],
    },
  }));

  // const bounds = mapRef.current
  //   ? mapRef.current.getMap().getBounds().toArray().flat()
  //   : null;

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  // const [highlightedHotel, setHighlightedHotel] = useState(null);

  // const onMarkerClick = useCallback(
  //   (points) => {
  //     if (highlightedHotel === points) {
  //       setHighlightedHotel(null);
  //     } else {
  //       setHighlightedHotel(points);
  //     }
  //   },
  //   [highlightedHotel]
  // );

  // const Looper = (points) => {
  //   console.log("hello");
  //   for (let i = 0; i < points.length; i++) {
  //     let obj = points[i];

  //     console.log(points);
  //   }
  // };

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

            <div className="col-xxl-7 col-xl-6  p0 position-relative">
              <div className="sidebar_switch style2 text-right dn-991 visible-filter filter-let-top">
                <ShowFilter />
              </div>
              {/* filter switch */}

              <div className="home_two_map style2 half_map_area">
                <div className="map_canvas map-canvas half_style">
                  <ReactMapGL
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
                  </ReactMapGL>

                  {/* <GoogleMapReact
                    bootstrapURLKeys={{ key: MY_API_KEY }}
                    // defaultCenter={{ lat: 53.342, lng: -6.235 }}
                    center={coordinates}
                    defaultZoom={10}
                    options={{ mapId: "58887c3f87185bbb" }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map }) => {
                      mapRef.current = map;
                    }}
                    onChange={({ zoom, bounds }) => {
                      setZoom(zoom);
                      setBounds([
                        bounds.nw.lng,
                        bounds.se.lat,
                        bounds.se.lng,
                        bounds.nw.lat,
                      ]);
                    }}
                    // onIdle={onIdle}
                    // onMarkerClick={onMarkerClick}
                    markers={points}
                    onMarkerClick={Looper}
                    // highlightedMarkerId={highlightedHotel?.hotelId}
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
                            lat={latitude}
                            lng={longitude}
                          >
                            <div
                              className={"cluster-marker"}
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
                                mapRef.current.setZoom(expansionZoom);
                                mapRef.current.panTo({
                                  lat: latitude,
                                  lng: longitude,
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
                          key={`generator-${cluster.properties.generatorID}`}
                          lat={latitude}
                          lng={longitude}
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
                  </GoogleMapReact> */}
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