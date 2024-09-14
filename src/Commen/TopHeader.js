import React from "react";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <>
      <div className="agile-main-top">
        <div className="container">
          <div className="row main-top-w3l py-2">
            <div className="col-lg-3 col-sm-4 header-most-top">
              <p className=" text-lg-left text-center">Welcome to our shop!</p>
            </div>
            <div className="col-lg-9 col-sm-8 header-right ml-auto text-sm-right text-center">
              {/* header lists */}
              <ul className="top-header-lists">
                <li class="mx-3">
                  <a
                    href="#login"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class=""
                  >
                    <i class="fas fa-sign-in-alt mr-1"></i> Log In{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#register"
                    data-toggle="modal"
                    data-target="#exampleModal2"
                    class=""
                  >
                    <i class="fas fa-sign-out-alt mr-1"></i>Register{" "}
                  </a>
                </li>
              </ul>
              {/* //header lists */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">Log In</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#" method="post">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="Password"
                    required
                  />
                </div>
                <div className="right-w3l">
                  <input
                    type="submit"
                    className="form-control"
                    defaultValue="Log in"
                  />
                </div>
                <div className="sub-w3l">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlAutosizing"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customControlAutosizing"
                    >
                      Remember me?
                    </label>
                  </div>
                </div>
                <p className="text-center dont-do mt-3">
                  Don't have an account?
                  <a href="#" data-toggle="modal" data-target="#exampleModal2">
                    Register Now
                  </a>
                </p>
                <p className="text-center dont-do mt-3">(Or)</p>
                <div className="social text-center mt-2">
                  <ul className="list-unstyled">
                    <li className="d-inline">
                      <a className="icon fb" href="#facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="d-inline mx-1">
                      <a className="icon tw" href="#twitter">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="d-inline">
                      <a className="icon gp" href="#google-plus">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#" method="post">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="Password"
                    id="password1"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="Confirm Password"
                    id="password2"
                    required
                  />
                </div>
                <div className="right-w3l">
                  <input
                    type="submit"
                    className="form-control"
                    defaultValue="Register"
                  />
                </div>
                <div className="sub-w3l">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlAutosizing2"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customControlAutosizing2"
                    >
                      I Accept to the Terms &amp; Conditions
                    </label>
                  </div>
                </div>
                <p className="text-center dont-do mt-3">(Or)</p>
                <div className="social text-center mt-2">
                  <ul className="list-unstyled">
                    <li className="d-inline">
                      <a className="icon fb" href="#facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="d-inline mx-1">
                      <a className="icon tw" href="#twitter">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="d-inline">
                      <a className="icon gp" href="#google-plus">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
