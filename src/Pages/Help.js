import React from "react";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <>
      {/* <!-- banner-2 --> */}
      <div className="page-head_agile_info_w3l inner-contact-page">
        <div className="container py-5">
          <h3 className="title-style text-white pt-5">
            Need some <span>Help?</span>
          </h3>
          <ul className="w3_short pt-3 pb-5">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
              <i
                className="fa fa-angle-right mx-2 text-white"
                aria-hidden="true"
              />
            </li>
            <li className="text-light">Help</li>
          </ul>
        </div>
      </div>
      {/* <!-- page --> */}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb"></div>
      </div>
      {/* <!-- //page --> */}
      <div
        style={{ margin: "8px auto", display: "block", textAlign: "center" }}
      >
        {/*-728x90-*/}
      </div>
      {/* <!-- //banner-2 --> */}
      {/* help */}
      <div className="faqs-w3l py-5">
        <div className="container py-md-5 py-4">
          {/* help content */}
          <div className="wthree-help mb-sm-5 mb-4">
            <div className="agile-left-help">
              <h3 className="w3-head mb-4">How can we help you?</h3>
              <form action="#" method="get">
                <textarea
                  placeholder="Type keywords to find answers"
                  name="Message"
                  required
                  defaultValue={""}
                />
                <button className="btn btn-style mt-4">Submit Now</button>
              </form>
              <h5 className="my-sm-4 my-3">OR</h5>
              <Link
                className="btn btn-style btn-style-secondary"
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* //help content */}
          {/* Faqs */}
          <h3 className="w3-head mb-2">Top 10 Frequently asked questions</h3>
          <div className="faq-w3agile">
            <ul className="faq pl-4">
              <li className="item1 mt-4 pl-2">
                <a href="#" title="click here">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tempor vehicula ipsum nec ?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="item2 mt-4 pl-2">
                <a href="#" title="click here">
                  The standard Lorem Ipsum passage Etiam faucibus viverra libero
                  vel efficitur. Ut semper nisl ut laoreet ultrices ?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      {" "}
                      Tincidunt ut laoreet dolore At vero eos et Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod consectetuer adipiscing elit, sed
                      diam nonummy nibh euismod accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="item3 mt-4 pl-2">
                <a href="#" title="click here">
                  Consectetuer adipiscing elit Etiam faucibus viverra libero vel
                  efficitur. Ut semper nisl ut laoreet ultrices?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      Dincidunt ut laoreet dolore At vero eos et Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod consectetuer adipiscing elit, sed
                      diam nonummy nibh euismod accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="item4 mt-4 pl-2">
                <a href="#" title="click here">
                  Sed diam nonummy nibh euismod Etiam faucibus viverra libero
                  vel efficitur. Ut semper nisl ut laoreet ultrices?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      At vero eos et Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="item5 mt-4 pl-2">
                <a href="#" title="click here">
                  Euismod tincidunt laoreet Etiam faucibus viverra libero vel
                  efficitur ?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      At vero eos et Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="item6 mt-4 pl-2">
                <a href="#" title="click here">
                  Voluptas sit aspernatur aut Ut semper nisl ut laoreet ultrices
                  ?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      At vero eos et Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="item7 mt-4 pl-2">
                <a href="#" title="click here">
                  Donec ut quam ligula feugiat Ut semper nisl ut laoreet
                  ultrices ?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      At vero eos et Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="item8 mt-4 pl-2">
                <a href="#" title="click here">
                  The standard Lorem Ipsum Ut semper nisl ut laoreet ultrices
                  passage ?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      Lorem ipsum dolor sit amet At vero eos et Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod consectetuer adipiscing elit, sed
                      diam nonummy nibh euismod accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="item9 mt-4 pl-2">
                <a href="#" title="click here">
                  Consectetuer adipiscing Ut semper nisl ut laoreet ultrices
                  elit ?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      Lorem ipsum dolor sit amet At vero eos et Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod consectetuer adipiscing elit, sed
                      diam nonummy nibh euismod accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="item10 mt-4 pl-2">
                <a href="#" title="click here">
                  Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh
                  euismod ?
                </a>
                <ul>
                  <li className="subitem1">
                    <p>
                      Consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* //Faqs */}
        </div>
      </div>
      {/* //help */}
      <div>
        {/* middle section */}
        <div className="join-w3l1 py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <div className="row">
              <div className="col-lg-6">
                <Link to="/products">
                  <div className="join-agile text-left p-4">
                    <div className="row">
                      <div className="col-sm-7 offer-name">
                        <h6>New Collections, New Trendy</h6>
                        <h4 className="mb-3">Smart Watches</h4>
                        <p>Sale up to 25% off all in store</p>
                      </div>
                      <div className="col-sm-5 offerimg-w3l">
                        <img src="images/off1.png" alt className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-4">
                <Link to="/products">
                  <div className="join-agile text-left p-4">
                    <div className="row ">
                      <div className="col-sm-7 offer-name">
                        <h6>Top Brands, lowest Prices</h6>
                        <h4 className="mb-3">Smart Phones</h4>
                        <p>Free shipping order over $100</p>
                      </div>
                      <div className="col-sm-5 offerimg-w3l">
                        <img src="images/off2.png" alt className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* middle section */}
        <div
          style={{ margin: "8px auto", display: "block", textAlign: "center" }}
        >
          {/*-728x90-*/}
        </div>
      </div>
    </>
  );
}
