import useSignOut from "../../hooks/useSignOut";
import { confirmAction } from "../../utils/alert";
import { StyleSheet } from "react-native";
import theme from "../../theme";
import SubmitButton from "../SubmitButton";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    margin: 5,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

const SignOut = () => {
  const [signOut] = useSignOut();

  const onSignOutPressed = async () => {
    // console.log("Sign out!");
    await signOut();
  };

  const onSignOut = () => {
    confirmAction(
      "Log out",
      "Are you sure you want to log out",
      "Yes",
      "No",
      onSignOutPressed
    );
  };

  return (
    <SubmitButton
      onSubmit={onSignOut}
      buttonLabel="Sign out"
      style={styles.button}
    />
  );
};

export default SignOut;
