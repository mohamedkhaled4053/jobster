export default function FormRow({ name, type, value, label, handleChange }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        className="form-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
