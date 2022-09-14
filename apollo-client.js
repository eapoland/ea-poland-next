import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ea-poland-wordpress.azurewebsites.net/graphql",
  cache: new InMemoryCache(),
});

export default client;
