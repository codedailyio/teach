import React, { Component } from "react";
import "./input.css";

const CODE_LENGTH = new Array(6).fill(0);

class App extends Component {
  inputRefs = CODE_LENGTH.map(() => React.createRef());
  state = {
    value: "",
  };
  handleKeyUp = (e, index) => {
    e.persist();
    if (e.key === "Backspace") {
      if (this.state.value.length !== 0) {
        this.inputRefs[this.state.value.length - 1].current.focus();
      }
    }
  };
  handleChange = (e, index) => {
    let inputValue = e.target.value.slice(-1);

    this.setState(
      state => {
        let valueLength = state.value.length - 1;
        let value = state.value;

        let newValue = inputValue === "" ? value.slice(0, valueLength) : value + inputValue;

        if (index - 1 !== valueLength) {
          newValue = value.slice(0, index) + inputValue + value.slice(index, valueLength);
        }

        return {
          value: newValue,
        };
      },
      () => {
        if (index !== CODE_LENGTH.length - 1) {
          this.inputRefs[this.state.value.length].current.focus();
        }
      },
    );
  };
  handleFocus = index => {
    if (this.state.value.length - 1 !== index) {
      let focusIndex =
        this.state.value.length !== CODE_LENGTH.length
          ? this.state.value.length
          : CODE_LENGTH.length - 1;

      this.inputRefs[focusIndex].current.focus();
    }
  };
  render() {
    const values = this.state.value.split("");

    return (
      <div className="App">
        <div className="wrap">
          {CODE_LENGTH.map((v, index) => {
            return (
              <input
                className="input"
                value={values[index]}
                ref={this.inputRefs[index]}
                onKeyUp={e => this.handleKeyUp(e, index)}
                onChange={e => this.handleChange(e, index)}
                onFocus={() => this.handleFocus(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
