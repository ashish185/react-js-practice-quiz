import React, { useState, useEffect, useRef } from "react";

const UseEffectExercise = () => {
  console.log(1);
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);

  useEffect(() => {
    console.log(2);
    return () => {
      console.log(3);
    };
  }, [state]);

  useEffect(() => {
    console.log(4);
    return () => {
      console.log(5);
    };
  }, [state]);

  useEffect(() => {
    console.log(6);
    return () => {
      console.log(7);
    };
  }, [state]);

  useEffect(() => {
    console.log(8);
    return () => {
      console.log(9);
    };
  }, [state]);
  console.log(10);
  return null;
};

export default UseEffectExercise;
