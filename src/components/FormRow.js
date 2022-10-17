export default function FormRow({ name, type, value, label }) {
  return (
    <div className="form-row">
      <label for="name" className="form-label">
        {label || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        className="form-input"
        value={value}
      />
    </div>
  );
}
