import Constants from "expo-constants";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import SignOut from "./SignOut";
import AppBarTab from "./AppBarTab";
import useCurrentUser from "../../hooks/useCurrentUser";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { loading, error, me } = useCurrentUser();

  if (loading) return null;
  if (error) return <Text>{error.message}</Text>;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName="Repositories" path="Repositories" />
        {me ? (
          <>
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
