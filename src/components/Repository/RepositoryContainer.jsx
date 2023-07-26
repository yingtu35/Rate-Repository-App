import { FlatList, RefreshControl } from "react-native";
import ItemSeparator from "../ItemSeparator";
import ReviewItem from "../ReviewItem";
import Loader from "../Loader";
import Text from "../Text";
import RepositoryInfo from "./RepositoryInfo";
import RepositoryEmpty from "./RepositoryEmpty";
import theme from "../../theme";

const RepositoryContainer = ({
  loading,
  error,
  repository,
  onSubmit,
  onEndReached,
  refreshing,
  onRefresh,
  firstMount,
}) => {
  if (loading && firstMount) return <Loader />;
  if (error) return <Text>{error.message}</Text>;

  const reviewsNode = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={
        !loading && (
          <>
            <RepositoryInfo repository={repository} onSubmit={onSubmit} />
            <ItemSeparator />
          </>
        )
      }
      ListEmptyComponent={RepositoryEmpty}
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
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={theme.colors.primary}
        />
      }
    />
  );
};

export default RepositoryContainer;
