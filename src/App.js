import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    const value = document.querySelector("#value");
    if (count > 0) {
      value.style.color = "green";
    }
    // change negative numbers to red
    if (count < 0) {
      value.style.color = "red";
    }
    // change number 0 to black
    if (count === 0) {
      value.style.color = "rgb(16, 42, 66)";
    }
  });

  return (
    <main>
      <h1>Counter</h1>
      <span id="value">{count}</span>
      <div className="button-container">
        <button className="btn decrease" onClick={decrease}>
          decrease
        </button>
        <button className="btn reset" onClick={reset}>
          reset
        </button>
        <button className="btn increase" onClick={increase}>
          increase
        </button>
      </div>
    </main>
  );
}

export default App;
