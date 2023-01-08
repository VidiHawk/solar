import Link from "next/link";

const CopyrightFooter = () => {
  const menuItems = [
    { id: 1, name: "Home", routeLink: "/" },
    { id: 2, name: "Login", routeLink: "/login" },
    { id: 3, name: "Register", routeLink: "/register" },
    {
      id: 4,
      name: "Terms of Use",
      routeLink: "/terms",
    },
    { id: 5, name: "Data Privacy", routeLink: "/terms" },
    { id: 6, name: "Single Listing", routeLink: "/listing-details" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="footer_menu_widget">
          <ul>
            {menuItems.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <Link href={item.routeLink}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="copyright-widget text-end">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a href="https://www.vidiren.com">Vidi Rendering Technologies</a>.
            All rights reserved.
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
