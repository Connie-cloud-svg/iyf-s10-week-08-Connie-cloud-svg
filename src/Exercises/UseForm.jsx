import { useState } from 'react';

// Task 16.1 Exercise 3: Multiple State Variables
// Each field has its OWN useState — this is the key pattern to learn

function UserForm() {
  // Three separate pieces of state — not one big object
  const [name,  setName]  = useState('');
  const [email, setEmail] = useState('');
  const [age,   setAge]   = useState('');

  // Derived: is the form complete?
  const isComplete = name.trim() && email.includes('@') && Number(age) > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isComplete) return;
    alert(`Submitted!\nName: ${name}\nEmail: ${email}\nAge: ${age}`);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <div className="exercise-card">
      <h3 className="exercise-title">Multiple State Variables</h3>
      <p className="exercise-note">Task 16.1 · Exercise 3 — three independent useState calls</p>

      <form onSubmit={handleSubmit} className="user-form" noValidate>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="uf-name">Name</label>
          <input
            id="uf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="form-input"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="uf-email">Email</label>
          <input
            id="uf-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="form-input"
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="uf-age">Age</label>
          <input
            id="uf-age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="0"
            min="0"
            max="120"
            className="form-input"
          />
        </div>

        {/* Live preview — shows derived state in action */}
        {(name || email || age) && (
          <div className="form-preview">
            <strong>Live preview:</strong>{' '}
            {name || '?'} · {email || '?'} · {age ? `${age} yrs` : '? yrs'}
          </div>
        )}

        <div className="form-actions">
          <button type="button" className="btn btn-ghost" onClick={handleReset}>
            Clear
          </button>
          <button type="submit" className="btn btn-primary" disabled={!isComplete}>
            Submit
          </button>
        </div>
      </form>

      <details className="code-note">
        <summary>How it works</summary>
        <pre>{`// THREE separate useState calls — NOT one object
const [name,  setName]  = useState('');
const [email, setEmail] = useState('');
const [age,   setAge]   = useState('');

// Each onChange updates only its own piece of state
onChange={(e) => setName(e.target.value)}
onChange={(e) => setEmail(e.target.value)}
onChange={(e) => setAge(e.target.value)}`}</pre>
      </details>
    </div>
  );
}

export default UserForm;