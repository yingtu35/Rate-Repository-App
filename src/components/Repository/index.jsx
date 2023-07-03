// import { useParams } from "react-router-native";
import useCreateReview from "../../hooks/useCreateReview";
import useRepository from "../../hooks/useRepository";
import RepositoryContainer from "./RepositoryContainer";
import useMount from "../../hooks/useMount";
import useRefresh from "../../hooks/useRefresh";

const Repository = ({ route }) => {
  const repositoryId = route?.params?.id ? route.params.id : null;
  const first = 5;
  const variables = {
    repositoryId,
    first,
  };
  const { loading, error, repository, fetchMore, refetch } =
    useRepository(variables);
  const [createReview] = useCreateReview();
  const [refreshing, onRefresh] = useRefresh({ refresh: refetch });
  const { firstMount } = useMount();

  const onSubmit = async (values, actions) => {
    const { ownerName, repositoryName, rating, text } = values;
    const review = {
      ownerName,
      repositoryName,
      rating: Number(rating),
      text,
    };
    try {
      const { data } = await createReview(review);
      console.log(data);
      refetch();
    } catch (error) {
      const message = error.message;
      if (message.startsWith("User")) {
        actions.setFieldError(
          "text",
          "You have already reviewed this repository"
        );
      } else {
        actions.setErrors({
          ownerName: error.message,
          repositoryName: error.message,
        });
      }
      // console.log(error);
    }
  };

  const onEndReached = () => {
    fetchMore();
  };

  return (
    <RepositoryContainer
      loading={loading}
      error={error}
      repository={repository}
      onSubmit={onSubmit}
      onEndReached={onEndReached}
      refreshing={refreshing}
      onRefresh={onRefresh}
      firstMount={firstMount}
    />
  );
};

export default Repository;
