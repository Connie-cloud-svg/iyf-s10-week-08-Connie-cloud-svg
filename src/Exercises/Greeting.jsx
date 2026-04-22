// Task 15.3 Exercise 1 + Daily Challenge 1: Greeting Component
// Demonstrates: props, default props, conditional rendering based on prop value

function Greeting({ name = 'Guest', timeOfDay }) {
  // Derive greeting from timeOfDay prop
  const getGreeting = () => {
    switch (timeOfDay) {
      case 'morning':
        return { emoji: '🌅', text: `Good morning, ${name}!`, sub: 'Hope you slept well.' };
      case 'afternoon':
        return { emoji: '☀️', text: `Good afternoon, ${name}!`, sub: 'Hope your day is going great.' };
      case 'evening':
        return { emoji: '🌇', text: `Good evening, ${name}!`, sub: 'Time to wind down.' };
      case 'night':
        return { emoji: '🌙', text: `Good night, ${name}!`, sub: 'Sleep well!' };
      default:
        return { emoji: '👋', text: `Hello, ${name}!`, sub: 'Welcome to CommunityHub.' };
    }
  };

  const { emoji, text, sub } = getGreeting();

  return (
    <div className="greeting-box">
      <span className="greeting-emoji">{emoji}</span>
      <h2 className="greeting-text">{text}</h2>
      <p className="greeting-sub">{sub}</p>
      {/* Early return pattern note: if name is empty we'd return early above */}
    </div>
  );
}

export default Greeting;