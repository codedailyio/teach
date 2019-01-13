import React, { Component } from "react";
import "./app.css";

const circleCount = Math.floor(window.innerWidth / 200);
const circles = Array.from(Array(circleCount).keys());

class App extends Component {
  state = {
    animate: false,
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        animate: true,
      });
    }, 1);
  };

  render() {
    return (
      <div className="App">
        <div
          className="circle mover"
          style={{
            transform: `translateX(${
              !this.state.animate ? "0px" : circleCount * 200
            }px) translateY(-50%)`,
            transition: `transform ${(circleCount) * 0.75}s linear`,
          }}
        />
        <div className="container">
          {circles.map(i => {
            return (
              <div
                className="circle item"
                style={{
                  animationDelay: `${i * 0.75}s`,
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
