import { View, Pressable, StyleSheet } from "react-native";
import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";
import Text from "../Text";

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
const ReviewForm = ({ onSubmit, nameEditable }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        editable={nameEditable}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        editable={nameEditable}
      />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="white">Create a Review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
