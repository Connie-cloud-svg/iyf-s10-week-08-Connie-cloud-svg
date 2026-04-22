function Sidebar({ posts = [] }) {
  const tags = ['React', 'JavaScript', 'CSS', 'HTML', 'Vite'];

  // Bonus: derive popular posts from state
  const popularPosts = [...posts]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  return (
    <aside className="sidebar">
      {/* About */}
      <div className="sidebar-section">
        <h3>About</h3>
        <p>CommunityHub is a place to share ideas, ask questions, and connect with fellow developers.</p>
      </div>

      {/* Popular Posts */}
      <div className="sidebar-section">
        <h3>Popular Posts</h3>
        <ul className="sidebar-list">
          {popularPosts.map(post => (
            <li key={post.id}>
              <span>{post.title}</span>
              <small>❤️ {post.likes}</small>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="sidebar-section">
        <h3>Tags</h3>
        <div className="tag-list">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;