import React, { Component } from "react";
import "./app.css";

const items = [0, 1, 2, 3, 4, 5, 6, 7];

class App extends Component {
  state = {
    index: 0,
  };
  increment = 1;
  componentDidMount = () => {
    setInterval(() => {
      this.setState(state => {
        if (state.index >= items.length -1) {
          this.increment = -1;
        } else if (state.index <= 0) {
          this.increment = 1;
        }

        return {
          index: state.index + this.increment,
        };
      });
    }, 500);
  };

  render() {
    const { index } = this.state;

    return (
      <div className="App">
        <div className="background">
          {items.map(i => {
            return (
              <div className="circle">
                <div
                  className="mover"
                  style={{
                    transform: `translateX(${(index - i) * 40}px)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
