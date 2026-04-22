function Button({
    text = "Click Me!"
    variant = "primary"
    size = "medium"
    disabled = "false"
})  { 
    return (
        <button
            className={`btn btn-${variant} btn-${size}`}
            disabled={disabled}
        >
        {text}
        </button>
    );
}
 export default Button; 
