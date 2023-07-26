import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";
import SubmitButton from "../SubmitButton";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: 5,
    marginTop: 5,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      {/* <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        editable={nameEditable}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        editable={nameEditable}
      /> */}
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline />
      <SubmitButton
        onSubmit={onSubmit}
        buttonLabel="Create a Review"
        style={styles.button}
      />
    </View>
  );
};

export default CreateReviewForm;
