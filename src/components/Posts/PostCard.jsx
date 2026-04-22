function PostCard({ post, onLike, onDelete }) {
  const { title, excerpt, author, date, likes } = post;

  return (
    <article className="post-card">
      <h3 className="post-title">{title}</h3>
      <p className="post-excerpt">{excerpt}</p>

      <div className="post-meta">
        <span>✍️ {author}</span>
        <span>📅 {date}</span>
      </div>

      <div className="post-actions">
        <button className="btn btn-secondary btn-small" onClick={onLike}>
          ❤️ {likes}
        </button>
        <button className="btn btn-danger btn-small" onClick={onDelete}>
          🗑 Delete
        </button>
      </div>
    </article>
  );
}

export default PostCard;