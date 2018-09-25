import React, { Component } from "react";
import produce from "immer";

const counter = produce((draft, props) => {
  draft.count.counter += props.increaseCount;
});

class App extends Component {
  state = {
    count: {
      counter: 0,
    },
  };
  componentDidMount() {
    setInterval(() => {
      this.setState(counter);
    }, 1000);
  }

  render() {
    return <div className="App">{this.state.count.counter}</div>;
  }
}

export default App;
