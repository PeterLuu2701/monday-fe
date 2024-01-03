import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Survey extends Component {
  render() {
    return (
      <div className="survey">
        <div className="row m-0">
          <div className="col-md-7 d-flex flex-column vh-100">
            <div className="survey-form-container pl-20 pt-20 vh-100 position-relative">
              <div className="survey-form-monday-logo">
                <img
                  src="https://cdn.monday.com/images/logos/logo-full-big.png"
                  alt=""
                  style={{ width: "200px" }}
                />
              </div>

              <form className="survey-form-main">
                <div className="form-title">
                  <h1 className="text-2xl pt-20 pb-10">
                    One last question, how did you hear about us?
                  </h1>
                </div>
                <div className="form-input-container survey-form-container">
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-tv"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      TV / Streaming service
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-youtube-ad"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      YouTube ad
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-software-review-sites"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Sofyware review sites
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-search-engine"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Search engine (Google, Bing, etc,.)
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-search-linkedin"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      LinkedIn
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-search-billboard"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Billboad / Public transit ad
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-search-social-media"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Social media (Facebook, Instagram, Reddit, etc,.)
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-search-consultant"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Consultant
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-search-audio"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Audio ad (Podcast, Spotify)
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-search-friend"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Friend / Colleague
                    </label>
                  </div>
                  <div className="inline-block border border-solid border-2 p-2 rounded-3xl mr-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="survey-checkbox-search-other"
                      value=""
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </form>

              <div className="create-continue-button pt-md-20 position-absolute bottom-10 left-10">
                <NavLink className="nav-link" to="/create_invitation">
                  <button
                    type="button"
                    className="btn bg-gray-500 text-white"
                    style={{ width: "150px" }}
                  >
                    <i className="fa-solid fa-less-than pr-4"></i> Back
                  </button>
                </NavLink>
              </div>
              <div className="create-continue-button pt-md-20 position-absolute bottom-10 right-10">
                <NavLink className="nav-link" to="/invitation">
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
              src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png"
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
