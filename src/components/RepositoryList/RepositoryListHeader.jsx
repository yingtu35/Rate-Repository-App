import Picker from "./Picker";
import theme from "../../theme";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  searchInput: {
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

RepositoryListHeader.propTypes = {
  orderMethod: PropTypes.string.isRequired,
  setOrderMethod: PropTypes.func.isRequired,
  searchKeyword: PropTypes.string.isRequired,
  setSearchKeyword: PropTypes.func.isRequired,
};
