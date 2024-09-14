import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      {/* <!-- banner-2 --> */}
      <div className="page-head_agile_info_w3l inner-contact-page">
        <div className="container py-5">
          <h3 className="title-style text-white pt-5">
            Contact with <span style={{ color: "#FDB03D" }}>Us</span>
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
            <li className="text-light">Contact Us</li>
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
      ></div>

      {/* <!---728x90---> */}

      {/* <!-- contact page --> */}
      <section className="w3l-contact py-5" id="contact">
        <div className="container py-md-5 py-4">
          <div
            className="mx-auto pt-lg-4 pt-md-5 pt-4"
            style={{ maxWidth: 1000 }}
          >
            <div className="row contact-block">
              <div className="col-md-5 contact-left">
                <h3 className="title-style font-weight-bold mb-4">
                  Connect Us
                </h3>
                <div className="cont-details">
                  <div className="d-flex contact-grid">
                    <div className="cont-left text-center mr-3">
                      <span className="fa fa-globe" />
                    </div>
                    <div className="cont-right">
                      <h6>Company Address</h6>
                      <p>10001, 5th Avenue, 12202 street, USA.</p>
                    </div>
                  </div>
                  <div className="d-flex contact-grid mt-4 pt-lg-2">
                    <div className="cont-left text-center mr-3">
                      <span className="fa fa-phone" />
                    </div>
                    <div className="cont-right">
                      <h6>Call Us</h6>
                      <p>
                        <a href="tel:+1(21) 234 4567">+1(21) 112 7368</a>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex contact-grid mt-4 pt-lg-2">
                    <div className="cont-left text-center mr-3">
                      <span className="fa fa-envelope-open" />
                    </div>
                    <div className="cont-right">
                      <h6>Email Us</h6>
                      <p>
                        <a href="mailto:example@mail.com" className="mail">
                          example@mail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex contact-grid mt-4 pt-lg-2">
                    <div className="cont-left text-center mr-3">
                      <span className="fa fa-headphones" />
                    </div>
                    <div className="cont-right">
                      <h6>Customer Support</h6>
                      <p>
                        <a href="mailto:info@support.com" className="mail">
                          info@support.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 contact-right mt-md-0 mt-4">
                <form
                  action="https://sendmail.w3layouts.com/submitForm"
                  method="post"
                  className="signin-form"
                >
                  <div className="input-grids">
                    <input
                      type="text"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Your Name*"
                      className="contact-input"
                      required
                    />
                    <input
                      type="email"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Your Email*"
                      className="contact-input"
                      required
                    />
                    <input
                      type="text"
                      name="w3lSubect"
                      id="w3lSubect"
                      placeholder="Subject*"
                      className="contact-input"
                      required
                    />
                    <input
                      type="text"
                      name="w3lWebsite"
                      id="w3lWebsite"
                      placeholder="Website URL*"
                      className="contact-input"
                      required
                    />
                  </div>
                  <div className="form-input">
                    <textarea
                      name="w3lMessage"
                      id="w3lMessage"
                      placeholder="Type your message here*"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <button className="btn btn-style">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- map --> */}
      <div className="map-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
          width="100%"
          height={400}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>

      {/* <!-- //contact page --> */}
      <div
        style={{ margin: "8px auto", display: "block", textAlign: "center" }}
      ></div>

      {/* <!---728x90---> */}
    </>
  );
}
