import React from "react";
import { render } from "react-testing-library";

import App from "./App";

it("should be visible when clicked", () => {
  const { getByText } = render(<App />);

  expect(getByText("HI")).toHaveStyleRule("transform", "scale(0)");

  getByText("Toggle").click();

  expect(getByText("HI")).toHaveStyleRule("transform", "scale(1)");
});
