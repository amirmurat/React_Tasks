import "../styles/index.css";

const RadioGroup = ({
  name,
  options,
  value,
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
            name={name}
            type="radio"
            value={option}

            onChange={handleChange}
            onBlur={handleBlur}
            checked={value === option}
          />
          {option}
        </label>
      ))}
      {errors && touched && (
        <div style={{ color: "red" }}>{errors}</div>
      )}
    </div>
  );
};

export default RadioGroup;
