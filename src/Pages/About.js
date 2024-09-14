import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* <!-- banner-2 --> */}
      <div className="page-head_agile_info_w3l inner-about-page">
        <div className="container py-5">
          <h3 className="title-style text-white pt-5">
            Few Words about <span>Us</span>
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
            <li className="text-light">About Us</li>
          </ul>
        </div>
      </div>

      {/* <!-- //banner-2 --> */}
      {/* <!-- page --> */}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb"></div>
      </div>

      {/* <!-- //page --> */}
      <div
        style={{ margin: "8px auto", display: "block", textAlign: "center" }}
      ></div>

      {/* <!---728x90---> */}
      {/* <!-- about section --> */}
      <section className="w3l-about-2 py-5">
        <div className="container py-md-5 py-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 about-2-secs-left pr-lg-5">
              <h3 className="title-style-2 mb-sm-3 mb-2">
                <span className="font-weight-bold">We Work</span> for your best
                Success
              </h3>
              <p>
                Consectetur adipiscing elit. Aliquam sit amet efficitur
                tortor.Uspendisse efficitur orci urna. In et augue ornare,
                tempor massa in, luctus sapien.
              </p>
              <ul className="list-about-2 list-unstyled mt-sm-4 mt-3">
                <li className="py-1">
                  <i className="fas fa-check-square mr-2" />
                  Ut enim ad minim veniam
                </li>
                <li className="py-2">
                  <i className="fas fa-check-square mr-2" />
                  Quis nostrud exercitation ullamco laboris
                </li>
                <li className="py-1">
                  <i className="fas fa-check-square mr-2" />
                  Nisi ut aliquip ex ea commodo consequat
                </li>
              </ul>
              <div className="mt-4">
                <Link className="btn btn-style" to="/products">
                  View Our Products
                </Link>
              </div>
            </div>
            <div className="col-lg-6 about-2-secs-right mt-lg-0 mt-5">
              <img
                src="images/about2.png"
                alt
                className="img-fluid img-responsive"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- //about section --> */}

      {/* <!-- clients section --> */}
      <div className="w3l-cutomer py-5">
        <div className="container py-md-5 py-4">
          <div style={{ maxWidth: 700 }} className="mb-5">
            <h3 className="title-style-2 text-white mb-2">
              Our <span className="font-weight-bold">Customer </span>
              Says
            </h3>
            <p className="text-light">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque, eaque ipsa quae ab illo inventore.
            </p>
          </div>
          <div className="row content-sec">
            <div className="col-lg-4 col-md-6 testi-sections">
              <div className="testimonials_grid">
                <p className="sub-test">
                  <q>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit.
                  </q>
                </p>
                <div className="d-grid sub-author-con">
                  <div className="testi-img-res">
                    <img src="images/testi2.jpg" alt className="img-fluid" />
                  </div>
                  <div className="testi_grid text-left">
                    <h5>Petey Cruis</h5>
                    <p>Caption Here</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4 testi-sections">
              <div className="testimonials_grid">
                <p className="sub-test">
                  <q>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit.
                  </q>
                </p>
                <div className="d-grid sub-author-con">
                  <div className="testi-img-res">
                    <img src="images/testi1.jpg" alt className="img-fluid" />
                  </div>
                  <div className="testi_grid text-left">
                    <h5>Molive Joe</h5>
                    <p>Caption Here</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4 testi-sections">
              <div className="testimonials_grid">
                <p className="sub-test">
                  <q>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit.
                  </q>
                </p>
                <div className="d-grid sub-author-con">
                  <div className="testi-img-res">
                    <img src="images/testi3.jpg" alt className="img-fluid" />
                  </div>
                  <div className="testi_grid text-left">
                    <h5>Paige Turner</h5>
                    <p>Caption Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- //clients section --> */}
      <div
        style={{ margin: "8px auto", display: "block", textAlign: "center" }}
      ></div>
    </>
  );
}
