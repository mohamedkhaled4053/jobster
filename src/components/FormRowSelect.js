export default function FormRowSelect({ name, value, labelText, handleChange, list }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select name={name} id={name} className="form-select" value={value}>
        {list.map(option=>
          <option value={option}>{option}</option>)}
      </select>
    </div>
  );
}
