import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle: (
        <div
          className="borad-name-initial"
          style={{
            width: "150px",
            height: "4px",
            backgroundColor: "#c3c6d4",
            padding: "4px",
            borderRadius: "8px",
            marginLeft: "7%",
          }}
        ></div>
      ),
      inputTitle: "", // Initial value for the input
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const inputValue = event.target.value;
    this.setState({
      inputTitle: inputValue,
      boardTitle: inputValue,
    });
  }

  render() {
    const cellStyle = {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
      width: "200px", // Set a fixed width for the first 4 columns
    };

    const lastColumnStyle = {
      width: `calc(${cellStyle.width} / 3)`, // 1/3 of the width of cellStyle
      textOverflow: "ellipsis",
    };

    const lastRowStyle = {
      ...cellStyle, // Apply cellStyle to the last row cell
      ...(lastColumnStyle || {}), // Apply lastColumnStyle if it exists
    };

    return (
      <div className="create-board">
        <div className="row m-0">
          <div className="col-md-5 d-flex flex-column vh-100">
            <div className="create-board-form-container pl-20 pt-20 vh-100 position-relative">
              <div className="create-board-form-monday-logo">
                <img
                  src="https://cdn.monday.com/images/logos/logo-full-big.png"
                  alt=""
                  style={{ width: "200px" }}
                />
              </div>

              <form className="create-board-form-main">
                <div className="form-title">
                  <h1 className="text-2xl pt-20 pb-1">
                    Let's start working together
                  </h1>
                  <h3 className="text-m pt-2 pb-10">
                    Give your board a name, e.g. marketing plan, sales pipeline,
                    quarterly roadmap...
                  </h3>
                </div>
                <div className="form-input-container survey-form-container">
                  <div className="form-item pb-2" style={{ display: "flex" }}>
                    <input
                      type="text"
                      className="board-name-input form-control m-0"
                      id="inputFullNameToCreate"
                      aria-describedby="boardName"
                      placeholder="My first board"
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        marginRight: "10px",
                      }}
                      value={this.state.inputTitle}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div
                    className="tip-box bg-slate-50 rounded-lg mt-5"
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p className="tip-box-text pl-10" style={{ width: "90%" }}>
                      In monday.com, "boards" are the place where all your
                      content lives.
                    </p>
                  </div>
                </div>
              </form>
              <div className="create-continue-button pt-md-20 position-absolute bottom-10 right-10">
                <NavLink className="nav-link" to="/invitation">
                  <button
                    type="button"
                    className="btn bg-gray-300 text-white"
                    style={{ width: "150px" }}
                  >
                    Next
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div
            className="col-md-7 p-0 d-flex align-items-center justify-content-end"
            style={{ background: "#f6f7fb" }}
          >
            <div
              className="board-container d-flex flex-column justify-content-center align-items-end"
              style={{
                background: "white",
                width: "90%",
                height: "80%",
                boxShadow: "0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="board-title-container d-flex justify-content-start"
                style={{ width: "100%" }}
              >
                <div className="board-title d-flex p-2 ml-5 mt-5">
                  {this.state.boardTitle}
                </div>
              </div>
              <div
                className="board-example-wrapper d-flex flex-column justify-content-center align-items-end"
                style={{ width: "95%", height: "90%" }}
              >
                <div className="board-example-1-wrapper">
                  <div
                    className="board-example-1-title"
                    style={{
                      width: "20%",
                      height: "4px",
                      backgroundColor: "rgb(87, 155, 252)",
                      marginBottom: "10px",
                      padding: "4px",
                      borderRadius: "8px",
                    }}
                  ></div>
                  <div className="board-example-1-main-board">
                    <table
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        borderCollapse: "collapse",
                        borderColor: "#d0d4e4",
                        borderTopLeftRadius: "8px",
                        borderBottomLeftRadius: "8px",
                        //borderLeft: "3px solid #1111",
                        overflow: "hidden",
                      }}
                    >
                      <tbody>
                        {Array.from({ length: 5 }, (_, rowIndex) => (
                          <tr key={rowIndex}>
                            {Array.from({ length: 5 }, (_, colIndex) => (
                              <td
                                key={colIndex}
                                style={{
                                  ...cellStyle,
                                  ...(colIndex === 4 ? lastColumnStyle : {}),
                                }}
                              >
                                <div
                                  className="cell-content"
                                  style={{
                                    width: "30%",
                                    height: "4px",
                                    backgroundColor: "#c3c6d4",
                                    padding: "4px",
                                    borderRadius: "8px",
                                    margin: "0 auto",
                                  }}
                                ></div>
                              </td>
                            ))}
                          </tr>
                        ))}
                        <tr>
                          <td colSpan="5" style={lastRowStyle}>
                            <div
                              className="cell-content"
                              style={{
                                width: "7%",
                                height: "4px",
                                backgroundColor: "#c3c6d4",
                                padding: "4px",
                                borderRadius: "8px",
                                marginLeft: "7%",
                              }}
                            ></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="board-example-2-wrapper pt-lg-5">
                  <div
                    className="board-example-2-title"
                    style={{
                      width: "20%",
                      height: "4px",
                      backgroundColor: "rgb(0, 200, 117)",
                      marginBottom: "10px",
                      padding: "4px",
                      borderRadius: "8px",
                    }}
                  ></div>
                  <div className="board-example-2-main-board">
                    <table
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        borderCollapse: "collapse",
                        borderColor: "#d0d4e4",
                        borderTopLeftRadius: "8px",
                        borderBottomLeftRadius: "8px",
                        //borderLeft: "3px solid #1111",
                        overflow: "hidden",
                      }}
                    >
                      <tbody>
                        {Array.from({ length: 1 }, (_, rowIndex) => (
                          <tr key={rowIndex}>
                            {Array.from({ length: 5 }, (_, colIndex) => (
                              <td
                                key={colIndex}
                                style={{
                                  ...cellStyle,
                                  ...(colIndex === 4 ? lastColumnStyle : {}),
                                }}
                              >
                                <div
                                  className="cell-content"
                                  style={{
                                    width: "30%",
                                    height: "4px",
                                    backgroundColor: "#c3c6d4",
                                    padding: "4px",
                                    borderRadius: "8px",
                                    margin: "0 auto",
                                  }}
                                ></div>
                              </td>
                            ))}
                          </tr>
                        ))}
                        <tr>
                          <td colSpan="5" style={lastRowStyle}>
                            <div
                              className="cell-content"
                              style={{
                                width: "7%",
                                height: "4px",
                                backgroundColor: "#c3c6d4",
                                padding: "4px",
                                borderRadius: "8px",
                                marginLeft: "7%",
                              }}
                            ></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
