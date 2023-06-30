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
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MyReviewStack = createNativeStackNavigator();

const MyReviewTabs = () => {
  return (
    <MyReviewStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <MyReviewStack.Screen
        name="MyReview"
        component={MyReview}
        // options={{ headerShown: false }}
      />
      <MyReviewStack.Screen
        name="Repository"
        component={Repository}
        options={({ route }) => ({
          title: route?.params?.id ? `${route?.params.id}` : "Repository",
        })}
      />
    </MyReviewStack.Navigator>
  );
};

const HomeTabs = () => {
  const { loading, error, me } = useCurrentUser();

  if (loading) {
    <View>
      <Text>Loading...</Text>
    </View>;
  }
  if (error) return <Text>{error.message}</Text>;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Repositories: focused ? "md-home" : "md-home-outline",
            MyReview: focused ? "md-albums" : "md-albums-outline",
            Profile: focused ? "ios-person" : "ios-person-outline",
            SignIn: focused ? "ios-log-in" : "ios-log-in-outline",
            SignUp: focused ? "ios-person-add" : "ios-person-add-outline",
          };

          return (
            <Ionicons name={icons[route.name]} color={color} size={size} />
          );
        },
      })}
    >
      {me ? (
        <>
          <Tab.Screen name="Repositories" component={RepositoryList} />
          <Tab.Screen
            name="MyReview"
            component={MyReviewTabs}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Tab.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerTitle: "Rate Repository App" }}
          />
          <Tab.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerTitle: "Rate Repository App" }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

function Test() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Repository"
        component={Repository}
        options={({ route }) => ({
          title: route?.params?.id ? `${route?.params.id}` : "Repository",
        })}
      />
    </Stack.Navigator>
  );
}

export default Test;
