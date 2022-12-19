import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>About Tera</h4>
          <p>
            We’re reimagining how you buy, sell and service power plants. It’s
            now easier than ever to make money in the energy market. So let’s do
            this, together.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/membership">
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/blog-list-1">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@terapower.io">info@terapower.io</a>
            </li>
            <li>
              <a>1 The Anchorage,</a>
            </li>
            <li>
              <a>Charlotte Quay, Grand Canal Dock,</a>
            </li>
            <li>
              <a>Dublin 1, Ireland</a>
            </li>
            <li>
              <a href="tel:+353871543929">+353 87 154 3929</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
          <h4>Subscribe</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
