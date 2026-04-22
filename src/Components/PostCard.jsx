function PostCard({ title, excerpt, author, date }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div className="post-meta">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
    </article>
  );
}

function PostList() {
  return (
    <div className="post-list">
      <PostCard
        title="Learn the basics of React..."
        excerpt="Learn the basics of React..."
        author="John Doe"
        date="Jan 15, 2026"
      />
      <PostCard
        title="JavaScript Best Practices"
        excerpt="Write cleaner code..."
        author="Jane Smith"
        date="Jan 10, 2026"
      />
    </div>
  );
}

export default PostCard;
