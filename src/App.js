import React, { Component } from "react";

class App extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    try {
      // Do async stuff
      // When success happens we'll redirect
      this.props.history.push("/dashboard");
    } catch (e) {
      
    }
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" data-testid="submit">Submit my Form!</button>
        </form>
      </div>
    );
  }
}

export default App;
