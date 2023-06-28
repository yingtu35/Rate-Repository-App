import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const useCurrentUser = (withReviews = false) => {
  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: { withReviews },
  });

  return { loading, error, data, refetch };
};

export default useCurrentUser;
