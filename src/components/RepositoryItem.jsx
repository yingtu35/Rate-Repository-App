import { View, StyleSheet, Image } from "react-native";
import RepositoryStat from "./RepositoryStat";
import theme from "../theme";
import Text from "./Text";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  repoInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  avatar: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 5,
  },
  repoDetails: {
    padding: 10,
    gap: 5,
    flexShrink: 1,
  },
  language: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  repoStats: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const RepositoryItem = ({ repo }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.repoInfo}>
        <Image style={styles.avatar} source={{ uri: repo.ownerAvatarUrl }} />
        <View style={styles.repoDetails}>
          <Text fontSize="subheading" fontWeight="bold">
            {repo.fullName}
          </Text>
          <Text color="textSecondary" style={{ flexShrink: 1 }}>
            {repo.description}
          </Text>
          <View style={styles.language}>
            <Text color="white">{repo.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.repoStats}>
        <RepositoryStat statNumber={repo.stargazersCount} statName="Stars" />
        <RepositoryStat statNumber={repo.forksCount} statName="Forks" />
        <RepositoryStat statNumber={repo.reviewCount} statName="Reviews" />
        <RepositoryStat statNumber={repo.ratingAverage} statName="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;

RepositoryItem.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    ratingAverage: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    stargazersCount: PropTypes.number.isRequired,
    forksCount: PropTypes.number.isRequired,
    ownerAvatarUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }),
};
