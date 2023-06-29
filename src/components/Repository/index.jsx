// import { useParams } from "react-router-native";
import useCreateReview from "../../hooks/useCreateReview";
import useRepository from "../../hooks/useRepository";
import RepositoryContainer from "./RepositoryContainer";

const Repository = ({ route }) => {
  // console.log(route);
  const repositoryId = route?.params?.id ? route.params.id : null;
  // const { repositoryId } = useParams();
  const first = 5;
  const variables = {
    repositoryId,
    first,
  };
  const { loading, error, repository, fetchMore, refetch } =
    useRepository(variables);
  const [createReview] = useCreateReview();

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
    // console.log("end reached!");
    fetchMore();
  };

  return (
    <RepositoryContainer
      loading={loading}
      error={error}
      repository={repository}
      onSubmit={onSubmit}
      onEndReached={onEndReached}
    />
  );
};

export default Repository;
