import { useState, useRef, useEffect } from "react";
import "./styles.css";

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

export default function App() {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h3>Counter : {counter}</h3>
      <button
        onClick={() => {
          clearInterval(ref.current);
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          ref.current = setInterval(() => {
            setCounter((p) => p + 1);
          }, 1000);
        }}
      >
        Start
      </button>
    </div>
  );
}
