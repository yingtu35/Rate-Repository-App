import { FlatList, View, Alert } from "react-native";
import ItemSeparator from "../ItemSeparator";
import { useNavigate } from "react-router-native";
import Text from "../Text";
import MyReviewItem from "./MyReviewItem";

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
    // console.log("the end has reached");
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

export default MyReviewContainer;
