import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Create_Invitation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: null,
    };
  }

  handleRadioChange = (value) => {
    this.setState({ selectedRadio: value });
  };

  render() {
    return (
      <div className="create-invitation">
        <div className="row m-0">
          <div className="col-md-7 d-flex flex-column vh-100">
            <div className="create-invitation-form-container pl-20 pt-20 vh-100 position-relative">
              <div className="create-invitation-form-monday-logo">
                <img
                  src="https://cdn.monday.com/images/logos/logo-full-big.png"
                  alt=""
                  style={{ width: "200px" }}
                />
              </div>

              <form className="create-invitation-form-main">
                <div className="form-title">
                  <h1 className="text-2xl pt-20 pb-10">
                    Hey there, what brings you here today?
                  </h1>
                </div>
                <div className="form-input-container create-invitation-form-container">
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="create-invitation-radio"
                      id="create-invitation-radio-work"
                      value="1"
                      onChange={() => this.handleRadioChange("1")}
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Work
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="create-invitation-radio"
                      id="create-invitation-radio-personal"
                      value="2"
                      onChange={() => this.handleRadioChange("2")}
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Personal
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="create-invitation-radio"
                      id="create-invitation-radio-school"
                      value="3"
                      onChange={() => this.handleRadioChange("3")}
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      School
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="create-invitation-radio"
                      id="create-invitation-radio-nonprofits"
                      value="4"
                      onChange={() => this.handleRadioChange("4")}
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Nonprofits
                    </label>
                  </div>
                </div>

                {/* Sub-form */}
                {this.state.selectedRadio === "1" && (
                  <div className="form-input-container create-invitation-sub-form-container">
                    <div className="form-title">
                      <h1 className="text-2xl pt-20 pb-10">
                        What best describes your current role?
                      </h1>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-business-owner"
                        value="1-1"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Business owner
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-team-leader"
                        value="1-2"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Team leader
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-team-member"
                        value="1-3"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Team member
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-freelancer"
                        value="1-4"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Freelancer
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-director"
                        value="1-5"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Director
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-c-level"
                        value="1-6"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        C-Level
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-vp"
                        value="1-7"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        VP
                      </label>
                    </div>
                  </div>
                )}

                {this.state.selectedRadio === "3" && (
                  <div className="form-input-container create-invitation-sub-form-container">
                    <div className="form-title">
                      <h1 className="text-2xl pt-20 pb-10">
                        What best describes your current role?
                      </h1>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-undergraduate-student"
                        value="3-1"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Undergraduate student
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-graduate-student"
                        value="3-2"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Graduate student
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-faculty-member"
                        value="3-3"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Faculty member
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-other"
                        value="3-4"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                )}

                {this.state.selectedRadio === "4" && (
                  <div className="form-input-container create-invitation-sub-form-container">
                    <div className="form-title">
                      <h1 className="text-2xl pt-20 pb-10">
                        What best describes your current role?
                      </h1>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-board-member"
                        value="4-1"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Board member
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-executive"
                        value="4-2"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Executive
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-employee"
                        value="4-3"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Employee
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-volunteer"
                        value="4-4"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Volunteer
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-it-staff"
                        value="4-5"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        IT staff
                      </label>
                    </div>
                    <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="create-invitation-radio-sub"
                        id="create-invitation-radio-other"
                        value="4-6"
                      />
                      <label
                        className="form-check-label ml-2"
                        htmlFor="flexRadioDefault1"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                )}
              </form>

              <div className="create-invitation-continue-button pt-md-20 position-absolute bottom-10 right-10">
                <NavLink className="nav-link" to="/survey">
                  <button
                    type="button"
                    className="btn bg-blue-500 text-white"
                    style={{ width: "150px" }}
                  >
                    Continue <i className="fa-solid fa-greater-than pl-4"></i>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-5 p-0">
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png"
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
