import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppClass from "./AppClass";
import AppObject from "./AppObject";

const appExamples = (
  <div>
    <App />
    <AppClass />
    <AppObject />
  </div>
);
ReactDOM.render(appExamples, document.getElementById("root"));
