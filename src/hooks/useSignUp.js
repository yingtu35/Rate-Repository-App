import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();

  const signUp = async (user) => {
    const { data } = await mutate({ variables: { user } });
    await signIn(user);

    return { data };
  };

  return [signUp, result];
};

export default useSignUp;
