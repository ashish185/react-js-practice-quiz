import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { clearSubmit, reducer as formReducer } from "redux-form";
import userReducer from './../../redux-form-components/UserForm/userReducer';
import UserForm from "../../redux-form-components/UserForm/UserForm";
import selectEvent from 'react-select-event';

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};


afterEach(cleanup);

const renderWithRedux = (component, { initialState, store, reducerName } = {}) => {
  const myStore = createStore(
    combineReducers({ userReducer, form: formReducer }),
    initialState
  );
  return {
    ...render(<Provider store={myStore}>{component}</Provider>)
  };
};

const KEY_DOWN = 40

const selectItem = async (label, choice) => {
  // Focus and enable the dropdown of options.
  fireEvent.focus(screen.getByLabelText(label));
  fireEvent.keyDown(screen.getByLabelText(label), {
    keyCode: KEY_DOWN,
  });

  // Wait for the dropdown of options to be drawn.
  await screen.findByText(choice);

  screen.debug(await screen.findByText(choice));
  // Select the item we care about.
  fireEvent.click(screen.getByText(choice));

  // Wait for your choice to be set as the input value.
  screen.findByDisplayValue(choice);
};

// it("approach 1", async () => {
//   renderWithRedux(<UserForm />, { reducerName: userReducer });

//   const formData = {
//     firstName: "Don",
//     lastName: "Joe",
//     email: "don@mail.com"
//   };
//   // screen.debug();

//   fireEvent.change(screen.getByLabelText(/first name/i), {
//     target: { value: formData.firstName }
//   });

//   fireEvent.change(screen.getByLabelText(/last name/i), {
//     target: { value: formData.lastName }
//   });

//   fireEvent.change(screen.getByLabelText(/email/i), {
//     target: { value: formData.email }
//   });

//   fireEvent.change(screen.getByLabelText('my-gender'), {
//     target: { value: 'female' }
//   });

//   screen.debug();
//   expect(screen.getByTestId("userform")).toHaveFormValues(formData);


// });

it("approach 2", async () => {
  renderWithRedux(<UserForm />, { reducerName: userReducer });

  const formData = {
    firstName: "Don",
    lastName: "Joe",
    email: "don@mail.com"
  };
  // screen.debug();

  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: formData.firstName }
  });

  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: formData.lastName }
  });

  // screen.debug(screen.getByLabelText(/gender/i));
  // fireEvent.change(screen.getByLabelText(/email/i), {
  //   target: { value: formData.email }
  // });
  
// Try another approach
  const label = 'my-gender';
  const choice = 'Female';
  fireEvent.focus(screen.getByLabelText(label));
  fireEvent.keyDown(screen.getByLabelText(label), {
    keyCode: KEY_DOWN,
  });

  // Wait for the dropdown of options to be drawn.
  await screen.findByText(choice);

  screen.debug(await screen.findByText(choice));
  // Select the item we care about.
  fireEvent.click(screen.getByText(choice));clearSubmit

  screen.debug();
  expect(screen.getByTestId("userform")).toHaveFormValues(formData);
});

it.only("approach 3 react-select-event package", async () => {
  renderWithRedux(<UserForm />, { reducerName: userReducer });
  screen.debug(screen.getByLabelText('my-gender'));
  await selectEvent.select(screen.getByLabelText('my-gender'), 'Female');

  //screen.debug();
  // expect(screen.getByTestId("userform")).toHaveFormValues(formData);
});