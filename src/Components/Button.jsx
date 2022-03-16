import React from "react";
import styled from "styled-components";
// import "./Button.css";

const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => (theme === "light" ? "red" : "yellow")};
  border-radius: 4px;
  padding: 10px;
  transition: all 0.4s 0s;
  margin: 5px;
  color: ${({ theme }) => (theme === "dark" ? "black" : "white")};

  &:hover {
    color: white;
    box-shadow: -3px 6px 2px 1px rgba(0, 0, 255, 0.2);
  }
`;

export { Button };

// const Button = () => {
//   return <StyledButton></StyledButton>;
// };

/*   
    color: white;
    box-shadow: -3px 6px 2px 1px rgba(0, 0, 255, 0.2);
   */
// export const Button = ({ children, onClick }) => {
//   return (
//     <button onClick={onClick} className="mybutton">
//       {children}{" "}
//     </button>
//   );
// };
