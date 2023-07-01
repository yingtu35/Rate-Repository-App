import Picker from "./Picker";
import theme from "../../theme";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const styles = StyleSheet.create({
  searchInput: {
    // borderWidth: 1,
    // padding: 10,
    // marginBottom: 5,
    // borderRadius: 5,
    // height: 50,
    borderRadius: 0,
    backgroundColor: theme.colors.white,
  },
  picker: { backgroundColor: theme.colors.white, marginBottom: 5 },
});

const orderOptions = [
  { label: "Latest repositories", value: "latest" },
  { label: "Highest rated repositories", value: "highestRate" },
  { label: "Lowest rated repositories", value: "lowestRate" },
];

const RepositoryListHeader = ({
  orderMethod,
  setOrderMethod,
  searchKeyword,
  setSearchKeyword,
}) => {
  return (
    <View>
      <Searchbar
        onChangeText={(text) => setSearchKeyword(text)}
        value={searchKeyword}
        placeholder="Search repositories"
        style={styles.searchInput}
      />
      <Picker
        orderMethod={orderMethod}
        setOrderMethod={setOrderMethod}
        options={orderOptions}
      />
    </View>
  );
};

export default RepositoryListHeader;
