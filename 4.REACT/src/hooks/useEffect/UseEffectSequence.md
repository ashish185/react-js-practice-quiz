## Summarized Points:
1. Clean Up run when the component Update, it's previous clean up run
2. Use Effect run always from Child to Parent, and it's clean up also run from child to parent.


## UseEffect Sequency without dependency
```js
const UseEffectExercise = () => {
  const [count, setCount] = useState(0);
 useEffect(() => {
    console.log(`use Effect ${count}`);
    return () => {
      console.log(`use Effect cleanup ${count}`);
    };
  });

  console.log("render count", count);
  return (
    <>
      <p>The Count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Count
      </button>
    </>
  );
};
```
1. ### Q: What would be the output when the components Load?
   Ans: render count 0, use effect 0 
   ***Note: Clean up does not render in first mount
   Does it mean useEffect without dependency work on Mount of component?
   Ans: Yes

2. ### Q: When button is clicked and count updated then?
   Ans: render count 1, use effect 1, use Effect cleanup 0
   Explanation: Clean Up gives the previous count, since once the state update it runs previous clean up fns

## When UseEffect is present is Child as well as Parent
```js
import React, { useState, useEffect, useRef } from "react";
const Child = () => {
  useEffect(() => {
    console.log('-------------------');
    console.log(`Child use Effect`);
    return () => {
      console.log(`Child cleanup`);
    };
  });
  return <></>;
};

const UseEffectExercise = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`parent use Effect ${count}`);
    return () => {
      console.log(`parent Effect cleanup ${count}`);
    };
  }, [count]);
  return (
    <>
      <p>The Count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Count
      </button>
      <Child />
    </>
  );
};

export default UseEffectExercise;

```
1. ### Q: What would be the output when the components Load?
   Ans: Child use Effect 
        Parent use Effect 0 

2. ### Q: When button is clicked and count updated then?
   Ans: Child cleanup
        Parent Effect cleanup 0
        Child use Effect
        Parent use Effect 1


## UseEffect with dependency
```js
const UseEffectExercise = () => {
  const [count, setCount] = useState(0);
 useEffect(() => {
    console.log(`use Effect ${count}`);
    return () => {
      console.log(`use Effect cleanup ${count}`);
    };
  },[count]); //Now the count is given

  console.log("render count", count);
  return (
    <>
      <p>The Count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Count
      </button>
    </>
  );
};
```

