import { View, StyleSheet, Image } from "react-native";
import Text from "../Text";
import Loader from "../Loader";
import theme from "../../theme";
import useCurrentUser from "../../hooks/useCurrentUser";
import user from "../../../assets/user.png";
import format from "date-fns/format";
import SignOut from "./SignOut";

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
});

const Profile = () => {
  const { loading, error, me } = useCurrentUser();
  if (loading) return <Loader />;
  if (error) return <Text>{error.message}</Text>;

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
      <SignOut />
    </View>
  );
};

export default Profile;
