import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import theme from "../../theme";
import Text from "../Text";
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="white">Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
