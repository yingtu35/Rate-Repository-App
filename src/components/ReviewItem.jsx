import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { format } from "date-fns";
// import CircularProgress from "react-native-circular-progress-indicator";

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
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 20,
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
        {/* <CircularProgress
          value={review.rating}
          inActiveStrokeColor="#a1e6ff"
          inActiveStrokeOpacity={0.2}
        /> */}
        <View style={styles.rating}>
          <Text color="primary" fontWeight="bold">
            {review.rating}
          </Text>
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
