"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API}${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
      headers: {
        authorization: process.env.STRAPI_CMS_API_TOKEN ?? "",
      },
    }),
    cache: new InMemoryCache(),
  });
};

const ApolloWrapperProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={createApolloClient()}>{children}</ApolloProvider>
  );
};

export default ApolloWrapperProvider;
