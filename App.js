import { StatusBar } from "expo-status-bar"
import Main from "./src/components/Main"
import { NativeRouter } from "react-router-native"
import { ApolloProvider } from "@apollo/client"
import createApolloClient from "./src/utils/createApolloClient"
// import Constants from "expo-constants"
import AuthStorage from "./src/utils/AuthStorage"
import AuthStorageContext from "./src/contexts/AuthStorageContext"

const authStorage = new AuthStorage()
// const client = createApolloClient()
const client = createApolloClient(authStorage)

export default function App() {
  // console.log(Constants.manifest)
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={client}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
}
