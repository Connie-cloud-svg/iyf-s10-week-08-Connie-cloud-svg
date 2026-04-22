
import { useState } from 'react';

// Task 15.4 Exercise 3: Conditional Rendering Demo
// Shows all three patterns side-by-side using the same state

// ─── Early Return Pattern ─────────────────────────────────────────────────────
// Pattern 3 needs its own component so "early return" actually makes sense
function UserGreeting({ user }) {
  // Pattern 3: Early return — bail out before the main JSX
  if (!user) {
    return <p className="cr-result cr-empty">🔒 Please log in (early return)</p>;
  }
  return (
    <p className="cr-result cr-filled">
      👤 Welcome back, <strong>{user.name}</strong>! (early return)
    </p>
  );
}

// ─── Main Demo ────────────────────────────────────────────────────────────────
function ConditionalDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = isLoggedIn ? { name: 'Alex Kamau' } : null;

  return (
    <div className="exercise-card">
      <h3 className="exercise-title">Conditional Rendering</h3>
      <p className="exercise-note">Task 15.4 · Exercise 3 — &&, ternary, early return</p>

      {/* Toggle the "user" */}
      <div className="cr-toggle-row">
        <span>User status:</span>
        <button
          className={`btn ${isLoggedIn ? 'btn-danger' : 'btn-primary'}`}
          onClick={() => setIsLoggedIn(v => !v)}
        >
          {isLoggedIn ? '🚪 Log out' : '🔑 Log in'}
        </button>
      </div>

      {/* ── Pattern 1: && operator ──────────────────────── */}
      <section className="cr-section">
        <h4>① <code>&&</code> operator — show only if true</h4>
        <div className="cr-box">
          {user && (
            <p className="cr-result cr-filled">
              ✅ Hello, {user.name}! <em>(&amp;&amp; — logged in)</em>
            </p>
          )}
          {!user && (
            <p className="cr-result cr-empty">
              🚫 Not shown when logged in <em>(!user &amp;&amp;)</em>
            </p>
          )}
        </div>
        <details className="code-note">
          <summary>Code</summary>
          <pre>{`{user && <p>Hello, {user.name}!</p>}
{!user && <p>Please log in</p>}`}</pre>
        </details>
      </section>

      {/* ── Pattern 2: Ternary ──────────────────────────── */}
      <section className="cr-section">
        <h4>② Ternary — either / or</h4>
        <div className="cr-box">
          {user ? (
            <p className="cr-result cr-filled">
              🟢 Logged in as <strong>{user.name}</strong> <em>(ternary — true branch)</em>
            </p>
          ) : (
            <p className="cr-result cr-empty">
              🔴 No user — please log in <em>(ternary — false branch)</em>
            </p>
          )}
        </div>
        <details className="code-note">
          <summary>Code</summary>
          <pre>{`{user
  ? <p>Logged in as {user.name}</p>
  : <p>Please log in</p>
}`}</pre>
        </details>
      </section>

      {/* ── Pattern 3: Early return ─────────────────────── */}
      <section className="cr-section">
        <h4>③ Early return — bail before the main render</h4>
        <div className="cr-box">
          <UserGreeting user={user} />
        </div>
        <details className="code-note">
          <summary>Code</summary>
          <pre>{`function UserGreeting({ user }) {
  if (!user) {
    // Return early — nothing else runs
    return <p>Please log in</p>;
  }
  return <p>Welcome, {user.name}!</p>;
}`}</pre>
        </details>
      </section>
    </div>
  );
}

export default ConditionalDemo;