import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 50,
  },
});

const RepositoryListEmpty = () => {
  return (
    <View style={styles.container}>
      <Text>{"Oops! There are currently no repositories"}</Text>
    </View>
  );
};

export default RepositoryListEmpty;
