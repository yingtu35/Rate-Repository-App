import Constants from "expo-constants"
import RepositoryList from "./RepositoryList"
import AppBar from "./AppBar"
import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  )
}

export default Main
