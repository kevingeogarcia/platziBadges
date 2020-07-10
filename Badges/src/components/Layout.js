import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  //const children = props.children;
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
