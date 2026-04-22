
// Daily Challenge 2: Card Component with variant prop
// Demonstrates: children prop, conditional className, prop types
// Variants: primary | secondary | outlined (default: primary)

function Card({ children, title, variant = 'primary' }) {
  // Map variant → CSS class (defined in App.css)
  const variantClass = `card card--${variant}`;

  return (
    <div className={variantClass}>
      {/* Title is optional — only renders if provided */}
      {title && <h3 className="card-title">{title}</h3>}

      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;

/* ─── Usage examples ──────────────────────────────────────────────────────────
  <Card title="Primary" variant="primary">
    <p>This is a primary card.</p>
  </Card>

  <Card title="Secondary" variant="secondary">
    <p>This is a secondary card.</p>
  </Card>

  <Card title="Outlined" variant="outlined">
    <p>This is an outlined card.</p>
  </Card>

  <Card>
    {/* No title — body only * /}
    <p>Just content, no title.</p>
  </Card>
──────────────────────────────────────────────────────────────────────────── */