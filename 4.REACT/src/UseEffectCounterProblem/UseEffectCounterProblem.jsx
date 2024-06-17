import { useState, useEffect } from "react";
const UseEffectCounterProblem = () => {
  const [count, setCount] = useState(0);

/*   useEffect(() => {
    let time = 0;
    let id = setInterval(() => {
      time = time + 1;
      console.log("seconds=", time);
    }, 1000);
    return () => {
        clearTimeout(id);
      };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Count is", count);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
 */

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default UseEffectCounterProblem;
