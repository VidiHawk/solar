import Link from "next/link";
import { useRouter } from "next/router";

const HeaderMenuContent = ({ float = "" }) => {
  const route = useRouter();

  // const home = [
  //   { id: 9, name: "Home", routerPath: "/home-9" },
  //   { id: 1, name: "Map", routerPath: "/" },
  // ];

  const admin = [
    {
      id: 1,
      name: "Dashboard",
      routerPath: "/my-dashboard",
    },
    {
      id: 2,
      name: "My Power Plants",
      routerPath: "/my-properties",
    },
    {
      id: 3,
      name: "My Message",
      routerPath: "/my-message",
    },
    {
      id: 4,
      name: "My Review",
      routerPath: "/my-review",
    },
    {
      id: 5,
      name: "My Favourites",
      routerPath: "/my-favourites",
    },
    {
      id: 6,
      name: "My Profile",
      routerPath: "/my-profile",
    },
    {
      id: 7,
      name: "My Package",
      routerPath: "/my-package",
    },
    {
      id: 8,
      name: "My Saved Search",
      routerPath: "/my-saved-search",
    },
    {
      id: 9,
      name: "Add Power Plant",
      routerPath: "/create-listing",
    },
  ];

  // const blog = [
  //   { id: 1, name: "Blog List", routerPath: "/blog-list-1" },
  //   {
  //     id: 4,
  //     name: "Blog Details",
  //     routerPath: "/blog-details",
  //   },
  // ];

  // const pages = [
  //   { id: 1, name: "About Us", routerPath: "/about-us" },
  //   { id: 2, name: "Gallery", routerPath: "/gallery" },
  //   { id: 3, name: "Listing Single", routerPath: "/listing-details-v4" },

  //   { id: 4, name: "LogIn", routerPath: "/login" },
  //   { id: 6, name: "Membership", routerPath: "/membership" },

  //   { id: 7, name: "Register", routerPath: "/register" },
  // ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="last">
        <Link href="/">
          <a className={route.pathname === "/" ? "ui-active" : undefined}>
            Home
          </a>
        </Link>
      </li>
      <li className="last">
        <Link href="/listing-map-v4">
          <a
            className={
              route.pathname === "/listing-map-v4" ? "ui-active" : undefined
            }
          >
            Map
          </a>
        </Link>
      </li>
      {/* <li className="dropitem">
        <a
          href="#"
          className={
            home.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Map</span>
          <span className="arrow"></span>
        </a>
        {/* <!-- Level Two--> */}

      {/* <ul className="sub-menu ">
          {home.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            pages.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Pages</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {pages.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            blog.some(
              (page) =>
                page.routerPath === route.pathname ||
                page.routerPath + "/[id]" === route.pathname
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {blog.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ||
                    item.routerPath + "/[id]" === route.pathname
                      ? "ui-active"
                      : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}

      <li className="last">
        <Link href="/membership">
          <a
            className={
              route.pathname === "/membership" ? "ui-active" : undefined
            }
          >
            Pricing
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link href="/about-us">
          <a
            className={route.pathname === "/about-us" ? "ui-active" : undefined}
          >
            About Us
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link href="/contact">
          <a
            className={route.pathname === "/contact" ? "ui-active" : undefined}
          >
            Contact
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">Login/Register</span>
        </a>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            admin.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">User Admin</span>
          <span className="arrow"></span>
        </a>
        {/* <!-- Level Two--> */}

        <ul className="sub-menu ">
          {admin.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      {/* <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/create-listing">
          <a>
            <span className="flaticon-plus"></span>
            <span className="dn-lg"> Create Listing</span>
          </a>
        </Link>
      </li> */}
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
