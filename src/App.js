import React, { Component } from "react";

import LoadableWorld from "./loadable";

class App extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <div className="App">
        {this.state.show && <LoadableWorld />}

        <button onClick={() => this.setState({ show: true })}>
          Show and Load!
        </button>
      </div>
    );
  }
}

export default App;
