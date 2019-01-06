import React, { Component } from "react";

import "./app.css";

const IMG_WIDTH = 700;
const IMG_HEIGHT = 400;

class App extends Component {
  wheelTimeout;
  lastTouch = 0;
  state = {
    imgs: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"],
    currentIndex: 0,
    movement: 0,
    transitionDuration: "0s",
  };
  handleTouchStart = e => {
    this.lastTouch = e.nativeEvent.touches[0].clientX;
  };
  handleTouchMove = e => {
    const delta = e.nativeEvent.touches[0].clientX - this.lastTouch;
    this.lastTouch = e.nativeEvent.touches[0].clientX;

    this.handleMovement(delta * -1);
  };
  handleTouchEnd = () => {
    this.handleMovementEnd();
    this.lastTouch = 0;
  };
  handleWheel = e => {
    this.handleMovement(e.deltaX);
    this.wheelTimeout = setTimeout(() => this.handleMovementEnd(), 150);
  };
  handleMovement = delta => {
    clearTimeout(this.wheelTimeout);
    const maxLength = this.state.imgs.length - 1;

    this.setState(state => {
      let nextMovement = state.movement + delta;

      if (nextMovement < 0) {
        nextMovement = 0;
      }

      if (nextMovement > maxLength * IMG_WIDTH) {
        nextMovement = maxLength * IMG_WIDTH;
      }

      return {
        movement: nextMovement,
      };
    });
  };
  handleBack = () => {
    this.transitionTo(this.state.currentIndex - 1, 0.5);
  };
  handleNext = () => {
    this.transitionTo(this.state.currentIndex + 1, 0.5);
  };
  handleMovementEnd = () => {
    const maxLength = this.state.imgs.length - 1;
    const { movement, currentIndex } = this.state;

    const endPosition = movement / IMG_WIDTH;
    const endPartial = endPosition % 1;
    const endingIndex = endPosition - endPartial;

    const deltaInteger = endingIndex - currentIndex;
    const totalOffset = endPosition - currentIndex;

    let nextIndex = endingIndex;

    if (deltaInteger === 0 && currentIndex >= endingIndex && endPartial >= 0.1) {
      nextIndex += 1;
    } else if (deltaInteger === -1 && currentIndex === maxLength) {
      if (endPartial > 0.9) {
        nextIndex = maxLength;
      }
    } else if (deltaInteger < 0) {
      nextIndex = currentIndex + deltaInteger;

      if (endPartial <= 0.9 && deltaInteger >= Math.abs(deltaInteger)) {
        nextIndex -= 1;
      }
    } else if (deltaInteger > 0) {
      if (endPartial >= 0.1 && deltaInteger >= 1) {
        nextIndex += 1;
      }
    }

    this.transitionTo(nextIndex, Math.min(0.5, 1 - Math.abs(endPartial)));
  };
  transitionTo = (index, duration) => {
    this.setState({
      currentIndex: index,
      movement: index * IMG_WIDTH,
      transitionDuration: `${duration}s`,
    });

    setTimeout(() => {
      this.setState({ transitionDuration: "0s" });
    }, 10);
  };
  render() {
    const { currentIndex } = this.state;

    return (
      <div className="hidden">
        <div className="App">
          <div
            style={{
              width: `${IMG_WIDTH}px`,
              height: `${IMG_HEIGHT}px`,
              backgroundColor: "#000",
              overflow: "hidden",
              position: "relative",
            }}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
            onWheel={this.handleWheel}
          >
            <div
              style={{
                display: "flex",
                overflowX: "visible",
                touchAction: "pan-y",
                transform: `translateX(${this.state.movement * -1}px)`,
                transitionProperty: "transform",
                transitionDuration: this.state.transitionDuration,
                willChange: "transform",
              }}
            >
              {this.state.imgs.map(src => {
                return <img key={src} src={src} width="100%" height="100%" />;
              })}
            </div>
            {currentIndex !== 0 && (
              <button className="back move" onClick={this.handleBack}>
                ←
              </button>
            )}
            {currentIndex !== this.state.imgs.length - 1 && (
              <button className="next move" onClick={this.handleNext}>
                →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
