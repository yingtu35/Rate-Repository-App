import { View, Pressable, StyleSheet } from "react-native";
import * as Linking from "expo-linking";
import CreateReview from "./CreateReview";
import RepositoryItem from "../RepositoryItem";
import Togglable from "../Togglable";
import Text from "../Text";
import theme from "../../theme";
import { confirmAction } from "../../utils/alert";

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
  const onOpenUrl = async () => {
    console.log(`Open url: ${repository.url}`);
    Linking.openURL(`${repository.url}`);
  };

  const handleOpenUrl = () => {
    confirmAction(
      "Open in GitHub",
      "You will be redirected to a GitHub page, click Yes to continue",
      "Yes",
      "No",
      onOpenUrl
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
        <CreateReview onSubmit={onSubmit} name={repository.fullName} />
      </Togglable>
    </View>
  );
};

export default RepositoryInfo;
