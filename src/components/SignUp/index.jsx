// Formik x React Native example
import { useNavigate } from "react-router-native";
import SignUpContainer from "./SignUpContainer";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();

  const onSubmit = async (values, actions) => {
    const { username, password } = values;
    // console.log(values);
    const user = {
      username,
      password,
    };
    try {
      await signUp(user);
      // console.log(data);
      navigate("/");
    } catch (error) {
      // TODO: display error message to the view
      console.log(error.message);
      actions.setFieldError("username", error.message);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
