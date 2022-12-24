const ShowFilter = () => {
  return (
    <div id="main2" data-bs-toggle="offcanvas" data-bs-target="#sidebarListing">
      <span
        id="open2"
        className="flaticon-filter-results-button filter_open_btn style2"
      >
        {/* Change button position CSS in _custom_themes at .filter-let-top */}
        {/* Change button style CSS in main.css at #main2 .filter_open_btn  */}
        Show Filter
      </span>
    </div>
  );
};

export default ShowFilter;
