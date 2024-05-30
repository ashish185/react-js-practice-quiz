import React, { useRef, useEffect } from "react";

const useOnce = (callback, dependency) => {
  const ref = useRef(true);

  useEffect(() => {
    console.log("Hook use Effect");
    if (ref.current) {
      callback();
      return;
    };

    return () => {
      console.log('Hook clean up');
      ref.current = false;
    };
  }, [dependency]);
};

export default useOnce;
