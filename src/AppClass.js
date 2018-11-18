import React, { Component } from "react";

class AppClass extends Component {
  state = {
    count: 0,
  };
  handleUpdateCount = () => {
    this.setState(state => {
      return {
        count: state.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleUpdateCount}>Add One to {count}</button>
      </div>
    );
  }
}

export default AppClass;
