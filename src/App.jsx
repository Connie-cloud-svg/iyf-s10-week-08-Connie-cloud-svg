import Header from "./components/Header";
import PostCard from "./components/Postcard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const name = "Concepter Bosibori";
  const date = new Date();
  const time = date.getHours();

  let greeting;
  if (time < 12) {
    greeting = "Good Morning Alumni! 🌅 Ready to connect and share your experiences with fellow alumni?";
  } else if (time < 18) {
    greeting = "Good Afternoon Alumni! ☀️ Hope you're having a great day. Don't forget to check out the latest posts and connect with your fellow alumni!";
  } else {
    greeting = "Good Evening Alumni! 🌙 Unwind and share your thoughts with the community. Let's keep the conversations going!";
  }

  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>Hello👋 I'm Connie and this is my first React app!</p>
        <p>
          I'm excited to have you here, as I take my first steps in the world of
          React development!
        </p>
        <p>
          My first project is a simple alumni networking app that I'm building
          from scratch. You shall be interacting with the app below. Bye now 😊!
        </p>
      </div>
      <section className="App">
        <Header />
        <main>
          <h2>Welcome to IYF Alumni Connect!</h2>
          <PostCard />
        </main>

        <section className="date">
          <p>{date.toLocaleDateString()}</p>
          <p>{greeting}</p>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default App;
