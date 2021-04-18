import React from "react";
import "./ClearButton.css";

export const ClearButton = (props) => (
  <div className="Clear" onClick={props.clear}>
    {props.children}
  </div>
);
