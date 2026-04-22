import { useState } from 'react';
import Header      from './components/Layout/Header';
import Footer      from './components/Layout/Footer';
import Sidebar     from './components/Layout/Sidebar';
import PostList    from './components/Posts/PostList';
import CreatePost  from './components/Post/CreatePost';
import Exercises   from './exercises/Exercises';
import './App.css';
 
const INITIAL_POSTS = [
  { id: 1, title: 'Getting Started with React', excerpt: 'Learn the basics of React components and JSX.', author: 'Alice Wambui', date: 'Apr 15, 2026', likes: 4 },
  { id: 2, title: 'JavaScript Best Practices',  excerpt: 'Write cleaner, more maintainable JS code.', author: 'Brian Otieno', date: 'Apr 10, 2026', likes: 7 },
  { id: 3, title: 'State & Events in React',    excerpt: 'Master useState and event handlers.',          author: 'Cynthia Njeri',  date: 'Apr 8, 2026',  likes: 2 },
];
 
function App() {
  const [posts, setPosts]   = useState(INITIAL_POSTS);
  const [view, setView]     = useState('app'); // 'app' | 'exercises'
 
  // ── Handlers ──────────────────────────────────────────────
  const handleAddPost = ({ title, content }) => {
    const newPost = {
      id: Date.now(),
      title,
      excerpt: content.slice(0, 120) + (content.length > 120 ? '…' : ''),
      author: 'You',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      likes: 0,
    };
    setPosts(prev => [newPost, ...prev]);
  };
 
  const handleLike = (id) =>
    setPosts(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
 
  const handleDelete = (id) =>
    setPosts(prev => prev.filter(p => p.id !== id));
 
  // ── Render ────────────────────────────────────────────────
  return (
    <div className="app">
      <Header />
 
      {/* View toggle — drop this into your Header nav or keep it here */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '.75rem', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
        <button
          className={`btn ${view === 'app' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ marginRight: '.5rem' }}
          onClick={() => setView('app')}
        >
          🏠 CommunityHub
        </button>
        <button
          className={`btn ${view === 'exercises' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setView('exercises')}
        >
          ⚛️ Exercises
        </button>
      </div>
 
      {view === 'exercises' ? (
        <Exercises />
      ) : (
        <div className="main-layout">
          <Sidebar />
          <main className="main-content">
            <CreatePost onAddPost={handleAddPost} />
            <PostList
              posts={posts}
              onLike={handleLike}
              onDelete={handleDelete}
            />
          </main>
        </div>
      )}
 
      <Footer />
    </div>
  );
}
 
export default App;