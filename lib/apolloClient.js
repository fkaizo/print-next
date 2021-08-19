import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "http://print.labgamma.com.br/graphql",
    cache: new InMemoryCache(),
});

export default apolloClient;
