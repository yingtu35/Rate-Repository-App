import { Link } from "react-router-native";
import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  tab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

const AppBarTab = ({ tabName, path }) => {
  return (
    <View style={styles.tab}>
      <Link to={`/${path}`}>
        <Text color="barTab" fontWeight="bold">
          {tabName}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
