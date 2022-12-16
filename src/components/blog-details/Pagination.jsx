const Pagination = () => {
  return (
    <div className="row">
      <div className="col-sm-6 col-lg-6">
        <div className="pag_prev">
          <a href="#">
            <span className="flaticon-back"></span>
          </a>
          <div className="detls">
            <h5>Previous Post</h5> <p> Most Successful Developers in 2022</p>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-lg-6">
        <div className="pag_next text-right">
          <a href="#">
            <span className="flaticon-next"></span>
          </a>
          <div className="detls">
            <h5>Next Post</h5> <p> How to Buy Solar Assets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
