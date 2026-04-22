function Button({
  text = 'Click me',
  onClick,
  variant = 'primary',   // primary | secondary | danger
  size = 'medium',       // small | medium | large
  disabled = false,
  loading = false,
  type = 'button',
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? '⏳ Loading...' : text}
    </button>
  );
}

export default Button;