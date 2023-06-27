import { Pressable, FlatList, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Text from "../Text";
import ItemSeparator from "../ItemSeparator";
import { useNavigate } from "react-router-native";

const RepositoryListContainer = ({ loading, error, data }) => {
  const navigate = useNavigate();

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
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem repo={item} />
        </Pressable>
      )}
      ListFooterComponent={ItemSeparator}
      initialNumToRender={6}
      // other props
    />
  );
};

export default RepositoryListContainer;
