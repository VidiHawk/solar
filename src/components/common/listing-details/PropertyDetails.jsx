const PropertyDetails = () => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              ID : <span>HZ27</span>
            </p>
          </li>
          <li>
            <p>
              Price : <span>$5,000,000</span>
            </p>
          </li>
          <li>
            <p>
              Peak capacity : <span>9 MW</span>
            </p>
          </li>
          <li>
            <p>
              Year Built : <span>2017-01-09</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Land size : <span>35 ha</span>
            </p>
          </li>
          <li>
            <p>
              Inverters : <span>SMA</span>
            </p>
          </li>
          <li>
            <p>
              Substation : <span>Hitachi</span>
            </p>
          </li>
          <li>
            <p>
              Solar panels brand : <span>Trinasolar</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Asset type : <span>Land leased to solar plant</span>
            </p>
          </li>
          <li>
            <p>
              Asset Status : <span>For Sale</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
