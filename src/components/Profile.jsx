import { Pressable, View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import Loader from "./Loader";
import useSignOut from "../hooks/useSignOut";
import { confirmAction } from "../utils/alert";
import theme from "../theme";
import useCurrentUser from "../hooks/useCurrentUser";
import user from "../../assets/user.png";
import format from "date-fns/format";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  profileMain: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  profileInfo: {
    alignItems: "center",
  },
  profilePhoto: {
    width: 150,
    height: 150,
    margin: 10,
    // backgroundColor: theme.colors.dark,
    borderWidth: 2,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  profileDetails: {
    alignItems: "center",
    gap: 10,
  },
  profileStat: {
    alignItems: "center",
    margin: 5,
  },
  button: {
    backgroundColor: theme.colors.primary,
    margin: 5,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Profile = () => {
  const { loading, error, me } = useCurrentUser();
  const [signOut] = useSignOut();
  if (loading) return <Loader />;
  if (error) return <Text>{error.message}</Text>;

  const onSignOutPressed = async () => {
    // console.log("Sign out!");
    await signOut();
    // navigate("/SignIn");
  };

  const onSignOut = () => {
    confirmAction(
      "Log out",
      "Are you sure you want to log out",
      "Yes",
      "No",
      onSignOutPressed
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileMain}>
        <View style={styles.profileInfo}>
          <View style={styles.profilePhoto}>
            <Image source={user} />
          </View>
          <Text fontSize="title">{me.username}</Text>
        </View>
        <View style={styles.profileDetails}>
          <Text fontSize="subtitle" fontWeight="bold">
            Personal Stats
          </Text>
          <View style={styles.profileStat}>
            <Text fontSize="subheading" fontWeight="bold">
              Create at
            </Text>
            <Text>{format(new Date(me.createdAt), "MM-dd-yyyy")}</Text>
          </View>
          <View style={styles.profileStat}>
            <Text fontSize="subheading" fontWeight="bold">
              Total Reviews
            </Text>
            <Text>{me.reviewCount}</Text>
          </View>
        </View>
      </View>
      <Pressable onPress={onSignOut} style={styles.button}>
        <Text color="white" fontWeight="bold">
          Sign Out
        </Text>
      </Pressable>
    </View>
  );
};

export default Profile;
