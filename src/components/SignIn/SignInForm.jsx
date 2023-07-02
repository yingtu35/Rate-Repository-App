import { Pressable, View, StyleSheet, ActivityIndicator } from "react-native";
import FormikTextInput from "../FormikTextInput";
import theme from "../../theme";
import Text from "../Text";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

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
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = async () => {
    setIsCreating(true);
    // await onSubmit();
    // setIsCreating((isCreating) => !isCreating);
  };

  useEffect(() => {
    const executeSubmit = async () => {
      await onSubmit();
      setIsCreating(false);
    };

    if (isCreating) {
      executeSubmit();
    }
  }, [isCreating]);
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable
        onPress={handleSubmit}
        disabled={isCreating}
        style={styles.button}
      >
        {isCreating && (
          <ActivityIndicator size="small" color={theme.colors.white} />
        )}
        <Text color="white" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
