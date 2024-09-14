import React, { useEffect } from "react";
import {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
} from "./ApiData";
import { Link } from "react-router-dom";
import $ from "jquery"; // Make sure jQuery is installed and imported

export default function Home() {
  const { data: productData } = useGetAllProductsQuery();
  const { data: categoryData } = useGetProductsByCategoryQuery();

  const limitedProducts = productData?.products?.slice(0, 12) || [];
  const limitedProducts2 = productData?.products?.slice(0) || [];
  const categories = categoryData || [];

  useEffect(() => {
    function scroller() {
      var scroll = $("div.scroll"); // Sets the div with a class of scroll as a variable
      var height = scroll.height(); // Gets the height of the scroll div
      var topAdj = -height - 100;
      /* '-height' turns the height of the UL into a negative #,
       * '- 50' subtracts an extra 50 pixels from the height of
       * the div so that it moves the trail of the UL higher to
       * the top of the div before the animation ends
       */
      scroll.animate(
        {
          top: [topAdj, "linear"],
        },
        50000,
        function () {
          scroll.css("top", 0); // Resets the top position of the Ul for the next cycle
          scroller(); // Recalls the animation cycle to begin.
        }
      );
    }

    scroller(); // Start the scroll animation when the component mounts
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      {/* <!-- banner --> */}
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* Indicators*/}
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item item1 active">
              <div className="banner-style d-flex align-items-center">
                <div className="container">
                  <div className="w3l-space-banner">
                    <div
                      className="carousel-caption-banner"
                      style={{ maxWidth: 500 }}
                    >
                      <p>
                        Get flat
                        <span>10%</span> Cashback
                      </p>
                      <h3 className="mt-2">Exciting Deals on Televisions</h3>
                      <Link className="btn btn-style mt-4" to="/products">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item item2">
              <div className="banner-style d-flex align-items-center">
                <div className="container">
                  <div className="w3l-space-banner">
                    <div
                      className="carousel-caption-banner"
                      style={{ maxWidth: 500 }}
                    >
                      <p>
                        Top
                        <span>Brands</span> lowest <span>Prices</span>
                      </p>
                      <h3 className="mt-2">Wide Range of Mobile Phones!</h3>
                      <Link className="btn btn-style mt-4" to="/products">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item item3">
              <div className="banner-style d-flex align-items-center">
                <div className="container">
                  <div className="w3l-space-banner">
                    <div
                      className="carousel-caption-banner"
                      style={{ maxWidth: 500 }}
                    >
                      <p>
                        Get up to
                        <span>25%</span> Off
                      </p>
                      <h3 className="mt-2">Smart Watches New Collection!</h3>
                      <Link className="btn btn-style mt-4" to="/products">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item item4">
              <div className="banner-style d-flex align-items-center">
                <div className="container">
                  <div className="w3l-space-banner">
                    <div
                      className="carousel-caption-banner"
                      style={{ maxWidth: 500 }}
                    >
                      <p>
                        Top
                        <span>Sale</span> Best <span>Deals</span>
                      </p>
                      <h3 className="mt-2">Fresh, Healthy Air Everywhere!</h3>
                      <Link className="btn btn-style mt-4" to="/products">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="ads-grid py-5">
        <div className="container py-md-5 py-4">
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span className="font-weight-normal">Our</span>{" "}
            <span style={{ color: "#FDB03D" }}>New</span> Products
          </h3>
          <div className="row">
            {/* Sidebar for categories */}
            <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0 order-lg-first order-last">
              <div className="side-bar p-sm-4 p-3">
                <div className="customer-rev left-side py-2">
                  <h3 className="agileits-sear-head mb-3">All Categories</h3>
                  <ul>
                    {categories.length > 0 ? (
                      categories.map((category, index) => (
                        <li key={index}>
                          <Link to={`/category/${category}`}>
                            {category.toUpperCase()}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>No categories available</li>
                    )}
                  </ul>
                </div>
                <div className="f-grid py-2">
                  <h3 className="agileits-sear-head mb-3">Best Seller</h3>
                  <div className="box-scroll">
                    <div className="scroll">
                      <div className="row">
                        {limitedProducts2.map((product) => (
                          <>
                            <div className="col-lg-3 col-sm-2 col-3 left-mar">
                              <img
                                src={product.images[0]}
                                alt={product.title}
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                              <Link to={`/singlePage/${product.id}`}>
                                {product.title}
                              </Link>
                              <Link
                                to={`/singlePage/${product.id}`}
                                className="price-mar mt-2"
                              >
                                {product.price}
                              </Link>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="agileinfo-ads-display col-lg-9 order-lg-last order-first">
              <div className="wrapper">
                <div className="product-sec1 px-lg-4">
                  <div className="row">
                    {limitedProducts.map((product) => {
                      return (
                        <div
                          className="col-md-4 col-sm-6 product-men mb-4"
                          key={product.id}
                        >
                          <div
                            className="men-pro-item simpleCart_shelfItem"
                            style={{ height: "300px" }}
                          >
                            <div className="men-thumb-item text-center">
                              <img
                                src={product.images[0]}
                                alt={product.title}
                                className="img-fluid"
                                style={{
                                  maxHeight: "120px",
                                  objectFit: "contain",
                                }}
                              />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <Link
                                    to={`/singlePage/${product.id}`}
                                    className="link-product-add-cart"
                                  >
                                    Quick View
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="item-info-product text-center mt-2">
                              <h4 className="pt-1" style={{ fontSize: "16px" }}>
                                <Link to={`/singlePage/${product.id}`}>
                                  {product.title}
                                </Link>
                              </h4>
                              <div className="info-product-price">
                                <span className="item_price">
                                  ${product.price.toFixed(2)}
                                </span>
                                {product.discountPercentage > 0 && (
                                  <del className="ml-2">
                                    $
                                    {(
                                      product.price *
                                      (1 + product.discountPercentage / 100)
                                    ).toFixed(2)}
                                  </del>
                                )}
                              </div>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input
                                      type="hidden"
                                      name="cmd"
                                      value="_cart"
                                    />
                                    <input type="hidden" name="add" value="1" />
                                    <input
                                      type="hidden"
                                      name="business"
                                      value=" "
                                    />
                                    <input
                                      type="hidden"
                                      name="item_name"
                                      value={product.title}
                                    />
                                    <input
                                      type="hidden"
                                      name="amount"
                                      value={product.price}
                                    />
                                    <input
                                      type="hidden"
                                      name="discount_amount"
                                      value="1.00"
                                    />
                                    <input
                                      type="hidden"
                                      name="currency_code"
                                      value="USD"
                                    />
                                    <input
                                      type="hidden"
                                      name="return"
                                      value=" "
                                    />
                                    <input
                                      type="hidden"
                                      name="cancel_return"
                                      value=" "
                                    />
                                    <input
                                      type="submit"
                                      name="submit"
                                      value="Add to cart"
                                      className="btn btn-style btn-style-secondary mt-3"
                                    />
                                  </fieldset>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
