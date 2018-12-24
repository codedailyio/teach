import React, { Component } from "react";
import "./pill.css";

const getGradient = (color, background, percentage) => {
  return `linear-gradient(90deg, rgba(15,157,88,1),rgba(15,157,88,1) ${percentage}%,rgba(11,128,67,1) ${percentage}%,rgba(11,128,67,1))`;
};

class App extends Component {
  state = {
    percentage: 100,
  };
  componentDidMount = () => {
    this.animate();
  };
  animate = () => {
    // setInterval(() => {
    //   this.setState(state => {
    //     return {
    //       percentage: state.percentage - .25,
    //     };
    //   });
    // }, 1000);
  };

  render() {
    return (
      <div className="App">
        <div
          className="pill"
          style={{
            // background: getGradient("#48aa77", "#25573d", this.state.percentage),
            background: "#48aa77",
          }}
        >
          <div
            className="fill"
            style={{
              background: "#25573d",
              // right: `${100 - this.state.percentage}%`,
              transform: `scaleX(${this.state.percentage/100})`,
              transition: "all 1s ease",
            }}
          />
          <div className="container">
            <div className="content">
              <span className="img">P</span>
              <span className="text">$100.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
// #E62017
// #CF0000

// width: 96px

// #img
// margin-right: -4px;
//     overflow: hidden;
//     border-radius: 50%;

// Text

// <div id="container" dir="ltr" class="style-scope yt-live-chat-ticker-sponsor-item-renderer" style=";">
//       <div id="content" class="style-scope yt-live-chat-ticker-sponsor-item-renderer" style="color: rgb(255, 255, 255);">
//         <yt-img-shadow id="author-photo" height="24" width="24" class="style-scope yt-live-chat-ticker-sponsor-item-renderer no-transition" loaded="" style="background-color: transparent;"><img id="img" class="style-scope yt-img-shadow" alt="" height="24" width="24" src="https://yt3.ggpht.com/-kDCbpaKG8BE/AAAAAAAAAAI/AAAAAAAAAAA/RmqdSYUw-_8/s64-c-k-no-mo-rj-c0xffffff/photo.jpg"></yt-img-shadow>
//         <span id="text" class="style-scope yt-live-chat-ticker-sponsor-item-renderer">Member</span>
//       </div>
//     </div>
