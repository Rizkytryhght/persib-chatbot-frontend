function CustomSelect({
  label,
  value,
  options,
  onChange,
}) {
  return (
    <div>
      <label>{label}</label>

      <br />

      <select
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomSelect;