import BreadCrumb from "../common/BreadCrumb";

// the background PICTURE is embeded in the CSS className="inner_page_breadcrumb"

const BreadCrumbBanner = () => {
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb title="contact" />
              <h4 className="breadcrumb_title">Contact Us</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
