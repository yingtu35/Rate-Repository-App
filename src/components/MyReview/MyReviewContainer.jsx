import { FlatList, RefreshControl } from "react-native";
import ItemSeparator from "../ItemSeparator";
import Text from "../Text";
import MyReviewItem from "./MyReviewItem";
import MyReviewEmpty from "./MyReviewEmpty";
import Loader from "../Loader";
import theme from "../../theme";

const MyReviewContainer = ({
  loading,
  error,
  me,
  onViewRepository,
  onDelete,
  onEndReached,
  refreshing,
  onRefresh,
  firstMount,
}) => {
  if (loading && firstMount) return <Loader />;
  if (error) return <Text>{error.message}</Text>;

  const reviewNodes = me ? me.reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      ListEmptyComponent={MyReviewEmpty}
      ItemSeparatorComponent={ItemSeparator}
      key={(item) => item.id}
      renderItem={({ item }) => (
        <MyReviewItem
          review={item}
          onViewRepository={onViewRepository}
          onDelete={onDelete}
        />
      )}
      initialNumToRender={6}
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

export default MyReviewContainer;
