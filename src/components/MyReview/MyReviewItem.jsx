import { View, StyleSheet } from "react-native";
import ReviewItem from "../ReviewItem";
import theme from "../../theme";
import PropTypes from "prop-types";
import SubmitButton from "../SubmitButton";

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
        <SubmitButton
          onSubmit={() => onViewRepository(review.repositoryId)}
          buttonLabel="View repository"
          style={[styles.button, styles.viewButton]}
        />
        <SubmitButton
          onSubmit={() => onDelete(review.id)}
          buttonLabel="Delete Review"
          style={[styles.button, styles.deleteButton]}
        />
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
