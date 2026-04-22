function Greeting({ name = 'Guest', timeOfDay }) {
  const getGreeting = () => {
    switch (timeOfDay) {
      case 'morning':   return `Good morning, ${name}!`;
      case 'afternoon': return `Good afternoon, ${name}!`;
      case 'evening':   return `Good evening, ${name}!`;
      default:          return `Hello, ${name}!`;
    }
  };

  return <h2>{getGreeting()}</h2>;
}

export default Greeting;