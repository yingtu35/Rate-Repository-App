import { View, FlatList } from "react-native";
import ItemSeparator from "../ItemSeparator";
import ReviewItem from "../ReviewItem";
import Loader from "../Loader";
import Text from "../Text";
import RepositoryInfo from "./RepositoryInfo";

const RepositoryContainer = ({
  loading,
  error,
  repository,
  onSubmit,
  onEndReached,
}) => {
  if (loading)
    return (
      <View>
        <Loader />
      </View>
    );
  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }

  const reviewsNode = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <RepositoryInfo repository={repository} onSubmit={onSubmit} />
          <ItemSeparator />
        </>
      }
      data={reviewsNode}
      renderItem={({ item }) => (
        <ReviewItem review={item} title={item.user.username} />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={ItemSeparator}
      initialNumToRender={10}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryContainer;
