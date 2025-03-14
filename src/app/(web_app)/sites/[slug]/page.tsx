import HeroBanner from "@/components/HeroBanner";
import { HeroBannerInit } from "@/components/HeroBanner/dataInit";
import HotLinkServices from "@/components/HotLinkServices";
import { HotLinkServicesInit } from "@/components/HotLinkServices/dataInit";
import NavBar from "@/components/Navbar";
import { menuSettings } from "@/components/Navbar/dataInit";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

function BusinessPage() {
  return (
    <PageWrapper>
      <NavBar selectedSite={1} menu={menuSettings} />
      <HeroBanner {...HeroBannerInit} />
      <HotLinkServices {...HotLinkServicesInit}/>
    </PageWrapper>
  );
}

export default BusinessPage;
