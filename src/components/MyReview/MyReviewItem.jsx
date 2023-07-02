import { Pressable, View, StyleSheet } from "react-native";
import Text from "../Text";
import ReviewItem from "../ReviewItem";
import theme from "../../theme";
import PropTypes from "prop-types";

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

const MyReviewItem = ({ review, onViewRepository, onDelete }) => {
  return (
    <View style={styles.container}>
      <ReviewItem review={review} title={review.repositoryId} />
      <View style={styles.buttonGroup}>
        <Pressable
          onPress={() => onViewRepository(review.repositoryId)}
          style={[styles.button, styles.viewButton]}
        >
          <Text color="white" fontWeight="bold">
            View repository
          </Text>
        </Pressable>
        <Pressable
          onPress={() => onDelete(review.id)}
          style={[styles.button, styles.deleteButton]}
        >
          <Text color="white" fontWeight="bold">
            Delete Review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyReviewItem;

MyReviewItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
    repositoryId: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    text: PropTypes.string,
  }),
  onViewRepository: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
