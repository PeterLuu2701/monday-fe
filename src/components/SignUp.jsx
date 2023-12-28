import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-up">
        <div className="row vh-100">
          <div className="col-7 d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <div className="sign-up-form-container">
              <div className="sign-up-form-title">
                <h1 class="text-4xl py-2">Welcome to monday.com</h1>
                <h5 class="text-xl py-3 pb-5">
                  Get started - it's free. No credit card needed.
                </h5>
              </div>
            </div>
            <div className="sign-up-by-google">
              <button
                type="button"
                className="btn btn-light d-flex align-items-center justify-content-center text-center border border-gray-300"
                style={{ width: "400px" }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt=""
                  style={{ height: "15px", width: "15px" }}
                />
                <span className="ml-2">Continue with Google</span>
              </button>
            </div>
            <div className="tab d-flex align-items-center pt-4 pb-4">
              <div
                className="sign-up-tab-line"
                style={{ width: 180, height: 1, backgroundColor: "gray" }}
              />
              <div className="mx-2">Or</div>
              <div
                className="sign-up-tab-line"
                style={{ width: 180, height: 1, backgroundColor: "gray" }}
              />
            </div>
            <div className="sign-up-by-email pb-4">
              <input
                type="email"
                className="form-control"
                id="inputEmailToSignUp"
                aria-describedby="emailHelp"
                placeholder="name@company.com"
                style={{ width: "400px" }}
              ></input>
            </div>
            <div className="sign-up-button">
              <button
                type="button"
                className="btn bg-blue-500 text-white"
                style={{ width: "400px" }}
              >
                Continue
              </button>
            </div>
            <div className="sign-up-term-and-policy pt-4 pb-28">
              <h5>By proceeding, you agree to the</h5>
              <h5>
                <a
                  href="https://monday.com/l/legal/tos/"
                  className="text-blue-500"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="https://monday.com/l/privacy/privacy-policy/"
                  className="text-blue-500"
                >
                  Privacy Policy
                </a>
              </h5>
            </div>
            <div className="sign-up-log-in">
              <h5>
                Already have an account?{" "}
                <a
                  href="https://auth.monday.com/auth/login_monday/"
                  className="text-blue-500"
                >
                  Log in
                </a>
              </h5>
            </div>
          </div>
          <div
            className="col-5 p-0"
            style={{ height: "100vh", overflow: "hidden" }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
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
