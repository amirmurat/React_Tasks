import { Formik } from "formik";
import RadioGroup from "./RadioGroup";
import SelectField from "./SelectField";
import "../styles/index.css";

import * as yup from "yup";

const schema = () =>
  yup.object({
    fullName: yup.string().required("Full Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    course: yup.string().required("Please select a course"),
    gender: yup.string().required("Please select gender"),
    dateOfBirth: yup.string().required("Date of birth is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
  });

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
      validationSchema={schema()}
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
              value={values.course}
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
              value={values.gender}
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
