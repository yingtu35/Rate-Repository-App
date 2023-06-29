import { useNavigate } from "react-router-native";
import useCreateReview from "../../hooks/useCreateReview";
import CreateReviewContainer from "./CreateReviewContainer";

const CreateReview = () => {
  const navigate = useNavigate();
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
      navigate(`/Repository/${data.createReview.repositoryId}`);
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

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
