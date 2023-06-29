import { View, StyleSheet, ScrollView } from "react-native";
// import Text from "../Text";
import theme from "../../theme";
import SignOut from "./SignOut";
import AppBarTab from "./AppBarTab";
// import useCurrentUser from "../../hooks/useCurrentUser";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    paddingBottom: 40,
  },
});

const AppBar = ({ me }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {me ? (
          <>
            <AppBarTab tabName="Repositories" path="Repositories" />
            <AppBarTab tabName="Create a review" path="Reviews" />
            <AppBarTab tabName="My reviews" path="Reviews/me" />
            <SignOut />
          </>
        ) : (
          <>
            <AppBarTab tabName="SignUp" path="SignUp" />
            <AppBarTab tabName="SignIn" path="SignIn" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
