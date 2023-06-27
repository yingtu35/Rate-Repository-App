import * as yup from "yup";
import { Formik } from "formik";
import SignUpForm from "./SignUpForm";

const SignUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Length of username should be between 5 and 30")
    .max(30, "Length of username should be between 5 and 30")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Length of password should be between 5 and 30")
    .max(30, "Length of password should be between 5 and 30")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Entered password doest not match")
    .required("Password confirmation is required"),
});

const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignUpSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;
