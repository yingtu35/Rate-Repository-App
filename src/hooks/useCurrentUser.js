import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const useCurrentUser = (variables = { withReviews: false }) => {
  const { loading, error, data, refetch, fetchMore } = useQuery(GET_USER, {
    variables,
  });

  const handleFetchMore = () => {
    if (loading || !data?.me.reviews.pageInfo.hasNextPage) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.me.reviews.pageInfo.endCursor,
      },
    });
  };

  return { loading, error, me: data?.me, refetch, fetchMore: handleFetchMore };
};

export default useCurrentUser;
