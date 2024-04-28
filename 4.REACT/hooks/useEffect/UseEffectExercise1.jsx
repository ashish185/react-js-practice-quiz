import React, { useState, useEffect } from "react";
//Ref: https://www.youtube.com/watch?v=QQYeipc_cik&t=30s

const UseEffectExercise1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Inside UseEffect");
    document.title = `Hey I am clicked ${count} times`;
  });
  console.log("I am Below and OutSide of useEffect");

  return (
    <>
      <p>The Count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Count
      </button>
    </>
  );
};

export default UseEffectExercise1;
