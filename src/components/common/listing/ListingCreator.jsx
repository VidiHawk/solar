/* eslint-disable @next/next/no-img-element */
const Creaator = () => {
  return (
    <div className="media d-flex">
      {/* Ideal photo size: 90x90*/}
      <img className="me-3" src="/assets/images/team/2.webp" alt="2.webp" />
      <div className="media-body">
        <h5 className="mt-0 mb0">Samuel Williams</h5>
        <p className="mb0">(123)456-7890</p>
        <p className="mb0">info@purepower.io</p>
        <a className="text-thm" href="#">
          View My Listing
        </a>
      </div>
    </div>
  );
};

export default Creaator;
