import { useState } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";
import PostList from "./components/Post/PostList";
import CreatePost from "./components/Post/CreatePost";
import Counter from "./components/exercises/Counter";
import Toggle from "./components/exercises/Toggle";
import Greeting from "./components/exercises/Greeting";
import EventHandlerDemo from "./components/exercises/EventHandlerDemo";
import "./App.css";
 
// --- Initial seed data ---
const initialPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React — components, props, and state...",
    author: "Philip Njau",
    date: "April 20, 2026",
    likes: 5,
  },
  {
    id: 2,
    title: "JavaScript Best Practices",
    excerpt: "Write cleaner, more maintainable code with these tips...",
    author: "Bob",
    date: "April 24, 2026",
    likes: 3,
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    excerpt: "When to use Grid and when Flexbox is the better choice...",
    author: "Charlie",
    date: "March 30, 2026",
    likes: 8,
  },
];
 

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCreatePost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleLike = (id) => {
    setPosts((prev) =>
    prev.map((post) => 
    post.id === id ? { ...post, post.likes + 1} : post
    )
   );
  };

   const handleDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };
 
  // Compute stats for display
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
 
  return (
    <div className="app">
      {/* Header receives login state + handler */}
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn((prev) => !prev)}
      />
 
      {/* Stats bar — Task 16.4 */}
      <div className="stats-bar">
        <span>📝 {posts.length} posts</span>
        <span>❤️ {totalLikes} total likes</span>
      </div>
 
      <div className="app-body">
        {/* Main content */}
        <main className="main-content">
          {/* Greeting — uses timeOfDay prop (Task 15.3) */}
          <Greeting name={isLoggedIn ? "Member" : "Guest"} />
 
          {/* Create Post form */}
          <CreatePost onCreatePost={handleCreatePost} />
 
          {/* Post list with search/filter */}
          <PostList
            posts={posts}
            onLike={handleLike}
            onDelete={handleDelete}
          />
 
          {/* ── Lesson Exercise Demos ──────────────────────────── */}
          <section className="exercises-section">
            <h2>📚 Lesson Exercises</h2>
            <div className="exercises-grid">
              <Counter />
              <Toggle />
              <EventHandlerDemo />
            </div>
          </section>
        </main>
 
        {/* Sidebar receives posts to compute popular posts */}
        <Sidebar posts={posts} />
      </div>
 
      <Footer />
    </div>
  );


export default App;
}