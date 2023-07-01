import { StatusBar } from "expo-status-bar";
// import Main from "./src/components/Main"
// import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/createApolloClient";
// import Constants from "expo-constants"
import AuthStorage from "./src/utils/AuthStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import Test from "./src/components/Test";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

const authStorage = new AuthStorage();
// const client = createApolloClient()
const client = createApolloClient(authStorage);

export default function App() {
  // console.log(Constants.manifest)
  return (
    <>
      <NavigationContainer>
        {/* <NativeRouter> */}
        <ApolloProvider client={client}>
          <AuthStorageContext.Provider value={authStorage}>
            <PaperProvider>
              <Test />
            </PaperProvider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
        {/* </NativeRouter> */}
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
