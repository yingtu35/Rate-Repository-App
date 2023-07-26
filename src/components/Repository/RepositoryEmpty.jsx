import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 50,
  },
});

const RepositoryEmpty = () => {
  return (
    <View style={styles.container}>
      <Text>{"There are currently no reviews "}</Text>
    </View>
  );
};
//
export default RepositoryEmpty;
