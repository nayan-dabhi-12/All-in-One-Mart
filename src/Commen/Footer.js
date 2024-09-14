import React from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../Pages/ApiData";

export default function Footer() {
  const { data: categoryData } = useGetProductsByCategoryQuery();
  const categories = categoryData || [];

  // Define categories for each group
  const electronicsAndSports = categories.filter((category) =>
    [
      "laptops",
      "mobile-accessories",
      "smartphones",
      "sports-accessories",
      "tablets",
      "motorcycle",
      "vehicle",
    ].includes(category)
  );

  const fashionAndAccessories = categories.filter((category) =>
    [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "sunglasses",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
      "tops",
    ].includes(category)
  );

  const homeAndKitchen = categories.filter((category) =>
    [
      "beauty",
      "fragrances",
      "furniture",
      "groceries",
      "home-decoration",
      "kitchen-accessories",
      "skin-care",
    ].includes(category)
  );

  const beautyandPersonalCare = categories.filter((category) =>
    ["beauty", "fragrances", "skin-care"].includes(category)
  );

  const electronicsandAccessories = categories.filter((category) =>
    [
      "laptops",
      "mobile-accessories",
      "smartphones",
      "tablets",
      "sports-accessories",
      "sunglasses",
      "motorcycle",
    ].includes(category)
  );

  const fashion = categories.filter((category) =>
    [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
      "tops",
    ].includes(category)
  );

  const homeAndLifestyle = categories.filter((category) =>
    [
      "furniture",
      "groceries",
      "home-decoration",
      "kitchen-accessories",
      "vehicle",
    ].includes(category)
  );

  return (
    <>
      <footer>
        <div className="footer-top-first">
          <div className="container py-5">
            {/* footer first section */}
            <h2 className="footer-top-head-w3l font-weight-bold mb-3">
              Electronics :
            </h2>
            <p className="footer-main mb-4">
              If you're considering a new laptop, looking for a powerful new car
              stereo or shopping for a new HDTV, we make it easy to find exactly
              what you need at a price you can afford. We offer Every Day Low
              Prices on TVs, laptops, cell phones, tablets and iPads, video
              games, desktop computers, cameras and camcorders, audio, video and
              more.
            </p>
            {/* //footer first section */}
            {/* footer second section */}
            <div className="row w3l-grids-footer py-sm-4 py-3">
              <div className="col-md-4 offer-footer">
                <div className="d-flex align-items-center">
                  <div className="icon-fot">
                    <i className="fas fa-dolly" />
                  </div>
                  <div className="text-form-footer ml-3">
                    <h3>Free Shipping</h3>
                    <p>on orders over $100</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offer-footer my-md-0 my-4">
                <div className="d-flex align-items-center">
                  <div className="icon-fot">
                    <i className="fas fa-shipping-fast" />
                  </div>
                  <div className="text-form-footer ml-3">
                    <h3>Fast Delivery</h3>
                    <p>World Wide</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offer-footer">
                <div className="d-flex align-items-center">
                  <div className="icon-fot">
                    <i className="far fa-thumbs-up" />
                  </div>
                  <div className="text-form-footer ml-3">
                    <h3>Big Choice</h3>
                    <p>of Products</p>
                  </div>
                </div>
              </div>
            </div>
            {/* //footer second section */}
          </div>
        </div>
        {/* footer third section */}
        <div className="w3l-middlefooter-sec">
          <div className="container py-5">
            <div className="row footer-info w3-agileits-info">
              {/* footer categories */}
              {/* footer categories */}
              <div className="col-md-3 col-sm-6 footer-grids">
                <h3 className="mb-3">Categories</h3>
                <ul className="list-unstyled">
                  <li className="nav-item dropdown mb-3">
                    <a
                      className="nav-link"
                      href="#"
                      id="categoriesDropdown"
                      role="button"
                      style={{ padding: "0" }}
                    >
                      Electronics and Sports
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="categoriesDropdown"
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
                  <li className="nav-item dropdown mb-3">
                    <a
                      className="nav-link"
                      href="#"
                      id="categoriesDropdown"
                      role="button"
                      style={{ padding: "0" }}
                    >
                      Fashion and Accessories
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="categoriesDropdown"
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
                  <li className="nav-item dropdown mb-3">
                    <a
                      className="nav-link"
                      href="#"
                      id="categoriesDropdown"
                      role="button"
                      style={{ padding: "0" }}
                    >
                      Home and Kitchen
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="categoriesDropdown"
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
                </ul>
              </div>

              {/* //footer categories */}

              {/* //footer categories */}
              {/* quick links */}
              <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
                <h3 className="mb-3">Quick Links</h3>
                <ul>
                  <li className="mb-3">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/help">Help</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/faqs">Faqs</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/terms">Terms of use</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                <h3 className="mb-3">Get in Touch</h3>
                <ul>
                  <li className="mb-3">
                    <i className="fas fa-map-marker" /> Mkc, 123 Sebastian, USA.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-mobile" />
                    <a href="tel:+12 23456790"> 12 2345 6790</a>{" "}
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-phone" />
                    <a href="tel:+11 36721890">+11 3672 1890</a>{" "}
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-envelope-open" />
                    <a href="mailto:example@mail.com"> mail 1@example.com</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope-open" />
                    <a href="mailto:example@mail.com"> mail 2@example.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4">
                {/* newsletter */}
                <h3 className="mb-3">Newsletter</h3>
                <p className="mb-3">Free Delivery on your first order!</p>
                <form action="#" method="post">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      required
                    />
                    <button type="submit" className="btn">
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </form>
                {/* //newsletter */}
                {/* social icons */}
                <div className="footer-grids  w3l-socialmk mt-3">
                  <h3 className="mb-3">Follow Us on</h3>
                  <div className="social">
                    <ul>
                      <li>
                        <a className="icon fb" href="#facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a className="icon tw" href="#twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a className="icon gp" href="#google-plus">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* //social icons */}
              </div>
            </div>
            {/* //quick links */}
          </div>
        </div>
        {/* //footer third section */}
        {/* footer fourth section */}
        <div className="agile-sometext py-5">
          <div className="container">
            {/* brands */}
            <div className="sub-some">
              <h5 className="font-weight-bold mb-1">
                Electronics and Accessories :
              </h5>
              <ul>
                {electronicsandAccessories.length > 0 ? (
                  electronicsandAccessories.map((category, index) => (
                    <li className="m-sm-1">
                      <Link
                        key={index}
                        className="dropdown-item border-right pr-2 pt-0 pb-0 mb-3 pl-0"
                        to={`/category/${category}`}
                      >
                        {category.charAt(0).toUpperCase() +
                          category.slice(1).toLowerCase()}
                      </Link>
                    </li>
                  ))
                ) : (
                  <span className="dropdown-item">No Categories</span>
                )}
              </ul>
            </div>
            <div className="sub-some">
              <h5 className="font-weight-bold mb-1">
                Beauty and Personal Care :
              </h5>
              <ul>
                {beautyandPersonalCare.length > 0 ? (
                  beautyandPersonalCare.map((category, index) => (
                    <li className="m-sm-1">
                      <Link
                        key={index}
                        className="dropdown-item border-right pr-2 pt-0 pb-0 mb-3 pl-0"
                        to={`/category/${category}`}
                      >
                        {category.charAt(0).toUpperCase() +
                          category.slice(1).toLowerCase()}
                      </Link>
                    </li>
                  ))
                ) : (
                  <span className="dropdown-item">No Categories</span>
                )}
              </ul>
            </div>

            <div className="sub-some">
              <h5 className="font-weight-bold mb-1">Fashion :</h5>
              <ul>
                {fashion.length > 0 ? (
                  fashion.map((category, index) => (
                    <li className="m-sm-1">
                      <Link
                        key={index}
                        className="dropdown-item border-right pr-2 pt-0 pb-0 mb-3 pl-0"
                        to={`/category/${category}`}
                      >
                        {category.charAt(0).toUpperCase() +
                          category.slice(1).toLowerCase()}
                      </Link>
                    </li>
                  ))
                ) : (
                  <span className="dropdown-item">No Categories</span>
                )}
              </ul>
            </div>
            <div className="sub-some">
              <h5 className="font-weight-bold mb-1">Home and Lifestyle :</h5>
              <ul>
                {homeAndLifestyle.length > 0 ? (
                  homeAndLifestyle.map((category, index) => (
                    <li className="m-sm-1">
                      <Link
                        key={index}
                        className="dropdown-item border-right pr-2 pt-0 pb-0 mb-3 pl-0"
                        to={`/category/${category}`}
                      >
                        {category.charAt(0).toUpperCase() +
                          category.slice(1).toLowerCase()}
                      </Link>
                    </li>
                  ))
                ) : (
                  <span className="dropdown-item">No Categories</span>
                )}
              </ul>
            </div>
            {/* //brands */}
            {/* payment */}
            <div className="sub-some child-momu mt-4">
              <h5 className="font-weight-bold mb-3">Payment Method</h5>
              <ul>
                <li>
                  <img src="images/pay2.png" alt />
                </li>
                <li>
                  <img src="images/pay5.png" alt />
                </li>
                <li>
                  <img src="images/pay1.png" alt />
                </li>
                <li>
                  <img src="images/pay4.png" alt />
                </li>
                <li>
                  <img src="images/pay6.png" alt />
                </li>
                <li>
                  <img src="images/pay3.png" alt />
                </li>
                <li>
                  <img src="images/pay7.png" alt />
                </li>
                <li>
                  <img src="images/pay8.png" alt />
                </li>
                <li>
                  <img src="images/pay9.png" alt />
                </li>
              </ul>
            </div>
            {/* //payment */}
          </div>
        </div>
        {/* //footer fourth section (text) */}
      </footer>

      <div className="copy-right py-3">
        <div className="container">
          {/* <p className="text-center ">
            © 2021 Electronics Mart. All rights reserved | Design by
            <a href="http://w3layouts.com/"> W3layouts.</a>
          </p> */}
        </div>
      </div>
    </>
  );
}
