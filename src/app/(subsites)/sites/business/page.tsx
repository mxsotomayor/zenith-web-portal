import NavBarFragment from "@/core/page_builder/_partials/NavBarFragment";
import CMSSubSiteService from "@/core/services/CMSSubSiteService";
import PageWrapper from "@/components/PageWrapper";
import { notFound } from "next/navigation";
import React from "react";
import CMSPagesService from "@/core/services/CMSPagesService";
import { ImportProps } from "@/core/page_builder/schemas";
import PageBuilder from "@/core/page_builder/PageBuilder";

async function BusinessPage() {
  const currentSite = await CMSSubSiteService.getBySlug("business");

  if (!currentSite) {
    notFound();
  }

  const page = await CMSPagesService.getByID(
    currentSite.page?.documentId ?? ""
  );

  const pageBodyContent: ImportProps[] =
    page.body?.map(
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

  return (
    <PageWrapper>
      {currentSite?.navBar && (
        <NavBarFragment
          {...currentSite?.navBar}
          selected={currentSite?.navBar?.sub_sites.findIndex(
            (i) => i?.slug == "business"
          )}
        />
      )}
      <PageBuilder items={pageBodyContent} />
    </PageWrapper>
  );
}

export default BusinessPage;
