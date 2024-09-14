import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchProductsQuery } from "./ApiData";

function SearchResults() {
  const { searchQuery } = useParams(); // Get the query from URL parameters
  const { data, error, isLoading } = useSearchProductsQuery(searchQuery);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  if (!data?.products?.length) return <p>No products found</p>; // Handle empty data

  return (
    <div>
      <div className="ads-grid py-5">
        <div className="container-fluid py-md-5 py-4">
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span className="font-weight-normal">Our</span> New Products
          </h3>
          <div className="row justify-content-center">
            {/* Product List */}
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="product-sec1 px-lg-4">
                  <div className="row">
                    {data?.products?.map((product) => (
                      <div className="col-md-3 col-sm-6 product-men mb-4" key={product.id}>
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
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out mt-2">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="btn btn-style btn-style-secondary mt-2"
                                    style={{ padding: "6px 18px" }}
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
