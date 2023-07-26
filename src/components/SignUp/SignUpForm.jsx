import { View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import theme from "../../theme";
import PropTypes from "prop-types";
import SubmitButton from "../SubmitButton";

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
      <SubmitButton
        onSubmit={onSubmit}
        buttonLabel="Sign up"
        style={styles.button}
      />
    </View>
  );
};

export default SignUpForm;

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
