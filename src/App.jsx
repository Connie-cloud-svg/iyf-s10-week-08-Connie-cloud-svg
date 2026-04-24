import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import Sidebar from "./Components/Sidebar";
import Button from "./Components/Button";
import { useState } from "react";

function App() {

  const [posts, setPosts] = useState ([
    {id: 1, title: 'My first react project.', likes: 0},
    {id: 2, title: 'Cleaner JavaScript code.', likes: 0}
  ]);

  const handLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id 
      ? {...post, likes: post.likes + 1 }
      : post
    ));
  };

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
  
  
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
      <PostList />

      <div>
        <Stats totalPosts ={posts.length} totalLikes={totalLikes} />
        <PostList posts={posts} onLike={handLike} />
      </div>

      <Button text="Submit" variant="primary" />
      <Button text="Cancel" variant="secondary" />
      <Button text="Delete" variant="danger" />
      <Button />  
      <div className="Date-Time-Message">
        <p>📅{today.toDateString()}</p>
        <p>{timeMessage}</p>
      </div>
      <Footer />
    </section>
  );
}

export default App;
