import Blogs from "../common/Blogs";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
import FindProperties from "../home-8/FindProperties";
import FeaturedProperties from "../home/FeaturedProperties";
import Header from "./Header";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Featured Projects</h2>
                <p>Hottest deals on the market.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProperties />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      {/* <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Projects in these Countries</h2>
                <p>Over 30,000 power plants listed in over 130 countries.</p>
              </div>
            </div>
          </div>
                 <div className="row">
            <FindProperties />
          </div>
          
        </div>
      </section> */}

      {/* <!-- Our Testimonials --> */}
      {/* <section className="our-testimonials bgc-f7">
        <div className="container ovh">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Testimonials</h2>
                <p>What people say about us.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial_slider_home9 gutter-x15">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End container */}

      {/* <!-- Our Blog --> */}
      {/* <section className="our-blog pb0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>
                  Discover the latest news about power plant asset transactions.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Partners --> */}
      {/* <section id="our-partners" className="our-partners pt30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Footer --> */}
      <section className="footer_one home5">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home5 pt30 pb30">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
