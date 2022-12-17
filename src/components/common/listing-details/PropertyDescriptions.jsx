import { useState } from "react";

const PropertyDescriptions = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <p className="mb25">
        9MW operational solar park on 35ha of rented land in Extremadura region.
        The asset is 100% controlled by debt-free SPV Garibaldi Energia SL. Long
        term landlease contract in place that guarantees an inflation-protected
        income until 2042.
      </p>
      <p className={click ? "gpara second_para white_goverlay mt10 mb10" : ""}>
        The target of the sale is the 100% interest in Garibaldi Energia SL.
        Garibaldi Energia SL is a Spanish SPV holding a piece of 35ha of land in
        Extremadura region that is rented to a 9MW operational solar park. We
        are selling the SPV debt free and with a long term landlease contract
        that guarantees an inflation-protected income until 2042. This solar
        investment delivers a very robust cash flow profile over more than 20
        years due to the seniority of landlease payments.
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <p className="mt10 mb10">
            The structure of the land lease comes with a step up. It starts with
            $80,000 annually and then goes up to over $500.000 per year in 2032.
            We have modelled this asset on SPREAD taking into account the
            projected land lease payments and a terminal value at the end. The
            valuaton of Garibaldi is $5 million. The investor who buys Garibaldi
            will get a highly secured 4% unlevered IRR with the real possibility
            to increase that return by adding some low cost leverage (below 2%
            cost).
          </p>
          <p className="mt10 mb10">
            So, in summary, these are the main terms:
            <li>Land & lease contract SPV</li>
            <li>Lease payments related to a Solar Plant with FIT in Spain</li>
            <li>
              Inflation-protected income Fully derisked 4% unlevered IRR Upside
              of
            </li>
            <li>200-300bps by adding low cost leverage</li>
          </p>
        </div>
      </div>
      <p className="overlay_close">
        <a
          className="text-thm fz14"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleClick}
        >
          Show More <span className="flaticon-download-1 fz12"></span>
        </a>
      </p>
    </>
  );
};

export default PropertyDescriptions;
