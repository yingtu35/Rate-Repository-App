import Constants from "expo-constants"
import { View, StyleSheet, Pressable, Alert } from "react-native"
import Text from "./Text"
import theme from "../theme"

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
      <Pressable onPress={() => Alert.alert("Info", `You pressed ${tabName}`)}>
        <Text color="barTab" fontWeight="bold">
          {tabName}
        </Text>
      </Pressable>
    </View>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabName="Repositories" />
      <AppBarTab tabName="Login" />
    </View>
  )
}

export default AppBar
