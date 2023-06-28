import React from "react";
import { Pressable, FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Text from "../Text";
import ItemSeparator from "../ItemSeparator";
import { Picker } from "@react-native-picker/picker";
import { useRef } from "react";
import TextInput from "../TextInput";
import theme from "../../theme";

const styles = StyleSheet.create({
  searchInput: {
    // borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    // borderRadius: 5,
    height: 50,
    backgroundColor: theme.colors.white,
  },
  picker: { backgroundColor: theme.colors.white, marginBottom: 5 },
});

export default class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { orderMethod, setOrderMethod, searchKeyword, setSearchKeyword } =
      this.props;
    // only for Android
    const pickerRef = useRef();

    const openMenu = () => pickerRef.current.focus();
    const closeMenu = () => pickerRef.current.blur();
    // only for Android

    return (
      <>
        <TextInput
          onChangeText={(text) => setSearchKeyword(text)}
          onBlur={() => {}}
          value={searchKeyword}
          placeholder="Search repositories"
          // error={showError}
          style={styles.searchInput}
          // {...props}
        />
        <Picker
          style={styles.picker}
          ref={pickerRef}
          selectedValue={orderMethod}
          onValueChange={(itemValue) => setOrderMethod(itemValue)}
        >
          <Picker.Item label="Latest repositories" value={0} />
          <Picker.Item label="Highest rated repositories" value={1} />
          <Picker.Item label="Lowest rated repositories" value={2} />
        </Picker>
      </>
    );
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

// const RepositoryListContainer = ({
//   loading,
//   error,
//   repositories,
//   fetchMore,
//   searchKeyword,
//   setSearchKeyword,
//   orderMethod,
//   setOrderMethod,
// }) => {
//   return (

//   );
// };

// export default RepositoryListContainer;
