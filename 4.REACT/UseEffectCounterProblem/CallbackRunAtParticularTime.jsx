import { useState, useEffect, useRef } from "react";
const CallbackRunAtParticularTime = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = () => {
      console.log("Count is", count);
    };
  }, [count]);

  useEffect(() => {
    let time = 0;
    let id = setInterval(() => {
      time = time + 1;
      console.log("seconds=", time);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log('UseEffect:: started');
    const timer = setTimeout(() => {
      ref.current && ref.current();
    }, 5000);
    return () => {
        console.log("UseEffect:: cleared");
      clearTimeout(timer);
    };
  }, []);

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

export default CallbackRunAtParticularTime;
