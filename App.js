import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/createApolloClient";
import AuthStorage from "./src/utils/AuthStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import Main from "./src/components/Main";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

const authStorage = new AuthStorage();
const client = createApolloClient(authStorage);

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ApolloProvider client={client}>
          <AuthStorageContext.Provider value={authStorage}>
            <PaperProvider>
              <Main />
            </PaperProvider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
