import React from "react";
import "./Button.css";

const Operator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = (props) => (
  <div
    className={`Button ${Operator(props.children) ? null : "Operator"}`}
    onClick={() => props.click(props.children)}
  >
    {props.children}
  </div>
);
