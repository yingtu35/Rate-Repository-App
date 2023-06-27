import { View, Pressable, StyleSheet, Alert, FlatList } from "react-native";
import { format } from "date-fns";
import Text from "./Text";
import ItemSeparator from "./ItemSeparator";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryList/RepositoryItem";
import theme from "../theme";
import * as Linking from "expo-linking";
// import CircularProgress from "react-native-circular-progress-indicator";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  reviewInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    // alignItems: "stretch",
  },
  rating: {
    margin: 10,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 20,
  },
  reviewDetails: {
    padding: 10,
    gap: 5,
    flexShrink: 1,
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

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.reviewInfo}>
        {/* <CircularProgress
          value={review.rating}
          inActiveStrokeColor="#a1e6ff"
          inActiveStrokeOpacity={0.2}
        /> */}
        <View style={styles.rating}>
          <Text color="primary" fontWeight="bold">
            {review.rating}
          </Text>
        </View>
        <View style={styles.reviewDetails}>
          <Text fontWeight="bold">{review.user.username}</Text>
          <Text color="textSecondary">
            {format(new Date(review.createdAt), "MM/dd/yyyy")}
          </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const Repository = () => {
  const { repositoryId } = useParams();
  const { loading, error, data } = useRepository(repositoryId);

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

  const repository = data.repository;
  const reviewsNode = data.repository
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <RepositoryInfo repository={repository} />
          <ItemSeparator />
        </>
      }
      data={reviewsNode}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={ItemSeparator}
      initialNumToRender={10}
    />
  );
};

export default Repository;
