import { useState } from 'react';

// Task 16.1 Exercise 2: Toggle Component
// Demonstrates: useState with boolean, negation update, conditional rendering

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(prev => !prev);

  return (
    <div className="exercise-card">
      <h3 className="exercise-title">Toggle</h3>
      <p className="exercise-note">Task 16.1 · Exercise 2 — boolean state</p>

      {/* Status badge */}
      <div className={`toggle-status ${isOn ? 'toggle-on' : 'toggle-off'}`}>
        {isOn ? '🟢 ON' : '🔴 OFF'}
      </div>

      {/* Toggle switch button */}
      <button
        className={`toggle-btn ${isOn ? 'active' : ''}`}
        onClick={toggle}
        aria-pressed={isOn}
        aria-label={`Toggle is currently ${isOn ? 'on' : 'off'}. Click to turn ${isOn ? 'off' : 'on'}.`}
      >
        <span className="toggle-knob" />
      </button>

      {/* Conditional content — all 3 shown for learning */}
      <div className="toggle-messages">
        {/* && operator */}
        {isOn && <p className="msg msg-green">✅ Feature is enabled</p>}

        {/* Negation && */}
        {!isOn && <p className="msg msg-grey">⏸️ Feature is disabled</p>}

        {/* Ternary */}
        <p className="msg msg-blue">
          {isOn ? '💡 Light is ON — saving energy?' : '🌙 Light is OFF — good night!'}
        </p>
      </div>

      <details className="code-note">
        <summary>How it works</summary>
        <pre>{`const [isOn, setIsOn] = useState(false);

// Functional update flips the current boolean
const toggle = () => setIsOn(prev => !prev);

// Three conditional rendering patterns:
{isOn && <p>Shown when true</p>}
{!isOn && <p>Shown when false</p>}
{isOn ? <p>True branch</p> : <p>False branch</p>}`}</pre>
      </details>
    </div>
  );
}

export default Toggle;