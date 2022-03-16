import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const ref = useRef();

  let name = "Masai";

  console.log(name);

  return (
    <div className="App">
      <h3>Counter : {counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          name = "new Name";
          console.log("Name is", name);
        }}
      >
        Change Name
      </button>
    </div>
  );
}
