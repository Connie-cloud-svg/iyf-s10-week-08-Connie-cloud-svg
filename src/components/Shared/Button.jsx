// Task 15.3 — Props with default values & destructuring
function Button({
  text = "Click me",
  variant = "primary", // "primary" | "secondary" | "danger"
  size = "medium",     // "small" | "medium" | "large"
  disabled = false,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;