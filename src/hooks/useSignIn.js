import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const signIn = async (credentials) => {
    // console.log(credentials)
    const { data } = await mutate({ variables: { credentials } });
    // console.log(data.authenticate)
    await authStorage.setAccessToken(data.authenticate);
    client.resetStore();
    return { data };
  };

  return [signIn, result];
};

export default useSignIn;
