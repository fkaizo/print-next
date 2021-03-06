import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "https://print.labgamma.com.br/graphql",
    cache: new InMemoryCache(),
});

export default apolloClient;
