import NavBarFragment from "@/app/core/page_builder/_partials/NavBarFragment";
import CMSSubSiteService from "@/app/core/services/CMSSubSiteService";
import HeroBanner from "@/components/HeroBanner";
import { HeroBannerInit } from "@/components/HeroBanner/dataInit";
import HotLinkServices from "@/components/HotLinkServices";
import { HotLinkServicesInit } from "@/components/HotLinkServices/dataInit";
import PageWrapper from "@/components/PageWrapper";
import { notFound } from "next/navigation";
import React from "react";

async function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const currentSite = await CMSSubSiteService.getBySlug(slug);

  if (!currentSite) {
    notFound();
  }

  return (
    <PageWrapper>
       {currentSite?.navBar && (
          <NavBarFragment {...currentSite?.navBar} />
        )}
      <HeroBanner {...HeroBannerInit} />
      <HotLinkServices {...HotLinkServicesInit} />
    </PageWrapper>
  );
}

export default BusinessPage;
