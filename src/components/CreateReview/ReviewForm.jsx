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
    alignItems: "center",
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
});
const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="white">Create a Review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
