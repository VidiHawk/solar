/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react-hooks/rules-of-hooks */
import Pagination from "../common/blog/Pagination";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import ShowFilter from "../common/listing/ShowFilter";
import SidebarListing2 from "../common/listing/SidebarListing2";
import PopupSignInUp from "../common/PopupSignInUp";
import FeaturedItem from "./FeaturedItem";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Head from "next/head";
import Map from "../common/map/Map";

const index = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [sharedCard, setSharedCard] = useState({});
  const [selectedMarker, setSelectedMarker] = useState({});

  //THE FOLLOWING IS FOR THE CARD APPEARING ON FEATURED ITEMS
  // const coordinates = sharedCard[0] ? sharedCard[0][0] : "this";
  // const capacity = sharedCard[0] ? sharedCard[0][1]["capacity"] : undefined;
  // const fuel = sharedCard[0] ? sharedCard[0][1]["fuel"] : undefined;
  // const name = sharedCard[0] ? sharedCard[0][1]["name"] : undefined;
  // const owner = sharedCard[0] ? sharedCard[0][1]["owner"] : undefined;
  // const commissioned = sharedCard[0]
  //   ? sharedCard[0][1]["commissioned"]
  //   : undefined;
  // const image = sharedCard[0] ? sharedCard[0][1]["image"] : undefined;
  // const cardStyle = sharedCard[0]
  //   ? "project-wrap card-open"
  //   : "project-wrap card-close";

  // $.getJSON("delete.json", function (json) {
  //   console.log(JSON.stringify(json)); // this will show the info it in firebug console
  // });

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
              {/* <!-- Map Card --> */}
              {/* <div className="map-card">
                <div className={cardStyle}>
                  <div className="project-content">
                    <div className="project-img">
                      <img src={image} />
                    </div>
                    <h3 className="project-title">
                      {capacity} MW {name}
                    </h3>
                    <p className="project-address">Owner: {owner}</p>
                    <p className="project-telephone">Year: {commissioned}</p>
                  </div>
                </div>
              </div> */}
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
                      {/* <link
                        href="https://api.mapbox.com/mapbox-gl-js/v2.11.1/mapbox-gl.css"
                        rel="stylesheet"
                      /> */}
                      {/* <link
                        rel="stylesheet"
                        type="text/css"
                        href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
                      /> */}
                      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> */}
                      {/* <script
                        type="text/javascript"
                        src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
                      ></script> */}
                    </Head>
                    <Map />
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xxl-5 col-xl-6 ">
              <div className="half_map_area_content mt30">
                {/* <div className="listing_list_style listing-map-style m0 mb20">
                  <GridListButton />
                </div> */}
                {/* GridListButton */}

                <div className="col-md-12">
                  {/* End .row */}

                  <div className="row">
                    <FeaturedItem data={selectedMarker} />
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
