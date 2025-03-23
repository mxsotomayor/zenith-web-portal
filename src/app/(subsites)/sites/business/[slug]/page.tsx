import PageBuilder from "@/core/page_builder/PageBuilder";
import { ImportProps } from "@/core/page_builder/schemas";
import CMSPagesService from "@/core/services/CMSPagesService";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";

const SUBSITE_SLUG = "business";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const page = await CMSPagesService.getBySlug((await params).slug ?? "", SUBSITE_SLUG);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL ?? ""}/${SUBSITE_SLUG}/${page.slug}`,
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

async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const page = await CMSPagesService.getBySlug((await params).slug ?? "", SUBSITE_SLUG);

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
