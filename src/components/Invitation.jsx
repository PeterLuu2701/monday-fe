import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Invitation extends Component {
  render() {
    return (
      <div className="invitation">
        <div className="row m-0">
          <div className="col-md-7 d-flex flex-column vh-100">
            <div className="invitation-form-container pl-20 pt-20 vh-100 position-relative">
              <div className="invitation-form-monday-logo">
                <img
                  src="https://cdn.monday.com/images/logos/logo-full-big.png"
                  alt=""
                  style={{ width: "200px" }}
                />
              </div>

              <form className="invitation-form-main">
                <div className="form-title">
                  <h1 className="text-2xl pt-20 pb-1">Invite your teammates</h1>
                  <h3 className="text-m pt-2 pb-10">
                    Collaborate with your team to get the most out of monday.com
                  </h3>
                </div>
                <div className="form-input-container survey-form-container">
                  <div className="form-item pb-2" style={{ display: "flex" }}>
                    <input
                      type="text"
                      className="form-control m-0"
                      id="inputFullNameToCreate"
                      aria-describedby="fullName"
                      placeholder="Add email here"
                      style={{ width: "500px", marginRight: "10px" }}
                    />
                    <div className="dropdown border-1">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Admin
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Admin
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Member
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-item pb-2" style={{ display: "flex" }}>
                    <input
                      type="text"
                      className="form-control m-0"
                      id="inputFullNameToCreate"
                      aria-describedby="fullName"
                      placeholder="Add email here"
                      style={{ width: "500px", marginRight: "10px" }}
                    />
                    <div className="dropdown border-1">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Admin
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Admin
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Member
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn bg-white-500 text-gray hover:bg-gray"
                  style={{ width: "150px" }}
                >
                  + Add another
                </button>
              </form>

              <div className="create-continue-button pt-md-20 position-absolute bottom-10 left-10">
                <NavLink className="nav-link" to="/create_invitation">
                  <button
                    type="button"
                    className="btn bg-white-500 text-gray hover:bg-gray-500 hover:text-white"
                    style={{ width: "150px" }}
                  >
                    Remind me later
                  </button>
                </NavLink>
              </div>
              <div className="create-continue-button pt-md-20 position-absolute bottom-10 right-10">
                <NavLink className="nav-link" to="/invitation">
                  <button
                    type="button"
                    className="btn bg-gray-300 text-white"
                    style={{ width: "150px" }}
                  >
                    Invite your team
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-5 p-0">
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png"
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
