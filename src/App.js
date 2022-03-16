import { useState, useRef, useEffect } from "react";
import "./styles.css";
import React from "react";
// import styled from "styled-components";
import Button from "./Components/Button";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <Button
        theme={theme}
        onClick={() => {
          console.log("sub one");
        }}
      >
        Sub 1
      </Button>

      <Button
        theme={theme}
        onClick={() => {
          console.log("ADD one");
        }}
      >
        ADD 1
      </Button>
      <br />

      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const ref = useRef("Masai");

//   console.log(ref.current);

//   return (
//     <div className="App">
//       <h3>Counter : {counter}</h3>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Add 1
//       </button>
//       <button
//         onClick={() => {
//           ref.current = "new Name";
//           console.log("Name is", ref.current);
//         }}
//       >
//         Change Name
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     startTimer();
//   }, []);

//   const startTimer = () => {
//     ref.current = setInterval(() => {
//       setCounter((p) => p + 1);
//     }, 300);
//   };

//   // console.log()

//   return (
//     <div className="App">
//       <h3>Counter : {counter}</h3>
//       <button
//         onClick={() => {
//           clearInterval(ref.current);
//         }}
//       >
//         Stop
//       </button>
//       <button onClick={startTimer}>Start</button>
//       <button
//         onClick={() => {
//           clearInterval(ref.current);
//           setCounter(0);
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }
