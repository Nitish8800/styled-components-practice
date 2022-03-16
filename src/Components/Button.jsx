import React from "react";
import styled from "styled-components";
import "./Button.css";

export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="mybutton">
      {children}{" "}
    </button>
  );
};

export default Button;
