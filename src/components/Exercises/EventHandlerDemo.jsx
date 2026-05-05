import { useState } from "react";

// Task 16.2 — Event handler patterns
function EventHandlerDemo() {
  const [log, setLog] = useState([]);

  // Helper to add a message to the log
  const addLog = (msg) => {
    setLog((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev.slice(0, 4)]);
  };

  // Pattern 1: Named handler function
  const handleClick = () => {
    addLog("Button clicked (named handler)");
  };

  // Pattern 2: Handler that reads the event object
  const handleInput = (event) => {
    addLog(`Input changed → "${event.target.value}"`);
  };

  // Pattern 3: Handler with a custom parameter
  const handleItemClick = (itemId) => {
    addLog(`Item #${itemId} clicked (custom parameter)`);
  };

  // Pattern 4: Prevent default on form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload
    addLog("Form submitted (default prevented)");
  };

  return (
    <div className="exercise-box">
      <h3>Event Handler Patterns</h3>

      {/* Pattern 1 */}
      <button className="btn btn-primary btn-small" onClick={handleClick}>
        Pattern 1: Named Handler
      </button>

      {/* Pattern 2 */}
      <input
        className="input"
        placeholder="Pattern 2: type here..."
        onChange={handleInput}
      />

      {/* Pattern 3: arrow function passes a custom arg */}
      <div className="event-items">
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            className="btn btn-secondary btn-small"
            onClick={() => handleItemClick(id)}
          >
            Item {id}
          </button>
        ))}
      </div>

      {/* Pattern 4 */}
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-danger btn-small">
          Pattern 4: Submit Form
        </button>
      </form>

      {/* Event log */}
      {log.length > 0 && (
        <div className="event-log">
          <strong>Event Log:</strong>
          {log.map((entry, i) => (
            <p key={i} className="event-log-entry">{entry}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventHandlerDemo;