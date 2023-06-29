import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Text from "./Text";
import useCurrentUser from "../hooks/useCurrentUser";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// import CreateReview from "./CreateReview";
import Repository from "./Repository";
import MyReview from "./MyReview";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

// TODO: Need to create a new profile page and add signIn, signUp, logout button there

const HomeTabs = () => {
  const { loading, error, me } = useCurrentUser();

  if (loading) {
    <View>
      <Text>Loading...</Text>
    </View>;
  }
  if (error) return <Text>{error.message}</Text>;
  return (
    <Tab.Navigator>
      {me ? (
        <>
          <Tab.Screen name="Repositories" component={RepositoryList} />
          <Tab.Screen name="MyReview" component={MyReview} />
          <Tab.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Tab.Screen name="SignIn" component={SignIn} />
          <Tab.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

function Test() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Repository" component={Repository} />
    </Stack.Navigator>
  );
}

export default Test;
