import { useState } from 'react';
import Counter        from './Counter';
import Toggle         from './Toggle';
import Greeting       from './Greeting';
import UserForm       from './UserForm';
import EventExamples  from './EventExamples';
import ConditionalDemo from './ConditionalDemo';

// ─── Greeting live demo wrapper ───────────────────────────────────────────────
function GreetingDemo() {
  const [name, setName] = useState('Alex');
  const [timeOfDay, setTimeOfDay] = useState('morning');

  return (
    <div className="exercise-card">
      <h3 className="exercise-title">Greeting Component</h3>
      <p className="exercise-note">Task 15.3 Ex 1 + Daily Ch. 1 — name &amp; timeOfDay props</p>

      {/* Controls to explore different prop combinations */}
      <div className="greeting-controls">
        <div className="form-group">
          <label htmlFor="g-name">name prop</label>
          <input
            id="g-name"
            className="form-input"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Guest"
          />
        </div>
        <div className="form-group">
          <label htmlFor="g-time">timeOfDay prop</label>
          <select
            id="g-time"
            className="form-input"
            value={timeOfDay}
            onChange={e => setTimeOfDay(e.target.value)}
          >
            <option value="">— none (default) —</option>
            <option value="morning">morning</option>
            <option value="afternoon">afternoon</option>
            <option value="evening">evening</option>
            <option value="night">night</option>
          </select>
        </div>
      </div>

      {/* Live render of Greeting */}
      <div className="greeting-preview">
        <Greeting name={name || undefined} timeOfDay={timeOfDay || undefined} />
      </div>

      <details className="code-note">
        <summary>How to use</summary>
        <pre>{`<Greeting name="Alex" timeOfDay="morning" />
<Greeting name="Wanjiku" timeOfDay="evening" />
<Greeting />  {/* defaults: name="Guest", no timeOfDay */}`}</pre>
      </details>
    </div>
  );
}

// ─── Tab config ──────────────────────────────────────────────────────────────
const TABS = [
  { id: 'counter',     label: '🔢 Counter',      task: '16.1 Ex 1', Component: Counter },
  { id: 'toggle',      label: '🔀 Toggle',       task: '16.1 Ex 2', Component: Toggle },
  { id: 'greeting',    label: '👋 Greeting',     task: '15.3 + Daily 1', Component: GreetingDemo },
  { id: 'userform',    label: '📝 Multi-State',  task: '16.1 Ex 3', Component: UserForm },
  { id: 'events',      label: '⚡ Events',       task: '16.2 Ex 1', Component: EventExamples },
  { id: 'conditional', label: '🔀 Conditional',  task: '15.4 Ex 3', Component: ConditionalDemo },
];

// ─── Exercises Hub ────────────────────────────────────────────────────────────
function Exercises() {
  const [activeTab, setActiveTab] = useState('counter');

  const active = TABS.find(t => t.id === activeTab);
  const ActiveComponent = active?.Component;

  return (
    <div className="exercises-hub">
      <header className="exercises-header">
        <h2>⚛️ Week 8 Exercises</h2>
        <p>IYF Season 10 · React Fundamentals — standalone task demos</p>
      </header>

      {/* Tab bar */}
      <nav className="exercises-tabs" aria-label="Exercise tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
          >
            <span className="tab-label">{tab.label}</span>
            <span className="tab-task">{tab.task}</span>
          </button>
        ))}
      </nav>

      {/* Active exercise */}
      <main className="exercises-content">
        {ActiveComponent && <ActiveComponent />}
      </main>

      {/* Checklist footer */}
      <footer className="exercises-footer">
        <h4>Exercises status</h4>
        <ul className="checklist">
          {TABS.map(t => (
            <li key={t.id} className="checklist-item">
              <span className="check">✅</span>
              <strong>{t.label}</strong>
              <span className="check-task">· {t.task}</span>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Exercises;