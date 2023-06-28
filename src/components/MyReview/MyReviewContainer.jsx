import { FlatList, View } from "react-native";
import ItemSeparator from "../ItemSeparator";
import Text from "../Text";
import MyReviewItem from "./MyReviewItem";

const MyReviewContainer = ({
  loading,
  error,
  me,
  onViewRepository,
  onDelete,
  onEndReached,
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

  const reviewNodes = me ? me.reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      key={(item) => item.id}
      renderItem={({ item }) => (
        <MyReviewItem
          review={item}
          onViewRepository={onViewRepository}
          onDelete={onDelete}
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
