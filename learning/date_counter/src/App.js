import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <p>
        <button onClick={() => setCount((curCount) => curCount - step)}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

        <button onClick={() => setCount((curCount) => curCount + step)}>
          +
        </button>
      </p>
      <span>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}
      </span>
      <span> {date.toDateString()} </span>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
