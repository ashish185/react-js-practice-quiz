import React from 'react'
import { Outlet } from "react-router-dom";
import { redirect } from "react-router-dom";

const MyLayout = () => {
  if (window.location.pathname === "/") {
    window.location.pathname = '/list'
  }
  return (
    <>
      <div>MyLayout</div>
      <div style={{ marginTop: "1%" }}></div>
      <Outlet />
    </>
  );
};

export default MyLayout