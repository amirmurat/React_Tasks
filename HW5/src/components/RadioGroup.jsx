import "../styles/index.css";

const RadioGroup = ({
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
            value={option}

            onChange={handleChange}
            onBlur={handleBlur}
            checked={values === option}
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
