import React, { Component, createRef } from "react";
import "./app.css";

class App extends Component {
  state = {
    value: "",
    hide: false,
    focus: false,
  };
  handleAutoFill = e => {
    this.setState({
      hide: e.animationName === "onAutoFillStart",
    });
  };

  render() {
    const { hide, focus, value } = this.state;
    const hideLabel = hide || focus || value;

    return (
      <div className="App">
        <label className="input_container">
          <span className={`label ${hideLabel ? "hide" : ""}`}>Email</span>
          <input
            className="input"
            value={value}
            name="email"
            onAnimationStart={this.handleAutoFill}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default App;
