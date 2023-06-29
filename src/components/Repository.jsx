import { View, Pressable, StyleSheet, Alert, FlatList } from "react-native";
import Text from "./Text";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";
import Togglable from "./Togglable";
import { useParams } from "react-router-native";
import useCreateReview from "../hooks/useCreateReview";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryList/RepositoryItem";
import theme from "../theme";
import * as Linking from "expo-linking";
import CreateReviewContainer from "./CreateReview/CreateReviewContainer";
// import CircularProgress from "react-native-circular-progress-indicator";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  ButtonBase: {
    height: 50,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  GitHubButton: {
    backgroundColor: theme.colors.primary,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const RepositoryInfo = ({ repository, onSubmit }) => {
  const handleOpenUrl = () => {
    Alert.alert(
      "Open in GitHub",
      "You will be redirected to a GitHub page, click Yes to continue",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: async () => {
            console.log(`Open url: ${repository.url}`);
            Linking.openURL(`${repository.url}`);
          },
        },
        // The "No" button
        {
          text: "No",
        },
      ]
    );
  };
  // TODO: Add a button that can toggle the reviewForm (check Togglable?)
  return (
    <View style={styles.container}>
      <RepositoryItem repo={repository} />
      <Pressable
        onPress={handleOpenUrl}
        style={[styles.ButtonBase, styles.GitHubButton]}
        hitSlop={{ bottom: 10, top: 5 }}
      >
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </Pressable>
      <Togglable
        buttonLabel="Review this repository"
        buttonStyle={styles.ButtonBase}
      >
        <CreateReviewContainer onSubmit={onSubmit} name={repository.fullName} />
      </Togglable>
    </View>
  );
};

const Repository = () => {
  const { repositoryId } = useParams();
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

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }

  const reviewsNode = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReached = () => {
    // console.log("end reached!");
    fetchMore();
  };
  // TODO: Add a create a review function

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <RepositoryInfo repository={repository} onSubmit={onSubmit} />
          <ItemSeparator />
        </>
      }
      data={reviewsNode}
      renderItem={({ item }) => (
        <ReviewItem review={item} title={item.user.username} />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={ItemSeparator}
      initialNumToRender={10}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default Repository;
