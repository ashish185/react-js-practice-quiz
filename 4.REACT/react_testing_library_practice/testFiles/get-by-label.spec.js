import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For additional matchers

/**
 * Note: getByLabel search krta corresponding input of Label, not the label. 
 * 
 */


export const AnyComponent = () => {
  return (
    <div>
      <div className='type1'>
        <label htmlFor="username-input">Username</label>
        <input id="username-input" />
      </div>
      <div className='type2'>
        <label>
          <span>Label2</span>
          <input />
        </label>
      </div>
      <div className='type3'>
        <label>
          <span>Input outside</span>
        </label>
        <input /> {/* Outside krke test kar rkha h */}
      </div>
      <div className='type4'>
        <label htmlFor="username-input2">Username</label> {/* Duplicate as first */}
        <input id="username-input2" />
     </div>
     <div className='type5'>
      {/* It has some input values and i want to test it */}
        <label htmlFor="username-input3">Test Values label</label> {/* Duplicate as first */}
        <input id="username-input3" value={'test1, test2'} />
     </div>
    </div>
  )
};

// Using DOM Testing Library
it.skip('increments counter on button click (DOM Testing Library)', () => {
  //Skiping because it gives error: TestingLibraryElementError: Found multiple elements with the text of: Username
  render(<AnyComponent />);
  expect(screen.getByLabelText('Username')).toBeInTheDocument();
});

it('increments counter on button click (DOM Testing Library)', () => {
  render(<AnyComponent />);
  screen.debug(screen.getByLabelText('Label2'));
  expect( screen.getByLabelText('Label2')).toBeInTheDocument();
});

it('increments counter on button click (DOM Testing Library)', () => {
  render(<AnyComponent />);
  //it will return [<input id="username-input" />, <input id="username-input2" />]
  expect(screen.getAllByLabelText('Username').length).toEqual(2);
});


it('get getAllByText with getAllByLabelText label', () => {
  render(<AnyComponent />);
  // Note: this does not return input, this is text only
  // [<label for="username-input">Username</label>, <label for="username-input2">Username</label>]
  expect(screen.getAllByText('Username').length).toEqual(2);
});

it('testing the values on found input', () => {
  render(<AnyComponent />);
  const inputElement = screen.getByLabelText('Test Values label');
  expect(inputElement.value).toEqual('test1, test2');
});