import PageBuilder from "@/app/core/page_builder/PageBuilder";
import { ImportProps } from "@/app/core/page_builder/schemas";
import CMSPagesService from "@/app/core/services/CMSPagesService";
import { notFound } from "next/navigation";
import React from "react";

async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const page = await CMSPagesService.getBySlug((await params).slug ?? "");

  if (!page) {
    notFound();
  }

  const pageBodyContent: ImportProps[] =
    page?.body?.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (component: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _component, ...rest } = component;
        return {
          _component: component.__typename,
          props: rest,
        };
      }
    ) ?? [];

  return <PageBuilder items={pageBodyContent} />;
}

export default SlugPage;
