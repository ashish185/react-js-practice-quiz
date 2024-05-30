import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { createMockStore } from "redux-test-utils";
import SimpleForm from "../../redux-form-components/SimpleForm/SimpleForm";

test("react-testing-library works!", () => {
  const state = {};
  const store = createMockStore(state);
  const { container } = render(
    <Provider store={store}>
      <SimpleForm />
    </Provider>
  );
  expect(getByTestId(container, "simple-form")).toBeInTheDocument();
});

test("react-testing-library form onSubmit", () => {
  const state = {
    form: {
      simple: {
        values: {}
      }
    }
  };
  const store = createMockStore(state);
  const onSubmit = jest.fn();
  const { container, debug } = render(
    <Provider store={store}>
      <SimpleForm onSubmit={onSubmit} />
    </Provider>
  );
  const firstNameInput = getByTestId(container, "firstName");
  const lastNameInput = getByTestId(container, "lastName");

  const firstName = "firstName";
  const lastName = "lastName";

  fireEvent.change(firstNameInput, { target: { value: firstName } });
  fireEvent.change(lastNameInput, { target: { value: lastName } });
  debug();

  const submitButton = getByTestId(container, "submitButton");
  fireEvent.click(submitButton);
  
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenNthCalledWith(firstName, lastName);// pass
});
