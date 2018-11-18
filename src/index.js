import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppClass from "./AppClass";

const appExamples = (
  <div>
    <App />
    <AppClass />
  </div>
);
ReactDOM.render(appExamples, document.getElementById("root"));
