import React from "react";

export default function Checkout() {
  return (
    <>
      {/* <!-- banner-2 --> */}
      <div className="page-head_agile_info_w3l inner-checkout-page">
        <div className="container py-5">
          <h3 className="title-style text-white pt-5">
            <span>Checkout</span> Page
          </h3>
          <ul className="w3_short pt-3 pb-5">
            <li>
              <a href="index.html" className="text-white">
                Home
              </a>
              <i
                className="fa fa-angle-right mx-2 text-white"
                aria-hidden="true"
              />
            </li>
            <li className="text-light">Checkout</li>
          </ul>
        </div>
      </div>

      {/* <!-- //banner-2 -->
	<!-- page --> */}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb"></div>
      </div>

      {/* <!-- //page --> */}
      <div
        style={{ margin: "8px auto", display: "block", textAlign: "center" }}
      />

      {/* <!-- checkout page --> */}
      <div className="privacy py-5">
        <div className="container py-md-5 py-4">
          <div className="checkout-right">
            <h4 className="mb-sm-4 mb-3">
              Your shopping cart contains:
              <span>3 Products</span>
            </h4>
            <div className="table-responsive">
              <table className="timetable_sub">
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>Product</th>
                    <th>Quality</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="rem1">
                    <td className="invert">1</td>
                    <td className="invert-image">
                      <a href="single.html">
                        <img
                          src="images/k1.png"
                          alt=" "
                          className="img-responsive"
                        />
                      </a>
                    </td>
                    <td className="invert">
                      <div className="quantity">
                        <div className="quantity-select">
                          <div className="entry value-minus">&nbsp;</div>
                          <div className="entry value">
                            <span>1</span>
                          </div>
                          <div className="entry value-plus active">&nbsp;</div>
                        </div>
                      </div>
                    </td>
                    <td className="invert">Samsung Galaxy F62</td>
                    <td className="invert">$499.00</td>
                    <td className="invert">
                      <div className="rem">
                        <div className="close1"> </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="rem2">
                    <td className="invert">2</td>
                    <td className="invert-image">
                      <a href="single2.html">
                        <img
                          src="images/k2.png"
                          alt=" "
                          className="img-responsive"
                        />
                      </a>
                    </td>
                    <td className="invert">
                      <div className="quantity">
                        <div className="quantity-select">
                          <div className="entry value-minus">&nbsp;</div>
                          <div className="entry value">
                            <span>1</span>
                          </div>
                          <div className="entry value-plus active">&nbsp;</div>
                        </div>
                      </div>
                    </td>
                    <td className="invert">Refrigerator 3Star</td>
                    <td className="invert">$699.00</td>
                    <td className="invert">
                      <div className="rem">
                        <div className="close2"> </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="rem3">
                    <td className="invert">3</td>
                    <td className="invert-image">
                      <a href="single.html">
                        <img
                          src="images/k4.png"
                          alt=" "
                          className="img-responsive"
                        />
                      </a>
                    </td>
                    <td className="invert">
                      <div className="quantity">
                        <div className="quantity-select">
                          <div className="entry value-minus">&nbsp;</div>
                          <div className="entry value">
                            <span>1</span>
                          </div>
                          <div className="entry value-plus active">&nbsp;</div>
                        </div>
                      </div>
                    </td>
                    <td className="invert">FOOLPROOF Cover</td>
                    <td className="invert">$299.00</td>
                    <td className="invert">
                      <div className="rem">
                        <div className="close3"> </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="checkout-left">
            <div className="address_form_agile mt-sm-5 mt-4">
              <h4 className="mb-sm-4 mb-3">Add a new Details</h4>
              <form
                action="https://demo.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/payment.html"
                method="post"
                className="creditly-card-form agileinfo_form"
              >
                <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                  <div className="information-wrapper">
                    <div className="first-row">
                      <div className="controls form-group">
                        <input
                          className="billing-address-name form-control"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="w3_agileits_card_number_grids">
                        <div className="w3_agileits_card_number_grid_left form-group">
                          <div className="controls">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mobile Number"
                              name="number"
                              required
                            />
                          </div>
                        </div>
                        <div className="w3_agileits_card_number_grid_right form-group">
                          <div className="controls">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Landmark"
                              name="landmark"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="controls form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Town/City"
                          name="city"
                          required
                        />
                      </div>
                      <div className="controls form-group">
                        <select className="option-w3ls">
                          <option>Select Address type</option>
                          <option>Office</option>
                          <option>Home</option>
                          <option>Commercial</option>
                        </select>
                      </div>
                    </div>
                    <button className="submit check_out btn">
                      Delivery to this Address
                    </button>
                  </div>
                </div>
              </form>
              <div className="checkout-right-basket">
                <a href="payment.html">
                  Make a Payment
                  <span className="far fa-hand-point-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- //checkout page --> */}
    </>
  );
}
