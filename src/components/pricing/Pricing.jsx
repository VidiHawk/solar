const Pricing = () => {
  const pricingContent = [
    {
      id: 1,
      price: "0",
      title: "Starter Plan",
      features: [
        "50 Power Plant Listings",
        "60 Days Availability",
        "20 Featured Power Plants",
        "Limited Support",
      ],
    },
    {
      id: 2,
      price: "190",
      title: "Broker Plan",
      features: [
        "50 Power Plant Listings",
        "60 Days Availability",
        "20 Featured Power Plants",
        "Limited Support",
      ],
    },
    {
      id: 3,
      price: "291",
      title: "Corporate Plan",
      features: [
        "50 Power Plant Listings",
        "60 Days Availability",
        "20 Featured Power Plants",
        "Limited Support",
      ],
    },
  ];
  return (
    <>
      {pricingContent.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <div className="pricing_table">
            <div className="pricing_header">
              <div className="price">${item.price}</div>
              <h4>{item.title}</h4>
            </div>
            <div className="pricing_content">
              <ul className="mb0">
                {item.features.map((val, i) => (
                  <li key={i}>{val}</li>
                ))}
              </ul>
            </div>
            <div className="pricing_footer">
              <a className="btn pricing_btn btn-block" href="#">
                Select Package
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
