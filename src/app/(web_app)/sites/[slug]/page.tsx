import HeroBanner from "@/components/HeroBanner";
import HotLinkServices from "@/components/HotLinkServices";
import HotLinkServicesItems from "@/components/HotLinkServices/dataInit";
import NavBar from "@/components/Navbar";
import { menuSettings } from "@/components/Navbar/dataInit";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

function BusinessPage() {
  return (
    <PageWrapper>
      <NavBar selectedSite={1} menu={menuSettings} />
      <HeroBanner />
      <HotLinkServices items={HotLinkServicesItems} />
    </PageWrapper>
  );
}

export default BusinessPage;
