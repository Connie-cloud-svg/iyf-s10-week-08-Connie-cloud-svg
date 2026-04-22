import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset     = () => setCount(0);

  // Derived: colour hint so the value feels alive
  const countColour =
    count > 0  ? '#22c55e'   // green
    : count < 0 ? '#ef4444'  // red
    :             '#6b7280';  // grey (zero)

  return (
    <div className="exercise-card">
      <h3 className="exercise-title">Counter</h3>
      <p className="exercise-note">Task 16.1 · Exercise 1 — useState</p>

      {/* Display */}
      <div
        className="counter-display"
        style={{ color: countColour }}
        aria-live="polite"
        aria-label={`Current count: ${count}`}
      >
        {count}
      </div>

      {/* Controls */}
      <div className="counter-controls">
        <button
          className="btn btn-secondary"
          onClick={decrement}
          aria-label="Decrement"
        >
          −
        </button>

        <button
          className="btn btn-ghost"
          onClick={reset}
          aria-label="Reset to zero"
        >
          Reset
        </button>

        <button
          className="btn btn-primary"
          onClick={increment}
          aria-label="Increment"
        >
          +
        </button>
      </div>

      {/* Learning callout */}
      <details className="code-note">
        <summary>How it works</summary>
        <pre>{`const [count, setCount] = useState(0);

// Functional update — always uses latest value
const increment = () => setCount(prev => prev + 1);
const decrement = () => setCount(prev => prev - 1);
const reset     = () => setCount(0);`}</pre>
      </details>
    </div>
  );
}

export default Counter;