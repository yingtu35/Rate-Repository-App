import { View, Pressable, StyleSheet, ActivityIndicator } from "react-native";
import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";
import Text from "../Text";
import { useEffect, useState } from "react";

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
      <Pressable
        onPress={handleSubmit}
        disabled={isCreating}
        style={styles.button}
      >
        {isCreating ? (
          <ActivityIndicator size="small" color={theme.colors.white} />
        ) : (
          <Text color="white" fontWeight="bold">
            Create a Review
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default CreateReviewForm;
