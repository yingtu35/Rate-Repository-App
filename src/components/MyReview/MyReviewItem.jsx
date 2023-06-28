import { Pressable, View, StyleSheet } from "react-native";
import Text from "../Text";
import ReviewItem from "../ReviewItem";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    alignItems: "center",
    width: 180,
    margin: 5,
    padding: 15,
    borderRadius: 5,
  },
  viewButton: {
    backgroundColor: theme.colors.primary,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
  },
});

const MyReviewItem = ({ review, navigate, onDelete }) => {
  return (
    <View style={styles.container}>
      <ReviewItem review={review} title={review.repositoryId} />
      <View style={styles.buttonGroup}>
        <Pressable
          onPress={() => {
            navigate(`/Repository/${review.repositoryId}`);
          }}
          style={[styles.button, styles.viewButton]}
        >
          <Text color="white">View repository</Text>
        </Pressable>
        <Pressable
          onPress={() => onDelete(review.id)}
          style={[styles.button, styles.deleteButton]}
        >
          <Text color="white">Delete Review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyReviewItem;
