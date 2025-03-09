import HeroBanner from "@/components/HeroBanner";
import HotLinkServices from "@/components/HotLinkServices";
import NavBar from "@/components/Navbar";
import { menuSettings } from "@/components/Navbar/dataInit";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

function BusinessPage() {
  return (
    <PageWrapper>
      <NavBar selectedSite={1} menu={menuSettings} />
      <HeroBanner />
      <HotLinkServices />
    </PageWrapper>
  );
}

export default BusinessPage;
