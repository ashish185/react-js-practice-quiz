import { useState } from 'react';

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function setToggle(params) {
    setValue(currentValue => {
      return typeof params === 'boolean' ? params : !currentValue;
    })
    
  }
  return [value, setToggle];
}

/* 


*/