import NavBarFragment from "@/core/page_builder/_partials/NavBarFragment";
import CMSSubSiteService from "@/core/services/CMSSubSiteService";
import PageWrapper from "@/components/PageWrapper";
import { notFound } from "next/navigation";
import React from "react";
import CMSPagesService from "@/core/services/CMSPagesService";
import { ImportProps } from "@/core/page_builder/schemas";
import PageBuilder from "@/core/page_builder/PageBuilder";
import {Metadata} from "next"

export async function generateMetadata(): Promise<Metadata> {

  const currentSite = await CMSSubSiteService.getBySlug("business");

  if (!currentSite) {
    notFound();
  }

  const page = await CMSPagesService.getByID(
    currentSite.page?.documentId ?? ""
  );

  
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL ?? ""}/sites/business`,
      media: {
        [page.sharedImage?.url ?? ""]: `${
          process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API ?? ""
        }${page.sharedImage?.url}`,
      },
    },
    openGraph: {
      title: page.metaTitle ?? "",
      description: page.metaDescription ?? "  ",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_URL ?? ""}/${page.slug}`,
      images: [
        {
          url:
            (process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API ?? "") +
            page.sharedImage?.url,
          width: 800,
          height: 600,
          alt: page.sharedImage?.alternativeText ?? "",
        },
      ],
    },
  };
}


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
