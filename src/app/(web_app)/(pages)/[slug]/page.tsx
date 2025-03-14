import { getClient } from "@/app/core/lib/graphqlClient";
import PageBuilder from "@/app/core/page_builder/PageBuilder";
import GetPageBySlugQuery from "@/app/core/page_builder/queries/pages";
import { ImportProps } from "@/app/core/page_builder/schemas";
import { notFound } from "next/navigation";
import React from "react";

async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {


  const { data:{pages} } = await getClient().query({
    query: GetPageBySlugQuery,
    variables: {
      filterInput: {
        slug: {
          eq: (await params).slug ?? "",
        },
      },
    },
  });



  if(pages.length == 0){
    notFound()
  }

  const pageBodyContent: ImportProps[] = pages[0].body.map(
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

export default SlugPage;
