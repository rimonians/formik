import React from "react";
import "../styles/Signup.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username can't be empty")
    .min(5, "Username at least 5 character long")
    .max(10, "Username can't be longer than 10 character"),
  email: Yup.string()
    .required("Email can't be empty")
    .email("Not a valid email address"),
  password: Yup.string()
    .required("Password can't be empty")
    .min(5, "Password at least 5 character long"),
});
const onSubmit = (values) => {
  Object.entries(values).map((el) => console.log(`${el[0]} : ${el[1]}`));
};

const Signup = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-controll">
          <h3>Signup Form</h3>
          <p>It's easy & free</p>
        </div>
        <div className="form-controll">
          <label htmlFor="username">Enter username</label>
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            spellCheck="false"
            autoComplete="off"
          />
          <ErrorMessage
            name="username"
            render={(msg) => <p className="error">{msg}</p>}
          />
        </div>
        <div className="form-controll">
          <label htmlFor="email">Enter email</label>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email address"
            spellCheck="false"
            autoComplete="off"
          />
          <ErrorMessage
            name="email"
            render={(msg) => <p className="error">{msg}</p>}
          />
        </div>
        <div className="form-controll">
          <label htmlFor="password">Enter password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            spellCheck="false"
            autoComplete="off"
          />
          <ErrorMessage
            name="password"
            render={(msg) => <p className="error">{msg}</p>}
          />
        </div>
        <div className="form-controll">
          <button type="submit">Signup</button>
        </div>
      </Form>
    </Formik>
  );
};

export default Signup;
