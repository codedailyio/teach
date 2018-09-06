import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

