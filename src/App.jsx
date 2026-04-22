import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostCard from "./Components/Postcard";
import Sidebar from "./Components/Sidebar";

function App() {
  const name = "Connie";
  const today = new Date();
  const hour = today.getHours();

  const timeMessage =
    hour < 12
      ? "Good morning! ☀️. Ready for a beautiful day?"
      : hour < 17
        ? "Good afternoon! 🌤️. Hope your day is going great!"
        : "Good evening! 🌙. What have you achieved today?";

  return (
    <section className="App">
      <h1>Hello👋, I'm {name}.</h1>
      <p>I am a developer learning React at IYF Weekend Academy Season 10.</p>
      <p>
        I enjoy building things and solving problems one component at a time.
      </p>
      <p>This is my Week 8 project: .</p>
      <Header />
      <Sidebar />
      <PostCard />
      <div className="Date-Time-Message">
        <p>📅{today.toDateString()}</p>
        <p>{timeMessage}</p>
      </div>
      <Footer />
    </section>
  );
}

export default App;
