import { useState } from "react";

// Task 16.1 — useState with boolean
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="exercise-box">
      <h3>Toggle Exercise</h3>

      {/* Conditional rendering — changes text AND style based on state */}
      <p>
        The toggle is{" "}
        <strong style={{ color: isOn ? "green" : "crimson" }}>
          {isOn ? "ON" : "OFF"}
        </strong>
      </p>

      <button
        className={`btn ${isOn ? "btn-danger" : "btn-primary"} btn-small`}
        onClick={() => setIsOn(!isOn)}   // Flip the boolean
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default Toggle;