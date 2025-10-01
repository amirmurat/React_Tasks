import "../styles/index.css";

const SelectField = ({
  name,
  label,
  options,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (
    <div>
      <select
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[name] && touched[name] && (
        <div style={{ color: "red" }}>{errors[name]}</div>
      )}
    </div>
  );
};

export default SelectField;
