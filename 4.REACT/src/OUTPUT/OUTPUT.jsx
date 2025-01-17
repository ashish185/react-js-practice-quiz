import React, { useState } from 'react'

const OUTPUT = () => {
    const [count, setCount] = useState(0);
    console.log("reRender", count);
  return (
    <div>
      OUTPUT
      <h1>Click times {count}</h1>
      <button onClick={() => setCount(1)}>Click</button>
    </div>
  );
};

export default OUTPUT;
