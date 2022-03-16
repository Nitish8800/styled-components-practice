import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

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
    </div>
  );
}
