import { useField } from "formik";
import TextInput from "./TextInput";
import Text from "./Text";
import { StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    height: 50,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  textError: {
    marginHorizontal: 5,
    color: theme.colors.error,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  // Check if the field is touched and the error message is present
  const showError = meta.error && meta.touched;
  const textInputStyle = [styles.input, showError && styles.inputError];

  return (
    <>
      <TextInput
        onChangeText={(text) => helpers.setValue(text)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={textInputStyle}
        {...props}
      />
      {/* Show the error message if the value of showError variable is true  */}
      {showError && <Text style={styles.textError}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
