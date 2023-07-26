import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

// ! process.env not working due to unknown reason, return undefined
console.log(process.env.EXPO_PUBLIC_API_APOLLO_URI)

const httpLink = createHttpLink({
  // uri: process.env.EXPO_PUBLIC_API_APOLLO_URI,i
  uri: "http://192.168.1.111:4000/graphql",
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    // specify the type
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
    User: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      // get the authentication token from auth storage
      let token = await authStorage.getAccessToken();
      // console.log(token)

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token.accessToken}` : null,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
};

export default createApolloClient;
