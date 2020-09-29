import React from "react";

const Container = ({ fluid, children }) => {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export default Container;