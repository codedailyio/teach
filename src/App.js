import React, { Component } from "react";
import produce from "immer";

const counter = produce((draft, props) => {
  draft.count.counter += props.increaseCount
})

class App extends Component {
  state = {
    count: {
      counter: 0,
    },
    user: {
      name: "Jason Brown"
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(counter);
    },1000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.user === prevState.user)
  }
  
  

  render() {
    return <div className="App">{this.state.count.counter}</div>;
  }
}

export default App;
