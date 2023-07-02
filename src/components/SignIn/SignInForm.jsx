import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import theme from "../../theme";
import Text from "../Text";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    margin: 5,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="white" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;

SignInForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
};
