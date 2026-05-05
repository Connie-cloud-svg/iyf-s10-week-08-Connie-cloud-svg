import { useState } from "react";

// Task 16.1 — useState Hook
function Counter() {
  // [currentValue, updaterFunction] = useState(initialValue)
  const [count, setCount] = useState(0);

  return (
    <div className="exercise-box">
      <h3>Counter Exercise</h3>
      <p className="counter-display">Count: {count}</p>

      <div className="counter-buttons">
        <button className="btn btn-primary btn-small" onClick={() => setCount(count + 1)}>
          + Increment
        </button>
        <button className="btn btn-secondary btn-small" onClick={() => setCount(count - 1)}>
          − Decrement
        </button>
        <button className="btn btn-danger btn-small" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      {/* Conditional rendering based on count value */}
      {count > 10 && <p className="counter-message">🎉 Count is above 10!</p>}
      {count < 0 && <p className="counter-message">⚠️ Count is negative!</p>}
      {count === 0 && <p className="counter-message">Starting from zero.</p>}
    </div>
  );
}

export default Counter;