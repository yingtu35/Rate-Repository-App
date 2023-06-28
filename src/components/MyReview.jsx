import { FlatList, Pressable, View, StyleSheet, Alert } from "react-native";
import ItemSeparator from "./ItemSeparator";
import Text from "./Text";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
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

const MyReviewContainer = ({ loading, error, data, deleteReview, refetch }) => {
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

  const reviewNodes = data.me
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

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
    />
  );
};

const MyReview = () => {
  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: { withReviews: true },
  });
  const [deleteReview] = useDeleteReview();

  return (
    <MyReviewContainer
      loading={loading}
      error={error}
      data={data}
      deleteReview={deleteReview}
      refetch={refetch}
    />
  );
};

export default MyReview;
