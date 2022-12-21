import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contact Us</h4>
      <p>
        Our corporate offices are located on the vibrant &rsquo;Silicon
        Docks&rsquo; in Dublin. We are open during regular business hours.
      </p>
      <div className="content_list">
        <h5>Address</h5>
        <p>
          1 The Anchorage, Charlotte Quay, <br />
          Grand Canal Dock, Dublin 2, Ireland
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>+353 87 154 3929</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>info@terapower.io</p>
      </div>
      <div className="content_list">
        <h5>Skype</h5>
        <p>terapower</p>
      </div>
      <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
