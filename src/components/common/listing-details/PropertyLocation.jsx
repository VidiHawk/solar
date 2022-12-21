/* eslint-disable @next/next/no-img-element */
const PropertyLocation = () => {
  return (
    <>
      <div className="thumb">
        <div className="h400" id="map-canvas">
          <div className="gmap_canvas ">
            <iframe
              title="map"
              className="gmap_iframe"
              src="https://www.google.com/maps/d/u/0/embed?mid=1KHmd4zKHCqzWHLlfXdcqOTfHYzhasdo&ehbc=2E312F"
            ></iframe>
          </div>
        </div>
        <div className="overlay_icon">
          <a href="#">
            <img
              className="map_img_icon"
              src="/assets/images/header-logo.png"
              alt="header-logo.png"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default PropertyLocation;
