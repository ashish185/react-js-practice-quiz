import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Toast = ({onClose}) => {
    const [count, setCount] = useState(10);
    useEffect(() => {
      let id = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
      return ()=> {
        clearInterval(id);
      }
    }, []);

  const getToastComponent = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          padding: "20px 30px",
          background: "grey",
        }}
      >
        {"I am message"}
        <button onClick={onClose}>X</button>
        <div>{`Auto close in ${count} seconds`}</div>
      </div>
    );
  };
  return createPortal(getToastComponent(), document.body);
};

export const ToastMain = () => {
    const [toast, setToast] = useState([]);

    const generateToast= ()=> {
    };
  return (
    <div>
      <button onClick={generateToast}>Open Toast</button>
      <Toast />
    </div>
  );
};
