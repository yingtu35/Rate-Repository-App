// Formik x React Native example
import { useNavigate } from "react-router-native";
import useSignIn from "../../hooks/useSignIn";
import SignInContainer from "./SignInContainer";

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values, actions) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      // console.log(data)
      navigate("/");
    } catch (error) {
      // TODO: display error message to the view
      console.log(error);
      actions.setErrors({ username: error.message, password: error.message });
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
