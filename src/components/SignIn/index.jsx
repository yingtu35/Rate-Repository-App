// Formik x React Native example
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";
import SignInContainer from "./SignInContainer";

export const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      // console.log(data)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
