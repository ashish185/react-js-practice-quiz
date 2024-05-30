import "@testing-library/jest-dom";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import Select, { components } from "react-select";
import selectEvent from "react-select-event";
global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};


const ControlComponent = (props) => (
  <div>
    {<p>Custom Control</p>}
    <components.Control {...props} />
  </div>
);

test("React Select works!", async () => {
  const OPTIONS = [
    { label: "Strawberry", value: "strawberry" },
    { label: "Mango", value: "mango" },
    { label: "Apple", value: "apple" }
  ];
  const { getByTestId, getByLabelText } = render(
    <form data-testid="form">
      <label htmlFor="food">Food</label>
      <Select
        options={OPTIONS}
        name="food"
        inputId="food"
        aria-label="food"
        components={{ Control: ControlComponent }}
      />
    </form>
  );
  // expect(getByTestId("form")).toHaveFormValues({ food: "" }); // empty select

  const node = await waitFor(() => getByLabelText("Food"));

  // select two values...
  await selectEvent.select(node, "Strawberry");
  expect(getByTestId("form")).toHaveFormValues({ food: "strawberry" });
});
