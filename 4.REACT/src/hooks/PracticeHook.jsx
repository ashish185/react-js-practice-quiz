import React, { useEffect, useState } from "react";
const useResizeHook = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    console.log('Resize hook');
    window.addEventListener("resize", (event) => {
      console.log("event", event.target);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
    return ()=> {
      window.removeEventListener("resize", ()=>{});
    }
  },[]);
  return [width, height];
};

const AnyChild=()=>{
  useEffect(()=>{
    console.log("Child use effect");
  },[])
  return (
    <div>
      AnyChild
    </div>
  );
}


const PracticeHook = () => {
  const [width, height] = useResizeHook();
  useEffect(()=>{
    console.log('Main file UseEffect');
  },[])
  return (
    <div>
      Practice
      <div>{width}</div>
      <div>{height}</div>
      <AnyChild />
    </div>
  );
};

export default PracticeHook;
