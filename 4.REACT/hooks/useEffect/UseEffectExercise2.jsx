import React, { useState, useEffect } from "react";

/* Create a counter that automatically updates in 1sec */
const UseEffectExercise2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Use effect called");
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <p>{count}</p>;
};

export default UseEffectExercise2;
