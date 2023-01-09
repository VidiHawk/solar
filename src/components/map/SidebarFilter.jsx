/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLayers,
  addFeatured,
  addStatusType,
} from "../../features/filter/filterSlice";
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addStatus,
  addYearBuilt,
  resetAmenities,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "../common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import LayerSwitcher from "../common/map/LayerSwitcher";

const SideBarFilter = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);

  const layers = useSelector((state) => state.filter.layers);

  console.log("getLayers", layers);

  // input state
  const [getLayers, setLayers] = useState(layers);
  // const getLayers = [
  //   { id: "power_", name: "Power", isChecked: true },
  //   { id: "heatmap_", name: "Solar Generation", isChecked: false },
  //   { id: "place_", name: "Labels", isChecked: true },
  // ];
  const [getKeyword, setKeyword] = useState(keyword);
  const [getLocation, setLocation] = useState(location);
  const [getStatus, setStatus] = useState(status);
  const [getPropertiesType, setPropertiesType] = useState(propertyType);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getGarages, setGarages] = useState(garages);
  const [getBuiltYear, setBuiltYear] = useState(yearBuilt);
  const [getAreaMin, setAreaMin] = useState(area.min);
  const [getAreaMax, setAreaMax] = useState(area.max);

  // advanced state
  const [getAdvanced, setAdvanced] = useState([
    { id: uuidv4(), name: "Private PPA" },
    { id: uuidv4(), name: "Public PPA" },
    { id: uuidv4(), name: "PPA terminated" },
    { id: uuidv4(), name: "PPA terminating within 5 years" },
    { id: uuidv4(), name: "Substation owned" },
    { id: uuidv4(), name: "Close to public substation" },
    { id: uuidv4(), name: "SMA inverters" },
    { id: uuidv4(), name: "Components out of warranty" },
    { id: uuidv4(), name: "Close to populated areas" },
    { id: uuidv4(), name: "Far from populated areas" },
  ]);

  const dispatch = useDispatch();

  const Router = useRouter();

  // mapLayers
  useEffect(() => {
    dispatch(addLayers(getLayers));
  }, [dispatch, addLayers, getLayers]);

  // keyword
  useEffect(() => {
    dispatch(addKeyword(getKeyword));
  }, [dispatch, addKeyword, getKeyword]);

  // location
  useEffect(() => {
    dispatch(addLocation(getLocation));
  }, [dispatch, addLocation, getLocation]);

  // status
  useEffect(() => {
    dispatch(addStatus(getStatus));
  }, [dispatch, addStatus, getStatus]);

  // properties type
  useEffect(() => {
    dispatch(addPropertyType(getPropertiesType));
  }, [dispatch, addPropertyType, getPropertiesType]);

  // bathroom
  useEffect(() => {
    dispatch(addBathrooms(getBathroom));
  }, [dispatch, addBathrooms, getBathroom]);

  // bedroom
  useEffect(() => {
    dispatch(addBedrooms(getBedroom));
  }, [dispatch, addBedrooms, getBedroom]);

  // garages
  useEffect(() => {
    dispatch(addGarages(getGarages));
  }, [dispatch, addGarages, getGarages]);

  // built years
  useEffect(() => {
    dispatch(addYearBuilt(getBuiltYear));
  }, [dispatch, addYearBuilt, getBuiltYear]);

  // area min
  useEffect(() => {
    dispatch(dispatch(addAreaMin(getAreaMin)));
  }, [dispatch, addAreaMin, getAreaMin]);

  // area max
  useEffect(() => {
    dispatch(dispatch(addAreaMax(getAreaMax)));
  }, [dispatch, addAreaMax, getAreaMax]);

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };

  const clearAllFilters = () => {
    setKeyword("");
    setLocation("");
    setStatus("");
    setPropertiesType("");
    dispatch(addPrice({ min: 10000, max: 20000 }));
    setBathroom("");
    setBedroom("");
    setBedroom("");
    setGarages("");
    setBuiltYear("");
    setAreaMin("");
    setAreaMax("");
    dispatch(resetAmenities());
    dispatch(addStatusType(""));
    dispatch(addFeatured(""));
    // dispatch(addLayers(["Power", "Labels"]));
    clearAdvanced();
    clearLayers();
  };

  // clear layers
  const clearLayers = () => {
    const changed = getLayers.map((layer) => {
      layer.isChecked = false;
      return item;
    });
    setLayers(changed);
  };

  const getLayerIds = () => {
    const layersIds = [];
    getLayers.map((layer) => {
      layersIds.push(layer.id);
    });
    return layersIds;
  };

  const getLayersEnabled = () => {
    const layersEnabled = [];
    getLayers.map((layer) => {
      if (layer.isChecked) {
        layersEnabled.push(layer.name);
      }
    });
    return layersEnabled;
  };

  const layerIds = getLayerIds();
  const layersEnabled = getLayersEnabled();

  // console.log("layers", getLay);
  const layerSwitcher = new LayerSwitcher(layerIds, layersEnabled);

  // add layer
  const layerHandler = (id) => {
    const data = getLayers.map((layer) => {
      if (layer.id === id) {
        if (layer.isChecked) {
          console.log("layer removed: ", layer.name);
          layer.isChecked = false;
          const index = layersEnabled.indexOf(layer.name);
          if (index > -1) {
            layersEnabled.splice(index, 1);
          }
          // console.log("Enabled layer name", layersEnabled[layer.name]);
          console.log("all layers: ", layersEnabled);
        } else {
          dispatch(addLayers("crap"));
          // layer.isChecked = true;

          if (!layersEnabled.includes(layer.name)) {
            layersEnabled.push(layer.name);
            console.log("layer added: ", layer.name);
          }

          console.log("all layers: ", layersEnabled);
        }
      }

      return layer;
    });
    setLayers(data);
    const enab = data.map((layer) => {
      if (layer.isChecked) {
        layer.name;
      }
    });
    layerSwitcher.layersEnabled = enab;
    // console.log(enabled);
  };

  // clear advanced
  const clearAdvanced = () => {
    const changed = getAdvanced.map((item) => {
      item.isChecked = false;
      return item;
    });
    setAdvanced(changed);
  };

  // add advanced
  const advancedHandler = (id) => {
    const data = getAdvanced.map((feature) => {
      if (feature.id === id) {
        if (feature.isChecked) {
          feature.isChecked = false;
        } else {
          feature.isChecked = true;
        }
      }
      return feature;
    });

    setAdvanced(data);
  };

  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <ul className="sasw_list mb0">
            <li>
              <div id="layers" className="panel-group">
                <div className="panel">
                  <div className="panel-body row">
                    <div className="col-lg-12">
                      <ul className="ui_kit_checkbox selectable-list fn-400">
                        {getLayers?.map((layer) => (
                          <li key={layer.id}>
                            <div className="form-check custom-checkbox">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id={layer.id}
                                value={layer.name}
                                checked={layer.isChecked || false}
                                onChange={(e) =>
                                  dispatch(addLayers(e.target.value))
                                }
                                onClick={() => layerHandler(layer.id)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={layer.id}
                              >
                                {layer.name}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* End li */}

            <li className="search_area">
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="keyword"
                  value={getKeyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <label>
                  <span className="flaticon-magnifying-glass"></span>
                </label>
              </div>
            </li>
            {/* End li */}

            <li className="search_area">
              <div className="form-group mb-3">
                <input
                  type="search"
                  className="form-control"
                  id="exampleInputEmail"
                  placeholder="Location"
                  value={getLocation}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="exampleInputEmail">
                  <span className="flaticon-maps-and-flags"></span>
                </label>
              </div>
            </li>
            {/* End li */}

            <li>
              <div className="search_option_two">
                <div className="candidate_revew_select">
                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    className="selectpicker w100 show-tick form-select"
                    value={getStatus}
                  >
                    <option value="">Status</option>
                    <option value="for-sale">for sale</option>
                    <option value="sold">sold</option>
                    <option value="under-development">under development</option>
                    <option value="under-construction">
                      under construction
                    </option>
                  </select>
                </div>
              </div>
            </li>
            {/* End li */}

            <li>
              <div className="search_option_two">
                <div className="candidate_revew_select">
                  <select
                    onChange={(e) => setPropertiesType(e.target.value)}
                    className="selectpicker w100 show-tick form-select"
                    value={getPropertiesType}
                  >
                    <option value="">Generator Type</option>
                    <option value="solar">solar</option>
                    <option value="wind">wind</option>
                    <option value="hydro">hydro</option>
                    <option value="gas">gas</option>
                    <option value="nuclear">nuclear</option>
                    <option value="coal">coal</option>
                  </select>
                </div>
              </div>
            </li>
            {/* End li */}

            <li>
              <div className="small_dropdown2">
                <div
                  id="prncgs2"
                  className="btn dd_btn"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <span>Price Range</span>
                  <label htmlFor="prncgs2">
                    <span className="fa fa-angle-down"></span>
                  </label>
                </div>
                <div className="dd_content2 style2 dropdown-menu">
                  <div className="pricing_acontent ">
                    <PricingRangeSlider />
                  </div>
                </div>
              </div>
            </li>
            {/* End li */}

            <li>
              <div className="search_option_two">
                <div className="candidate_revew_select">
                  <select
                    onChange={(e) => setBathroom(e.target.value)}
                    className="selectpicker w100 show-tick form-select"
                    value={getBathroom}
                  >
                    <option value="">Capacity</option>
                    <option value="1">0 to 3 MWp</option>
                    <option value="2">3 to 10 MWp</option>
                    <option value="3">10 to 30 MWp</option>
                    <option value="4">30 to 100 MWp</option>
                    <option value="5">100 to 1000 MWp</option>
                    <option value="6">1 to 10 GWp</option>
                  </select>
                </div>
              </div>
            </li>
            {/* End li */}

            {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setBedroom(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBedroom}
            >
              <option value="">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li> */}
            {/* End li */}

            {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setGarages(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getGarages}
            >
              <option value="">Garages</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="other">Others</option>
            </select>
          </div>
        </div>
      </li> */}
            {/* End li */}

            <li>
              <div className="search_option_two">
                <div className="candidate_revew_select">
                  <select
                    onChange={(e) => setBuiltYear(e.target.value)}
                    className="selectpicker w100 show-tick form-select"
                    value={getBuiltYear}
                  >
                    <option value="">Year built</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
              </div>
            </li>
            {/* End li */}

            <li className="min_area list-inline-item">
              <div className="form-group mb-4">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputName2"
                  placeholder="Min Area"
                  value={getAreaMin}
                  onChange={(e) => setAreaMin(e.target.value)}
                />
              </div>
            </li>
            {/* End li */}

            <li className="max_area list-inline-item">
              <div className="form-group mb-4">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputName3"
                  placeholder="Max Area"
                  value={getAreaMax}
                  onChange={(e) => setAreaMax(e.target.value)}
                />
              </div>
            </li>
            {/* End li */}

            <li>
              <div id="accordion" className="panel-group">
                <div className="panel">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        href="#panelBodyRating"
                        className="accordion-toggle link"
                        data-bs-toggle="collapse"
                        data-bs-parent="#accordion"
                      >
                        <i className="flaticon-more"></i> Advanced features
                      </a>
                    </h4>
                  </div>
                  {/* End .panel-heading */}

                  <div id="panelBodyRating" className="panel-collapse collapse">
                    <div className="panel-body row">
                      <div className="col-lg-12">
                        <ul className="ui_kit_checkbox selectable-list fn-400">
                          {getAdvanced?.map((feature) => (
                            <li key={feature.id}>
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id={feature.id}
                                  value={feature.name}
                                  checked={feature.isChecked || false}
                                  onChange={(e) =>
                                    dispatch(addAmenities(e.target.value))
                                  }
                                  onClick={() => advancedHandler(feature.id)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={feature.id}
                                >
                                  {feature.name}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* End li */}

            <li>
              <div className="search_option_button">
                <button
                  onClick={clearHandler}
                  type="button"
                  className="btn btn-block btn-thm w-100"
                >
                  Clear Filters
                </button>
              </div>
            </li>
            {/* End li */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
