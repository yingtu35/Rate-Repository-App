import { View, StyleSheet, Pressable, Alert } from "react-native"
import Text from "../Text"
import useSignOut from "../../hooks/useSignOut"
import { useNavigate } from "react-router-native"

const styles = StyleSheet.create({
  tab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
})

const SignOut = () => {
  const [signOut] = useSignOut()
  const navigate = useNavigate()

  const onSignOutPressed = () => {
    Alert.alert("Log Out", "Are you sure you want to log out", [
      // The "Yes" button
      {
        text: "Yes",
        onPress: async () => {
          await signOut()
          navigate("/SignIn")
        },
      },
      // The "No" button
      {
        text: "No",
      },
    ])
  }

  return (
    <View style={styles.tab}>
      <Pressable onPress={onSignOutPressed}>
        <Text color="barTab" fontWeight="bold">
          SignOut
        </Text>
      </Pressable>
    </View>
  )
}

export default SignOut
