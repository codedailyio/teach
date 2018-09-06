import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import { render, waitForElement, fireEvent } from "react-testing-library";
import App from "./App";

describe("Form Submit", () => {
  it("should go to dashboard on success", () => {
    const FakeDashboard = () => <div data-testid="dashboard" />;
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/dashboard" component={FakeDashboard} />
        </Switch>
      </MemoryRouter>,
    );

    fireEvent.submit(getByTestId("submit"));

    waitForElement(getByTestId("dashboard"));
  });
});
