import React from 'react';
import useToggle from './useToggle';

const Switch = () => {
  const [checkBoxVal, changeCheckBoxValue] = useToggle(false);
  return (
    <>
      <div>This is a checkbox</div>
      <input value={checkBoxVal} type='checkbox' onChange={() => changeCheckBoxValue()} />
      <div>Checkbox value is <span>{`${checkBoxVal}`}</span></div>
    </>
  )
}

export default Switch;