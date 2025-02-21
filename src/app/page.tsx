import FAQs from "@/components/FAQs";
import HeroBanner from "@/components/HeroBanner";
import HotLinkServices from "@/components/HotLinkServices";
import ImportantBlock from "@/components/ImportantBlock";
import MansoryGrid from "@/components/MansoryGrid";
import NavBar from "@/components/Navbar";
import NewsGrid from "@/components/NewsGrid";
import PromoAlert from "@/components/PromoAlert";

export default function Home() {
 
  return (
    <div className="pt-[100px]">
      <NavBar />
      <HeroBanner /> 
      <HotLinkServices />
      <ImportantBlock />
      <PromoAlert />
      <NewsGrid />
      <PromoAlert />
      <div className="py-6">
      <MansoryGrid direction="LEFT_RIGHT" />
      <MansoryGrid direction="RIGHT_LEFT" />
      </div>
      <FAQs />
    </div>
  );
}
