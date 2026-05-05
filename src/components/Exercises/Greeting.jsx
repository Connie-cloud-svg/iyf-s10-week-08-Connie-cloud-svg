// Task 15.3 — Props & Task 15.1 — Conditional rendering by time of day
function Greeting({ name = "Guest", timeOfDay }) {
  // Derive greeting from timeOfDay prop OR from the actual current hour
  const getGreeting = () => {
    const period = timeOfDay || (() => {
      const hour = new Date().getHours();
      if (hour < 12) return "morning";
      if (hour < 17) return "afternoon";
      return "evening";
    })();

    switch (period) {
      case "morning":   return { text: "Good morning", emoji: "🌅" };
      case "afternoon": return { text: "Good afternoon", emoji: "☀️" };
      case "evening":   return { text: "Good evening", emoji: "🌙" };
      default:          return { text: "Hello", emoji: "👋" };
    }
  };

  const { text, emoji } = getGreeting();

  return (
    <div className="exercise-box">
      <h3>Greeting Exercise</h3>
      <p className="greeting-message">
        {emoji} {text}, <strong>{name}</strong>!
      </p>
    </div>
  );
}

export default Greeting;