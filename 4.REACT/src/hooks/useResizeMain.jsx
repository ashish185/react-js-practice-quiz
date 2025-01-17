import React from "react";
import useResize from "./useResize";

function App() {
  const { width, height } = useResize();

  return (
    <div>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </div>
  );
}
