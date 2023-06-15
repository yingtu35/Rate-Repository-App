import { View, StyleSheet, Image } from "react-native"
import theme from "../theme"
import Text from "./Text"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  repoInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    // alignItems: "stretch",
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
})

const RepoStat = ({ statNumber, statName }) => {
  // TODO: Convert statNumber to k, m
  const convertNumber = (number) => {
    if (number >= 1000000000) {
      return Number(number / 1000000000).toFixed(1) + "b"
    } else if (number >= 1000000) {
      return Number(number / 1000000).toFixed(1) + "m"
    } else if (number >= 1000) {
      return Number(number / 1000).toFixed(1) + "k"
    } else {
      return number
    }
  }
  statNumber = convertNumber(statNumber)
  return (
    <View style={{ alignItems: "center", gap: 5 }}>
      <Text fontWeight="bold">{statNumber}</Text>
      <Text color="textSecondary">{statName}</Text>
    </View>
  )
}

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.repoInfo}>
        <Image style={styles.avatar} source={{ uri: repo.ownerAvatarUrl }} />
        <View style={styles.repoDetails}>
          <Text fontWeight="bold">{repo.fullName}</Text>
          <Text color="textSecondary">{repo.description}</Text>
          <View style={styles.language}>
            <Text color="white">{repo.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.repoStats}>
        <RepoStat statNumber={repo.stargazersCount} statName="Stars" />
        <RepoStat statNumber={repo.forksCount} statName="Forks" />
        <RepoStat statNumber={repo.reviewCount} statName="Reviews" />
        <RepoStat statNumber={repo.ratingAverage} statName="Rating" />
      </View>
    </View>
  )
}

export default RepositoryItem
