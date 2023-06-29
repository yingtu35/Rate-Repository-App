import { Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";
import useSignOut from "../hooks/useSignOut";
import { confirmAction } from "../utils/alert";
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

const Profile = () => {
  const [signOut] = useSignOut();

  const onSignOutPressed = async () => {
    // console.log("Sign out!");
    await signOut();
    // navigate("/SignIn");
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
    <View>
      <Text>Username: Test</Text>
      <Pressable onPress={onSignOut} style={styles.button}>
        <Text color="white">Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
