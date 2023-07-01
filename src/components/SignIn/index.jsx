import useSignIn from "../../hooks/useSignIn";
import SignInContainer from "./SignInContainer";

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values, actions) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
    } catch (error) {
      console.log(error);
      actions.setErrors({ username: error.message, password: error.message });
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
