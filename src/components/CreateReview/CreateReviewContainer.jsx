import { Formik } from "formik";
import * as yup from "yup";
import ReviewForm from "./ReviewForm";

const createReviewSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .integer()
    .min(0, "Rating should be between 0 and 100")
    .max(100, "Rating should be between 0 and 100")
    .required("Rating is required"),
  text: yup
    .string()
    .max(2000, "Review input is limited to 2000 characters")
    .optional(),
});

const CreateReviewContainer = ({ onSubmit, name = null }) => {
  // const nameEditable = name ? false : true;
  const initialValues = {
    ownerName: name ? name.split("/")[0] : "",
    repositoryName: name ? name.split("/")[1] : "",
    rating: "",
    text: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={createReviewSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReviewContainer;
