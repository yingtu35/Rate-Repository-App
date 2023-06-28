import { FlatList, Pressable, View, StyleSheet, Alert } from "react-native";
import ItemSeparator from "./ItemSeparator";
import Text from "./Text";
import useCurrentUser from "../hooks/useCurrentUser";
import useDeleteReview from "../hooks/useDeleteReview";
import ReviewItem from "./ReviewItem";
import theme from "../theme";
import { useNavigate } from "react-router-native";

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

const MyReviewContainer = ({
  loading,
  error,
  me,
  deleteReview,
  refetch,
  fetchMore,
}) => {
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }
  const navigate = useNavigate();
  const handleDelete = (id) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: async () => {
            try {
              await deleteReview(id);
              refetch({ withReviews: true });
            } catch (error) {
              console.log(error.message);
            }
          },
        },
        // The "No" button
        {
          text: "No",
        },
      ]
    );
  };

  const onEndReached = () => {
    console.log("the end has reached");
    fetchMore();
  };

  const reviewNodes = me ? me.reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      key={(item) => item.id}
      renderItem={({ item }) => (
        <MyReviewItem
          review={item}
          navigate={navigate}
          onDelete={handleDelete}
        />
      )}
      ListFooterComponent={ItemSeparator}
      initialNumToRender={6}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const MyReview = () => {
  const first = 5;
  const withReviews = true;
  const variables = {
    withReviews,
    first,
  };
  const { loading, error, me, refetch, fetchMore } = useCurrentUser(variables);
  const [deleteReview] = useDeleteReview();

  return (
    <MyReviewContainer
      loading={loading}
      error={error}
      me={me}
      deleteReview={deleteReview}
      refetch={refetch}
      fetchMore={fetchMore}
    />
  );
};

export default MyReview;
