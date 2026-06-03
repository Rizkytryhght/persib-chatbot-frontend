function Button({
  children,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "12px 24px",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button;