import React, { useEffect, useState } from 'react'

const Child = () => {
  useEffect(() => {
    console.log("Child Use effect");
    return () => {
        console.log("Child Clean up");
    };
  });

  return <div>I am child</div>;
};

export default Child;
