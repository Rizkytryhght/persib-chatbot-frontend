function ToggleSwitch({
  checked,
  onChange,
}) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}

export default ToggleSwitch;