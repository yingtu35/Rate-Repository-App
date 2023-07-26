import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { format } from "date-fns";
import CircularProgress from "react-native-circular-progress-indicator";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  reviewInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    // alignItems: "stretch",
  },
  rating: {
    margin: 10,
    alignItems: "center",
  },
  reviewDetails: {
    padding: 10,
    gap: 5,
    flexShrink: 1,
  },
});

const ReviewItem = ({ review, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.reviewInfo}>
        <View style={styles.rating}>
          <CircularProgress
            value={review.rating}
            radius={25}
            activeStrokeWidth={5}
            activeStrokeColor={theme.colors.primary}
            inActiveStrokeColor={"#a1e6ff"}
            inActiveStrokeOpacity={0.2}
          />
        </View>
        <View style={styles.reviewDetails}>
          <Text fontWeight="bold">{title}</Text>
          <Text color="textSecondary">
            {format(new Date(review.createdAt), "MM/dd/yyyy")}
          </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    text: PropTypes.string,
  }),
};
