import { Alert } from "react-native";
import useCurrentUser from "../../hooks/useCurrentUser";
import useDeleteReview from "../../hooks/useDeleteReview";
import MyReviewContainer from "./MyReviewContainer";
import { useNavigate } from "react-router-native";

const MyReview = () => {
  const navigate = useNavigate();
  const first = 5;
  const withReviews = true;
  const variables = {
    withReviews,
    first,
  };
  const { loading, error, me, refetch, fetchMore } = useCurrentUser(variables);
  const [deleteReview] = useDeleteReview();

  const onEndReached = () => {
    // console.log("the end has reached");
    fetchMore();
  };

  const onDelete = (id) => {
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

  const onViewRepository = (id) => {
    navigate(`/Repository/${id}`);
  };

  return (
    <MyReviewContainer
      loading={loading}
      error={error}
      me={me}
      onViewRepository={onViewRepository}
      onDelete={onDelete}
      onEndReached={onEndReached}
    />
  );
};

export default MyReview;
