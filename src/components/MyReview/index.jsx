import useCurrentUser from "../../hooks/useCurrentUser";
import useDeleteReview from "../../hooks/useDeleteReview";
import MyReviewContainer from "./MyReviewContainer";

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
