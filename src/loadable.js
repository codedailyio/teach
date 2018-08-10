import React from "react";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const LoadableComponent = Loadable({
  loader: () => import("./hello_world"),
  loading: Loading
});

export default LoadableComponent;
