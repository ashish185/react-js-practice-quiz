import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "react-select";
import selectEvent from "react-select-event";
global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

test("React Select works!", async () => {
  const OPTIONS = [
    { label: "Strawberry", value: "strawberry" },
    { label: "Mango", value: "mango" },
    { label: "Apple", value: "apple" }
  ];
  const { getByRole, getByLabelText } = render(
    <form role="form">
      <label htmlFor="food">Food</label>
      <Select options={OPTIONS} name="food" aria-label="food" inputId="food" isMulti />
    </form>
  );

  // await selectEvent.select(getByLabelText("food"), ["Strawberry", "Mango"]);
  // expect(getByRole("form")).toHaveFormValues({ food: ["strawberry", "mango"] });

  await selectEvent.select(getByLabelText("food"), "Apple");
  expect(getByRole("form")).toHaveFormValues({
    food: ["strawberry", "mango", "Apple"] // Corrected the case here
  });
});

