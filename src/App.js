import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import "./app.css";

const DisplayPiece = styled.div(
  {
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: "tomato",
    transition: "transform 1s ease",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ({ show }) => {
    return {
      transform: show ? "scale(1)" : "scale(0)",
    };
  },
);

class App extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <div className="App">
        <DisplayPiece show={this.state.show}>HI</DisplayPiece>
        <button
          onClick={() => {
            this.setState(state => {
              return {
                show: !state.show,
              };
            });
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default App;
