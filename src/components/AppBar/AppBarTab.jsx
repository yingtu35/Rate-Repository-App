import { Link } from "react-router-native"
import { View, StyleSheet } from "react-native"
import Text from "../Text"

const styles = StyleSheet.create({
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
        <Text color="barTab" fontWeight="bold">
          {tabName}
        </Text>
      </Link>
    </View>
  )
}

export default AppBarTab
