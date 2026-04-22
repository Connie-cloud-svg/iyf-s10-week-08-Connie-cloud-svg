import { useState } from 'react';
import PostCard from './PostCard';

function PostList({ posts = [], onLike, onDelete }) {
  const [query, setQuery] = useState('');

  const filtered = posts.filter(post => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      post.title?.toLowerCase().includes(q) ||
      post.excerpt?.toLowerCase().includes(q) ||
      post.author?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="post-list-wrapper">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="search"
          className="search-input"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search posts…"
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery('')}>✕</button>
        )}
      </div>

      {posts.length === 0 ? (
        <div className="empty-state"><p>🗒️ No posts yet. Be the first to post!</p></div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <p>No posts match "<strong>{query}</strong>".</p>
          <button className="btn btn-ghost" onClick={() => setQuery('')}>Clear</button>
        </div>
      ) : (
        <div className="post-list">
          {filtered.map(post => (
            <PostCard
              key={post.id}
              {...post}
              onLike={onLike ? () => onLike(post.id) : undefined}
              onDelete={onDelete ? () => onDelete(post.id) : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;