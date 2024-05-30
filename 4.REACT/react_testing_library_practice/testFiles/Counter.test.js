// Counter.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For additional matchers
import Counter from '../components/Counter';

// Using DOM Testing Library
test('increments counter on button click (DOM Testing Library)', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('Increment');

  fireEvent.click(incrementButton);

  expect(getByText('Count: 1')).toBeInTheDocument();
});
