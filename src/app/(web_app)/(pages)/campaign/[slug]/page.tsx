 

import { getClient } from "@/app/core/lib/graphqlClient";
import PageBuilder from "@/app/core/page_builder/PageBuilder";
import DefaultGlobalsQuery from "@/app/core/page_builder/queries/globals";
import { GetPageByIDQuery } from "@/app/core/page_builder/queries/pages";
import { ImportProps } from "@/app/core/page_builder/schemas";

 

export default async function Home() {
  // default globals
  const { data } = await getClient().query({
    query: DefaultGlobalsQuery,
  });

  const DEFAULT_PAGE_ID = data.global.defaultSite?.page?.documentId ?? "";

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
