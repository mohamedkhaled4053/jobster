export default function FormRowSelect({ name, value, labelText, handleChange }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select name={name} id={name} className="form-select" value={value}>
        <option value="interview">interview</option>
        <option value="declined">declined</option>
        <option value="pending">pending</option>
      </select>
    </div>
  );
}
