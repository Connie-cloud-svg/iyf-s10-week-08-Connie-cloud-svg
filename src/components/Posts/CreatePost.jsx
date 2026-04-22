import { useState } from 'react';

function CreatePost({ onCreate }) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.excerpt.trim()) return;

    onCreate({
      ...formData,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    });

    // Reset form after submit
    setFormData({ title: '', excerpt: '', author: '' });
  };

  return (
    <div className="create-post">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Post title"
          className="input"
        />
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          placeholder="What's on your mind?"
          className="input"
          rows={3}
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Your name (optional)"
          className="input"
        />
        <button type="submit" className="btn btn-primary">Publish Post</button>
      </form>
    </div>
  );
}

export default CreatePost;