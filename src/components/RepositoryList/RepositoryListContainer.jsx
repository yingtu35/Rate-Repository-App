import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Text from "../Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ loading, error, data }) => {
  if (loading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  if (error) {
    console.log(error.networkError);
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }

  const repositoryNodes = data.repositories
    ? data.repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RepositoryItem repo={item} />}
      // other props
    />
  );
};

export default RepositoryListContainer;
