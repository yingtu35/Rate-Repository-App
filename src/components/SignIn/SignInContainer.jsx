import * as yup from "yup";
import { Formik } from "formik";
import SignInForm from "./SignInForm";

const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username should be at least 4 characters")
    .required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignInSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInContainer;
