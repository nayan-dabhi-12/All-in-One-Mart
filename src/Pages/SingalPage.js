import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "./ApiData"; // Adjust the path if needed

function SingleProductPage() {
  const { id } = useParams(); // Extract product ID from URL
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product data.</div>;

  return (
    <>
      {/* Single Page */}
      <div className="banner-bootom-w3-agileits py-5">
        <div className="container py-md-5 py-4">
          <div className="row">
            <div className="col-lg-5 col-md-8 single-right-left">
              <div className="grid images_3_of_2">
                <div className="flexslider">
                  <ul className="slides">
                    {product.images.map((image, index) => (
                      <li key={index} data-thumb={image}>
                        <div className="thumb-image">
                          <img
                            src={image}
                            data-imagezoom="true"
                            className="img-fluid"
                            alt={product.title}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 single-right-left simpleCart_shelfItem">
              <h3 className="mb-3">{product.title}</h3>
              <p className="mb-3">
                <span className="item_price">${product.price.toFixed(2)}</span>
                {product.discountPercentage > 0 && (
                  <del className="mx-2 font-weight-light">
                    $
                    {(
                      product.price *
                      (1 + product.discountPercentage / 100)
                    ).toFixed(2)}
                  </del>
                )}
                <label>{product.shippingInformation}</label>
              </p>
              <div className="single-infoagile">
                <ul>
                  <li className="mb-3">
                    <b>Categoery:</b> {product.category}
                  </li>
                  <li className="mb-3">
                    <b>Rating:</b> {product.rating}
                  </li>
                  <li className="mb-3">
                    <b>Stock Status:</b> {product.availabilityStatus}
                  </li>
                  <li className="mb-3">
                    <b>Brand:</b> {product.brand}
                  </li>
                </ul>
              </div>
              <div className="product-single-w3l">
                <p className="my-3">
                  <i className="far fa-hand-point-right mr-2" />
                  {product.warrantyInformation}
                </p>
                <ul className="pb-2">
                  <li className="mb-1"><b>Discription: </b>{product.description}</li>
                  <li className="mb-1">
                    <b>Return Policy:</b> {product.returnPolicy}
                  </li>
                  <li className="mb-1"><b>Barcode:</b> {product.meta.barcode}</li>
                </ul>
              </div>
              <div className="reviews product-single-w3l">
                <p className="my-sm-4 my-3">
                  <i className="far fa-hand-point-right mr-2" />
                  Reviews
                </p>
                {product.reviews.map((review, index) => (
                  <div key={index} className="review">
                    <ul>
                      <li className="mb-3">
                        <b>{review.reviewerName}</b> {product.category}
                      </li>
                      <li className="mb-3">
                        <b>Rating:</b> {review.rating} / 5
                      </li>
                    </ul>
                  </div>
                ))}
              </div>

              <div className="occasion-cart">
                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                  <form action="#" method="post">
                    <fieldset>
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input type="hidden" name="business" defaultValue=" " />
                      <input
                        type="hidden"
                        name="item_name"
                        defaultValue={product.title}
                      />
                      <input
                        type="hidden"
                        name="amount"
                        defaultValue={product.price}
                      />
                      <input
                        type="hidden"
                        name="discount_amount"
                        defaultValue={product.discountPercentage}
                      />
                      <input
                        type="hidden"
                        name="currency_code"
                        defaultValue="USD"
                      />
                      <input type="hidden" name="return" defaultValue=" " />
                      <input
                        type="hidden"
                        name="cancel_return"
                        defaultValue=" "
                      />
                      <input
                        type="submit"
                        name="submit"
                        defaultValue="Add to cart"
                        className="btn btn-style"
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //Single Page --> */}
      
    </>
  );
}

export default SingleProductPage;
