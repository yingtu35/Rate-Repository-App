import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import Constants from "expo-constants"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloUri,
})

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      // get the authentication token from auth storage
      let token = await authStorage.getAccessToken()
      // console.log(token)

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token.accessToken}` : null,
        },
      }
    } catch (error) {
      console.log(error)
      return {
        headers,
      }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    // link: httpLink,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
