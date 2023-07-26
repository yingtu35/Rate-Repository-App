import useCurrentUser from "../../hooks/useCurrentUser";
import useDeleteReview from "../../hooks/useDeleteReview";
import MyReviewContainer from "./MyReviewContainer";
import { confirmAction } from "../../utils/alert";
import useRefresh from "../../hooks/useRefresh";
import useMount from "../../hooks/useMount";

const MyReview = ({ navigation }) => {
  const first = 5;
  const withReviews = true;
  const variables = {
    withReviews,
    first,
  };
  const { firstMount } = useMount();
  const { loading, error, me, refetch, fetchMore } = useCurrentUser(variables);
  const [deleteReview] = useDeleteReview();
  const [refreshing, onRefresh] = useRefresh({ refresh: refetch });

  const onEndReached = () => {
    // console.log("the end has reached");
    fetchMore();
  };

  const onDeletePressed = async (id) => {
    try {
      await deleteReview(id);
      refetch({ withReviews: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onDelete = (id) => {
    confirmAction(
      "Delete review",
      "Are you sure you want to delete this review?",
      "Yes",
      "No",
      () => onDeletePressed(id)
    );
  };

  const onViewRepository = (id) => {
    navigation.navigate("Repository", { id });
  };

  return (
    <MyReviewContainer
      loading={loading}
      error={error}
      me={me}
      onViewRepository={onViewRepository}
      onDelete={onDelete}
      onEndReached={onEndReached}
      refreshing={refreshing}
      onRefresh={onRefresh}
      firstMount={firstMount}
    />
  );
};

export default MyReview;
