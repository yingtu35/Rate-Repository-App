import { View, Pressable, StyleSheet, Alert } from "react-native";
import * as Linking from "expo-linking";
import CreateReviewContainer from "../CreateReview/CreateReviewContainer";
import RepositoryItem from "../RepositoryList/RepositoryItem";
import Togglable from "../Togglable";
import Text from "../Text";
import theme from "../../theme";

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

export default RepositoryInfo;
