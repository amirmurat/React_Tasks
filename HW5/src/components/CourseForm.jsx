import { Formik } from "formik";
import RadioGroup from "./RadioGroup";
import SelectField from "./SelectField";
import "../styles/index.css";

const CourseForm = () => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        course: "",
        gender: "",
        dateOfBirth: "",
        city: "",
        country: "",
        phone: "",
        education: "",
        address: "",
        state: "",
        zipCode: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.fullName) {
          errors.fullName = "Full Name is required";
        }

        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "Password is required";
        } else if (!/^.{6,}$/.test(values.password)) {
          errors.password = "Password must be at least 6 characters";
        }

        if (!values.course) {
          errors.course = "Please select a course";
        }

        if (!values.gender) {
          errors.gender = "Please select gender";
        }

        if (!values.dateOfBirth) {
          errors.dateOfBirth = "Date of birth is required";
        }

        if (!values.city) {
          errors.city = "City is required";
        }

        if (!values.country) {
          errors.country = "Country is required";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
            placeholder="Full Name"
          />
          {errors.fullName && touched.fullName && (
            <div style={{ color: "red" }}>{errors.fullName}</div>
          )}
          <div className="email-password">
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
              )}
            </div>
          </div>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            touched={touched}
            placeholder="Phone"
          />
          <p>Wich course are you appliying for?</p>
          <div className="courses">
            <RadioGroup
              name="course"
              options={["Course A", "Course B", "Course C"]}
              values={values.gender}
              errors={errors.course}
              touched={touched.course}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
          <p>Date of birth</p>
          <div className="date-gender">
            <div className="dateOfBirth">
              <input
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateOfBirth}
              />
              {errors.dateOfBirth && touched.dateOfBirth && (
                <div style={{ color: "red" }}>{errors.dateOfBirth}</div>
              )}
            </div>
            <RadioGroup
              name="gender"
              options={["Male", "Female"]}
              values={values.gender}
              errors={errors.gender}
              touched={touched.gender}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
          <p>Education</p>
          <SelectField
            name="education"
            label="Education"
            options={["School", "College", "University"]}
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <textarea
            name="address"
            rows="5"
            cols="40"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            touched={touched}
            placeholder="Address"
          />
          <div>
            <div className="row1">
              <SelectField
                name="city"
                label="City"
                options={["Almaty", "Astana", "Taldyqorgan"]}
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <input
                type="text"
                name="state"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.state}
                touched={touched}
                placeholder="State"
              />
            </div>
            <div className="row2">
              <SelectField
                name="country"
                label="Country"
                options={["Kazakhstan", "USA", "Russia"]}
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <input
                type="number"
                name="zipCode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.zipCode}
                touched={touched}
                placeholder="Zip Code"
              />
            </div>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default CourseForm;
