import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const { loading, error, data, refetch, fetchMore } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );

  const handleFetchMore = () => {
    if (loading || !data?.repositories.pageInfo.hasNextPage) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };

  return {
    repositories: data?.repositories,
    loading,
    error,
    refetch,
    fetchMore: handleFetchMore,
  };
};

export default useRepositories;
