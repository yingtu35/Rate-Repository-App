import React from "react";
import { Pressable, FlatList, View } from "react-native";
import RepositoryItem from "../RepositoryItem";
import Text from "../Text";
import ItemSeparator from "../ItemSeparator";
import RepositoryListEmpty from "./RespositryEmpty";
import RepositoryListHeader from "./RepositoryListHeader";

export default class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { orderMethod, setOrderMethod, searchKeyword, setSearchKeyword } =
      this.props;
    return (
      <RepositoryListHeader
        orderMethod={orderMethod}
        setOrderMethod={setOrderMethod}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    );
  };

  render() {
    const { error, repositories, onEndReached, onRepositoryPress } = this.props;

    // if (loading) return <Loader />;
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
        ListEmptyComponent={RepositoryListEmpty}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => onRepositoryPress(item.id)}>
            <RepositoryItem repo={item} />
          </Pressable>
        )}
        initialNumToRender={6}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        // other props
      />
    );
  }
}
