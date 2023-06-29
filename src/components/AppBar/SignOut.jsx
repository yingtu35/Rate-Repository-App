import { View, StyleSheet, Pressable } from "react-native";
import Text from "../Text";
import useSignOut from "../../hooks/useSignOut";
// import { useNavigate } from "react-router-native";
import { alert } from "../../utils/alert";

const styles = StyleSheet.create({
  tab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

const SignOut = () => {
  const [signOut] = useSignOut();
  // const navigate = useNavigate();

  const onSignOutPressed = async () => {
    // await signOut();
    // navigate("/SignIn");
  };

  const onSignOut = () => {
    alert(
      "Log out",
      "Are you sure you want to log out",
      "Yes",
      "No",
      onSignOutPressed
    );
  };

  return (
    <View style={styles.tab}>
      <Pressable onPress={onSignOut}>
        <Text color="barTab" fontWeight="bold">
          SignOut
        </Text>
      </Pressable>
    </View>
  );
};

export default SignOut;
