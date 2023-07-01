import useSignOut from "../hooks/useSignOut";
import { confirmAction } from "../utils/alert";
import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

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
    <Pressable onPress={onSignOut} style={styles.button}>
      <Text color="white" fontWeight="bold">
        Sign Out
      </Text>
    </Pressable>
  );
};

export default SignOut;
