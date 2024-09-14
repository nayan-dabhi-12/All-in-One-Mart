import React from "react";

export default function Register() {
  return (
    <>
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
                <span aria-hidden="true">&times;</span>
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
