/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../features/properties/propertiesSlice";
import properties from "../../data/properties";
import FilterTopBar2 from "../common/listing/FilterTopBar2";

function FeaturedItem(data) {
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  // keyword filter
  const keywordHandler = (item) =>
    item.title.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  const locationHandler = (item) => {
    return item.location.toLowerCase().includes(location.toLowerCase());
  };

  // status handler
  const statusHandler = (item) =>
    item.type.toLowerCase().includes(status.toLowerCase());

  // properties handler
  const propertiesHandler = (item) =>
    item.type.toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  const priceHandler = (item) =>
    item.price < price?.max && item.price > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item.itemDetails[1].number == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item.itemDetails[0].number == bedrooms;
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item.itemDetails[2].number) > area.min &&
          parseInt(item.itemDetails[2].number) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.toLowerCase().includes(item.amenities.toLowerCase())
      );
    }
    return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      return item.featured === featured;
    }
    return true;
  };

  // status handler
  let content = properties
    ?.slice(0, 7)
    ?.filter(keywordHandler)
    ?.filter(locationHandler)
    ?.filter(statusHandler)
    ?.filter(propertiesHandler)
    ?.filter(priceHandler)
    ?.filter(bathroomHandler)
    ?.filter(bedroomHandler)
    ?.filter(garagesHandler)
    ?.filter(builtYearsHandler)
    ?.filter(areaHandler)
    ?.filter(advanceHandler)
    ?.sort(statusTypeHandler)
    ?.filter(featuredHandler)
    .map((item) => (
      <div
        className={`${
          isGridOrList ? "col-12 list_map feature-list" : "col-md-6 col-lg-6"
        } `}
        key={item.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >
          <div className="thumb">
            {/* Ideal image size is 752x450 */}
            <img className="img-whp" src={item.img} alt="fp1.jpg" />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">Featured</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.featured}
                  </a>
                </li>
              </ul>
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>

              <Link href={`/listing-details-v1/${item.id}`}>
                <a className="fp_price">
                  ${item.price}
                  <small>million</small>
                </a>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.type}</p>
              <h4>
                <Link href={`/listing-details-v1/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location}
              </p>

              <ul className="prop_details mb0">
                {item.itemDetails.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {val.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>
                      <img src={item.posterAvatar} alt="pposter1.png" />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>{item.posterName}</a>
                  </Link>
                </li>
              </ul>
              <div className="fp_pdate float-end">{item.postedYear}</div>
            </div>
            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    ));

  // const selectedMarker = [
  //   {
  //     id: 0,
  //     img: "",
  //     price: "7.4",
  //     type: "Solar",
  //     title: "Blabla Title",
  //     location: `1421 San Pedro`,
  //     saleTag: ["Selected", "Not For Sale"],
  //     itemDetails: [
  //       {
  //         name: "Capacity",
  //         number: "5MWp",
  //       },
  //       {
  //         name: "PPA",
  //         number: "Unknown",
  //       },
  //       {
  //         name: "Area",
  //         number: "Unknown",
  //       },
  //     ],
  //     posterAvatar: "",
  //     posterName: "Patrick Connor",
  //     postedYear: "1 year ago",
  //     built: "2013",
  //     amenities: "air-conditioning",
  //     featured: "sale",
  //     created_at: 1667181268893,
  //   },
  // ];

  // selectedMarker[0]["title"] = name;
  // selectedMarker[0]["type"] = fuel;
  // selectedMarker[0]["title"] = name;
  // selectedMarker[0]["itemDetails"][0]["number"] = capacity;
  // selectedMarker[0]["price"] = capacity * 2;
  // selectedMarker[0]["posterAvatar"] = image;

  // const cardFromMarkers = selectedMarker.map((item) => (
  const coordinates = data.data[0] ? data.data[0][0] : undefined;
  const capacity = data.data[0] ? data.data[0][1]["capacity"] : undefined;
  const fuel = data.data[0] ? data.data[0][1]["fuel"] : undefined;
  const name = data.data[0] ? data.data[0][1]["name"] : undefined;
  const owner = data.data[0] ? data.data[0][1]["owner"] : undefined;
  const address = data.data[0] ? data.data[0][1]["address"] : undefined;
  const commissioned = data.data[0]
    ? data.data[0][1]["commissioned"]
    : undefined;
  const image = data.data[0] ? data.data[0][1]["image"] : undefined;

  const cardFromMarkers = (
    <div
      className={`${
        isGridOrList ? "col-12 list_map feature-list" : "col-md-6 col-lg-6"
      } `}
      key={0}
    >
      <div
        className={`feat_property home7 style4 ${
          isGridOrList ? "d-flex align-items-center" : undefined
        }`}
      >
        <div className="thumb">
          {/* Ideal image size is 752x450 */}
          <img
            className="img-whp"
            src={"assets/images/property/1.jpg"}
            alt="image not available"
          />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              <li className="list-inline-item">
                <a href="#">Selected</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-capitalize">
                  Operational
                </a>
              </li>
            </ul>
            <ul className="icon mb0">
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-heart"></span>
                </a>
              </li>
            </ul>

            {/* <Link href={`/listing-details-v1/${"item.id"}`}>
              <a className="fp_price">
                {capacity}
                <small>MW</small>
              </a>
            </Link> */}
          </div>
        </div>
        <div className="details">
          <div className="tc_content">
            <p className="text-thm">
              {capacity} <small>MW</small> {"- " + fuel}
            </p>
            <h4>
              <Link href={`/listing-details-v1/${"item.id"}`}>
                <a>{name}</a>
              </Link>
            </h4>
            <p>
              <span className="flaticon-placeholder"></span>
              {" " + address}
            </p>

            <ul className="prop_details mb0">
              <li className="list-inline-item">
                <a href="#">
                  {"Owned by"}: {owner}
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  {"Built in: "}: {commissioned}
                </a>
              </li>
            </ul>
          </div>
          {/* End .tc_content */}

          {/* <div className="fp_footer">
            <ul className="fp_meta float-start mb0">
              <li className="list-inline-item">
                <Link href="/agent-v2">
                  <a>
                    <img src={image} alt="pposter1.png" />
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/agent-v2">
                  <a>{"item.posterName"}</a>
                </Link>
              </li>
            </ul>
            <div className="fp_pdate float-end">updated in 2023</div>
          </div> */}
          {/* End .fp_footer */}
        </div>
      </div>
    </div>
  );
  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, addLength, content]);

  // console.log(JSON.stringify(properties.slice(0, 1), null, "  "));
  console.log(data.data[0]);
  return (
    <>
      <>{data.data[0] && cardFromMarkers}</>
      <div className="grid_list_search_result ">
        <div className="row align-items-center">
          <FilterTopBar2 />
        </div>
      </div>
      <>{content}</>
    </>
  );
}

export default FeaturedItem;
