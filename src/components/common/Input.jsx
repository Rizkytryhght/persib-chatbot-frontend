import "../../styles/components/input.css";

function Input({
  label,
  type = "text",
  value,
  placeholder,
}) {
  return (
    <div className="form-group">

      {label && (
        <label>{label}</label>
      )}

      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
      />

    </div>
  );
}

export default Input;