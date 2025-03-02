import React from "react";
import useResize from "./useResizeWindow";

const UseResizeMain = () => {
  const { width, height } = useResize();

  return (
    <div>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </div>
  );
};

export default UseResizeMain;