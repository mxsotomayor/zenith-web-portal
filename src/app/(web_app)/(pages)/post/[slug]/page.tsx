 

import { getClient } from "@/core/lib/graphqlClient";
import PageBuilder from "@/core/page_builder/PageBuilder";
import DefaultGlobalsQuery from "@/core/page_builder/queries/globals";
import { GetPageByIDQuery } from "@/core/page_builder/queries/pages";
import { ImportProps } from "@/core/page_builder/schemas";

 

export default async function Home() {
  // default globals
  const { data } = await getClient().query({
    query: DefaultGlobalsQuery,
  });

  const DEFAULT_PAGE_ID = data.global.defaultSite?.page?.documentId ?? "";
  console.log("defaut page", DEFAULT_PAGE_ID);

  // page data
  const { data: pageData } = await getClient().query({
    query: GetPageByIDQuery,
    variables: {
      documentId: DEFAULT_PAGE_ID,
    },
  });

  const pageBodyContent: ImportProps[] = pageData.page.body.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (component: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _component, ...rest } = component;
      return {
        _component: component.__typename,
        props: rest,
      };
    }
  );

  return <PageBuilder items={pageBodyContent} />; 
}
