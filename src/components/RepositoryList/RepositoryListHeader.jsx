import Picker from "./Picker";
import TextInput from "../TextInput";
import theme from "../../theme";
import { View, StyleSheet } from "react-native";

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
  // TODO: Change search bar and picker with components from react native paper
  return (
    <View>
      <TextInput
        onChangeText={(text) => setSearchKeyword(text)}
        onBlur={() => {}}
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
