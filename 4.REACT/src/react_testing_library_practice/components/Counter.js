// Counter.js

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <label>
        <span>Username</span>
        <input />
      </label>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
