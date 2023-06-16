import Constants from "expo-constants"
import { View, StyleSheet, Pressable, Alert, ScrollView } from "react-native"
import Text from "./Text"
import theme from "../theme"
import { Link } from "react-router-native"

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
    display: "flex",
    flexDirection: "row",
  },
  tab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
})

const AppBarTab = ({ tabName }) => {
  return (
    <View style={styles.tab}>
      <Link to={`/${tabName}`}>
        {/* <Pressable onPress={() => Alert.alert("Info", "You pressed something")}> */}
        <Text color="barTab" fontWeight="bold">
          {tabName}
        </Text>
        {/* </Pressable> */}
      </Link>
    </View>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName="Repositories" />
        <AppBarTab tabName="SignIn" />
      </ScrollView>
    </View>
  )
}

export default AppBar
