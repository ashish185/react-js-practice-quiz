import React, { useState, useEffect } from "react";

/* Here we determine the sequence of Use effect calling.
The output is put the end.
*/
const UseEffectExercise3 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Use effect called");
    return () => {
      console.log("Clean up called");
    };
  }, [count]);

  console.log("render");
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Increment Count
    </button>
  );
};

export default UseEffectExercise3;
/* 
On the first render on Console log
>render
>Use Effect called

After click on inc button
>render
>Clean up called
>Use Effect called
*/