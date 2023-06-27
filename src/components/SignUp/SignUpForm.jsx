import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import theme from "../../theme";
import Text from "../Text";
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
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

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="confirmPassword"
        placeholder="Confirm your password"
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="white">Sign up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
