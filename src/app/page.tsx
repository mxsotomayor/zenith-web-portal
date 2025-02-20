import FAQs from "@/components/FAQs";
import HeroBanner from "@/components/HeroBanner";
import HotLinkServices from "@/components/HotLinkServices";
import ImportantBlock from "@/components/ImportantBlock";
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
      <FAQs />
    </div>
  );
}
