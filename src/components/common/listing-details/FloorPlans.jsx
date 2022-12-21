/* eslint-disable @next/next/no-img-element */
const FloorPlans = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="card floor_plan">
        <div id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <ul className="mb0 d-flex align-items-cener flex-wrap">
                <li className="d-inline-flex list-inline-item">
                  Technical design
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Section:</p> <span>A</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Substation:</p> <span>1 mobile</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Inverter:</p> <span>1x SMA 3,000 kVA</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Land:</p> <span>20 ha</span>
                </li>
              </ul>
            </button>
          </h2>
        </div>
        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="card-body text-center">
            <img
              className="img-fluid"
              src="/assets/images/technical/index.png"
              alt="floor_plan.png"
            />
            <p>
              Plan description. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="card floor_plan">
        <div className=" active" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <ul className="mb0 d-flex align-items-cener flex-wrap">
                <li className="d-inline-flex list-inline-item">First Floor</li>
                <li className="d-inline-flex list-inline-item">
                  <p>Section: </p> <span>B</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Substation: </p> <span>none</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Inverter: </p> <span>2x SMA 1,000 kVA</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Land: </p> <span>15 ha</span>
                </li>
              </ul>
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          className="collapse show"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="card-body text-center">
            <img
              className="img-fluid"
              src="/assets/images/technical/index.png"
              alt="floor_plan.png"
            />
            <p>
              Plan description. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
