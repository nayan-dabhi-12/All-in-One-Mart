import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../Pages/ApiData";

export default function Header() {
  const { data: categoryData } = useGetProductsByCategoryQuery();
  const categories = categoryData || [];

  // Define categories for each group
  const electronicsAndSports = categories.filter(category =>
    ["laptops", "mobile-accessories", "smartphones", "sports-accessories", "tablets", "motorcycle", "vehicle"].includes(category)
  );

  const fashionAndAccessories = categories.filter(category =>
    ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches", "tops"].includes(category)
  );

  const homeAndKitchen = categories.filter(category =>
    ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories", "skin-care"].includes(category)
  );

  return (
    <>
      <div className="navbar-inner">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav text-center ml-auto main-header">
                <li className="nav-item  mr-lg-2 mb-lg-0 mb-2">
                  <Link className="nav-link" to="/">
                    Home
                    <span className="sr-only"></span>
                  </Link>
                </li>

                {/* Electronics and Sports Dropdown */}
                <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    id="electronicsDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Electronics and Sports
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="electronicsDropdown"
                  >
                    {electronicsAndSports.length > 0 ? (
                      electronicsAndSports.map((category, index) => (
                        <Link
                          key={index}
                          className="dropdown-item"
                          to={`/category/${category}`}
                        >
                          {category.replace("-", " ").toUpperCase()}
                        </Link>
                      ))
                    ) : (
                      <span className="dropdown-item">No Categories</span>
                    )}
                  </div>
                </li>

                {/* Fashion and Accessories Dropdown */}
                <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    id="fashionDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Fashion and Accessories
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="fashionDropdown"
                  >
                    {fashionAndAccessories.length > 0 ? (
                      fashionAndAccessories.map((category, index) => (
                        <Link
                          key={index}
                          className="dropdown-item"
                          to={`/category/${category}`}
                        >
                          {category.replace("-", " ").toUpperCase()}
                        </Link>
                      ))
                    ) : (
                      <span className="dropdown-item">No Categories</span>
                    )}
                  </div>
                </li>

                {/* Home and Kitchen Dropdown */}
                <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    id="homeDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home and Kitchen
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="homeDropdown"
                  >
                    {homeAndKitchen.length > 0 ? (
                      homeAndKitchen.map((category, index) => (
                        <Link
                          key={index}
                          className="dropdown-item"
                          to={`/category/${category}`}
                        >
                          {category.replace("-", " ").toUpperCase()}
                        </Link>
                      ))
                    ) : (
                      <span className="dropdown-item">No Categories</span>
                    )}
                  </div>
                </li>

                <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/help">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
