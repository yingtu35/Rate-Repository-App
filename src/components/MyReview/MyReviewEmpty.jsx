import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 50,
  },
});

const MyReviewEmpty = () => {
  return (
    <View style={styles.container}>
      <Text>{"Oops! You haven't reviewed any repositories yet"}</Text>
    </View>
  );
};

export default MyReviewEmpty;
