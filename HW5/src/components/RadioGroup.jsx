import "../styles/index.css";

const RadioGroup = ({
  name,
  options,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values[name] === option}
          />
          {option}
        </label>
      ))}
      {errors[name] && touched[name] && (
        <div style={{ color: "red" }}>{errors[name]}</div>
      )}
    </div>
  );
};

export default RadioGroup;
