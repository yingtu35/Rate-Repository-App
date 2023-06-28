import { View, Pressable, StyleSheet, Alert, FlatList } from "react-native";
import Text from "./Text";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryList/RepositoryItem";
import theme from "../theme";
import * as Linking from "expo-linking";
// import CircularProgress from "react-native-circular-progress-indicator";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  GitHubButton: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const RepositoryInfo = ({ repository }) => {
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
  // TODO: Either create a new reviewForm or use the createReviewForm with first two inputs filled
  return (
    <View style={styles.container}>
      <RepositoryItem repo={repository} />
      <Pressable
        onPress={handleOpenUrl}
        style={styles.GitHubButton}
        hitSlop={{ bottom: 10, top: 5 }}
      >
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </Pressable>
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
  const { loading, error, repository, fetchMore } = useRepository(variables);

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
          <RepositoryInfo repository={repository} />
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
