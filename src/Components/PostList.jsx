import PostCard from "./PostCard";

function PostList() {
  const posts = [
    {
      id: 1,
      title: "Getting started with react",
      excerpt: "Learn the basics of React...",
      author: "Maria",
      date: "April 20",
    },
    {
      id: 2,
      title: "JavaScript Best Practices",
      excerpt: "Writing cleaner code better in understanding and debugging.",
      author: "Lana",
      date: "March 15",
    },
    {
      id: 3,
      title: "Why choose Claude Code as your assistant?",
      excerpt:
        "Claude code is a tool that can boost your coding skills.",
      author: "Steve",
      date: "February 23",
    },
  ];

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default PostList;
