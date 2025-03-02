import FAQs from "@/components/FAQs";
import HeroBanner from "@/components/HeroBanner";
import HorizServicesLinks from "@/components/HorizServicesLinks";
import HotLinkServices from "@/components/HotLinkServices";
import ImportantBlock from "@/components/ImportantBlock";
import MansoryGrid from "@/components/MansoryGrid";
import NewsGrid from "@/components/NewsGrid";
import PageWrapper from "@/components/PageWrapper";
import PromoAlert from "@/components/PromoAlert";
import TwoColumnBanner from "@/components/TwoColBanner";

export default function Home() {
  return (
    <PageWrapper>
      <HeroBanner />
      <HotLinkServices />
      <ImportantBlock />
      <PromoAlert />
      <NewsGrid />
      <PromoAlert />
      <MansoryGrid direction="LEFT_RIGHT" />
      <TwoColumnBanner direction="RIGHT_LEFT"/>
      <TwoColumnBanner direction="LEFT_RIGHT"/>
      <HorizServicesLinks />
      <MansoryGrid direction="RIGHT_LEFT" />
      <FAQs />
    </PageWrapper>
  );
}
