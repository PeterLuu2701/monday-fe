import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Create extends Component {
  render() {
    return (
      <div className="create">
        <div className="row vh-100 m-0">
          <div className="col-7 d-flex flex-column vh-100">
            <div className="create-form-container pl-20 pt-20 vh-100 position-relative">
              <div className="create-form-monday-logo">
                <img
                  src="https://cdn.monday.com/images/logos/logo-full-big.png"
                  alt=""
                  style={{ width: "200px" }}
                />
              </div>

              <form className="create-form-main">
                <div className="form-title">
                  <h1 className="text-2xl pt-20 pb-10">Create your account</h1>
                </div>
                <div className="form-input-container">
                  <div className="form-item pb-4">
                    <h3 className="text-base pb-1">Full Name</h3>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFullNameToCreate"
                      aria-describedby="fullName"
                      placeholder="Input your full name"
                      style={{ width: "500px" }}
                    ></input>
                  </div>
                  <div className="form-item pb-4">
                    <h3 className="text-base pb-1">Password</h3>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmailToSignUp"
                      aria-describedby="emailHelp"
                      placeholder="name@company.com"
                      style={{ width: "500px" }}
                    ></input>
                  </div>
                  <div className="form-item pb-4">
                    <h3 className="text-base pb-1">Account Name</h3>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmailToSignUp"
                      aria-describedby="emailHelp"
                      placeholder="name@company.com"
                      style={{ width: "500px" }}
                    ></input>
                  </div>
                </div>
              </form>

              <div className="create-continue-button pt-20 position-absolute bottom-10 right-10">
                <NavLink className="nav-link" to="/invitation">
                  <button
                    type="button"
                    className="btn bg-blue-500 text-white"
                    style={{ width: "150px" }}
                  >
                    Continue <i class="fa-solid fa-greater-than pl-4"></i>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div
            className="col-5 p-0"
            style={{ height: "100vh", overflow: "hidden" }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png"
              alt=""
              className="img-fluid p-0"
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
