import { useState } from 'react';

// Task 16.2 Exercise 1: Event Handler Patterns
// Covers: basic onClick, event object, custom param, preventDefault

function EventExamples() {
  const [log, setLog] = useState([]);

  // Helper — appends a message to the visible log
  const addLog = (msg) =>
    setLog(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 8));

  // ─── Pattern 1: Basic click handler ───────────────────────
  const handleClick = () => {
    addLog('🖱️  Button clicked (basic handler)');
  };

  // ─── Pattern 2: Handler receives the event object ─────────
  const handleInput = (event) => {
    addLog(`⌨️  Input changed → "${event.target.value}"`);
  };

  // ─── Pattern 3: Handler with a custom parameter ───────────
  // Note the arrow function wrapper in JSX: onClick={() => handleItemClick(id)}
  const handleItemClick = (itemId, label) => {
    addLog(`📦 Item clicked → id=${itemId}, label="${label}"`);
  };

  // ─── Pattern 4: preventDefault on form submit ─────────────
  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from reloading
    addLog('📩 Form submitted (default prevented ✅)');
  };

  const items = [
    { id: 101, label: 'React Basics' },
    { id: 202, label: 'State & Events' },
    { id: 303, label: 'Component Composition' },
  ];

  return (
    <div className="exercise-card">
      <h3 className="exercise-title">Event Handler Patterns</h3>
      <p className="exercise-note">Task 16.2 · Exercise 1 — four handler patterns</p>

      {/* Pattern 1 */}
      <section className="pattern-section">
        <h4>① Basic onClick</h4>
        <button className="btn btn-primary" onClick={handleClick}>
          Click Me
        </button>
      </section>

      {/* Pattern 2 */}
      <section className="pattern-section">
        <h4>② onChange with event object</h4>
        <input
          className="form-input"
          onChange={handleInput}
          placeholder="Type something…"
        />
      </section>

      {/* Pattern 3 */}
      <section className="pattern-section">
        <h4>③ onClick with custom parameter</h4>
        <div className="item-list">
          {items.map(item => (
            <button
              key={item.id}
              className="btn btn-secondary item-btn"
              onClick={() => handleItemClick(item.id, item.label)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* Pattern 4 */}
      <section className="pattern-section">
        <h4>④ onSubmit with preventDefault</h4>
        <form onSubmit={handleSubmit} className="inline-form">
          <input className="form-input" placeholder="Press Enter or click Submit" readOnly />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>

      {/* Live log */}
      <div className="event-log" aria-live="polite" aria-label="Event log">
        <strong>Event log:</strong>
        {log.length === 0 && <p className="log-empty">Interact above to see events…</p>}
        {log.map((entry, i) => (
          <p key={i} className="log-entry">{entry}</p>
        ))}
      </div>

      <details className="code-note">
        <summary>Pattern summary</summary>
        <pre>{`// 1. Basic — reference the function (no call!)
<button onClick={handleClick}>…</button>

// 2. Event object — React passes it automatically
const handleInput = (event) => console.log(event.target.value)
<input onChange={handleInput} />

// 3. Custom param — wrap in arrow function
<button onClick={() => handleItemClick(item.id)}>…</button>

// 4. preventDefault — stop browser default behaviour
const handleSubmit = (e) => { e.preventDefault(); … }
<form onSubmit={handleSubmit}>…</form>`}</pre>
      </details>
    </div>
  );
}

export default EventExamples;