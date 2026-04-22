// Shared Input Component

function Input({ name, value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      className="input"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

export default Input;