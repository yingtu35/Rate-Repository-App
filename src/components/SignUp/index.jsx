import SignUpContainer from "./SignUpContainer";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
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
    } catch (error) {
      console.log(error.message);
      actions.setFieldError("username", error.message);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
