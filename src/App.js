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