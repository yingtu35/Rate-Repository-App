import Constants from "expo-constants"
import { View, StyleSheet, ScrollView } from "react-native"
import Text from "./Text"
import theme from "../theme"
import SignOut from "./SignOut"
import { Link } from "react-router-native"

import { useQuery } from "@apollo/client"
import { GET_USER } from "../graphql/queries"

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
        <Text color="barTab" fontWeight="bold">
          {tabName}
        </Text>
      </Link>
    </View>
  )
}

const AppBar = () => {
  // TODO: need a "me" query to access current user information
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) return null
  if (error) return <Text>{error.message}</Text>
  const user = data.me

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName="Repositories" />
        {user ? <SignOut /> : <AppBarTab tabName="SignIn" />}
      </ScrollView>
    </View>
  )
}

export default AppBar
