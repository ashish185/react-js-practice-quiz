// src/ReduxConnectedComponent.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReduxConnectedComponent from './ReduxConnectedComponent';
import { createStore, combineReducers } from "redux";

// Mock the fetchData action
jest.mock('./action', () => ({
  fetchData: jest.fn(),
}));

// Mock the react-redux module
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockStore = ()=>{};

test('renders ReduxConnectedComponent with custom props', () => {
  // Set up initial state for the Redux store
  const initialState = {
    data: 'Mocked Data',
  };

  // Create a mock store with the initial state
  const store = mockStore(initialState);

  // Define your custom props
  const customPropValue = 'Custom Prop Value';

  const getStore = (component, { initialState = {}, store, reducerName } = {}) => {
    const myStore = createStore(
      combineReducers({}),
      initialState
    );
    return myStore;
  };

  const { getByText } = render(
    <Provider store={getStore()}>
      <ReduxConnectedComponent dataFromRedux={'Data from Redux: Mocked Data'} customProp={customPropValue} />
    </Provider>
  );

  // Assert that the component renders with the mapped state and custom prop
  expect(getByText(/Data from Redux: Mocked Data/i)).toBeInTheDocument();
  expect(getByText(/Custom Prop: Custom Prop Value/i)).toBeInTheDocument();
});
