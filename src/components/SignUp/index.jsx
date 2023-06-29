// Formik x React Native example
// import { useNavigate } from "react-router-native";
import SignUpContainer from "./SignUpContainer";
import useSignUp from "../../hooks/useSignUp";

const SignUp = ({ navigation }) => {
  // const navigate = useNavigate();
  const [signUp] = useSignUp();

  const onSubmit = async (values, actions) => {
    const { username, password } = values;
    // console.log(values);
    const user = {
      username,
      password,
    };
    try {
      // navigation.navigate("Repositories");
      await signUp(user);
      // console.log(data);
      // navigate("/");
    } catch (error) {
      console.log(error.message);
      actions.setFieldError("username", error.message);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
