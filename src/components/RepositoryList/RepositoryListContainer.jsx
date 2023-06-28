import React from "react";
import { Pressable, FlatList, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Text from "../Text";
import ItemSeparator from "../ItemSeparator";
import RepositoryListHeader from "./RepositoryListHeader";

export default class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    return <RepositoryListHeader {...this.props} />;
  };

  render() {
    const { loading, error, repositories, onEndReached, onRepositoryPress } =
      this.props;

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

    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => onRepositoryPress(item.id)}>
            <RepositoryItem repo={item} />
          </Pressable>
        )}
        ListFooterComponent={ItemSeparator}
        initialNumToRender={6}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        // other props
      />
    );
  }
}
