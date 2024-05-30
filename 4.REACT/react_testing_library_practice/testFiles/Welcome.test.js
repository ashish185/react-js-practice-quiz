import React from 'react'
import '@testing-library/jest-dom'
import Welcome from '../components/Welcome'
import { render, fireEvent, screen } from '@testing-library/react';
global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

test('has correct welcome text', () => {
  render(<Welcome firstName="John" lastName="Doe" />)
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe')
})

test('has correct input value', () => {
  render(<Welcome firstName="John" lastName="Doe" />)
  expect(screen.getByRole('form')).toHaveFormValues({
    firstName: 'John',
    lastName: 'Doe',
  })
})

describe('queries methods', () => {
  it('by getByText', () => {
    render(<Welcome firstName="Ash" lastName="ji" />)
    expect(screen.getByText('Ash ji')).toBeInTheDocument();
  });

  it('by queryByText', () => {
    render(<Welcome firstName="Ash" lastName="ji" />)
    screen.debug(screen.getByPlaceholderText('Last Name'))
    expect(screen.queryByText('Ash ji')).toBeInTheDocument();
  });

  it('by find by', async () => {
    render(<Welcome firstName="Ash" lastName="ji" />)
    const el = await screen.findByText('Ash ji');
    expect(el).toBeInTheDocument();
  });

  it('fist name on change', () => {
    render(<Welcome firstName="Ash" lastName="ji" />)
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { value: 'Singhal' },
    });
    screen.debug()
    expect(screen.queryByText('Ash Singhal')).toBeInTheDocument();
  });

 });