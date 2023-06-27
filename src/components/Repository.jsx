import { View, Pressable, StyleSheet, Alert } from "react-native";
import Text from "./Text";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryList/RepositoryItem";
import theme from "../theme";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
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

export default Repository;
