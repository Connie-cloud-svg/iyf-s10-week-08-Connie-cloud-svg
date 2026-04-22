function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <h1>🌐 CommunityHub</h1>
      </div>
      <nav className="header-nav">
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <a href="#">About</a>
      </nav>
      <div className="header-actions">
        <button className="btn btn-primary btn-small">Login</button>
      </div>
    </header>
  );
}

export default Header;
