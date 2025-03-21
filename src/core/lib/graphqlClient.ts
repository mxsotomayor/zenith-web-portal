import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

const link = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API}${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
  headers: {
    authorization: process.env.STRAPI_CMS_API_TOKEN ?? "",
  },
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      addTypename: true, 
    }),
    link,
  });
});
