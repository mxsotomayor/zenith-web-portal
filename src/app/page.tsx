import BlockSpace from "@/components/BlockSpace";
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
      <TwoColumnBanner
        direction="left"
        title="Unitoken"
        cta = {{
          text:"Hi"
        }}
        subTitle=" Realiza tus transferencias de forma segura con UniToken, que es el
            código que actúa como segundo factor de autenticación para validar
            tu transacción."
        body={[
          " Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción.",
          ["Realiza tus transferencias de forma segura con UniToken", "Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción."],
         
        ]}
        media={{
          type: "img",
          url: "/36.png",
        }}
      />

      <TwoColumnBanner
        direction="right"
        title="Vision 2025"
        subTitle="Projecciones económicas para oportunidade para Panamá"
        body={[
          " Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción.",
          ["Realiza tus transferencias de forma segura con UniToken", "Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción."],
          " Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción.",
          " Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción. segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción.",
        ]}
        media={{
          type: "video",
          url: "https://youtube.com/embed/WMT55v4LvlE?autoplay=1&muted=1",
        }}
      />

      <HorizServicesLinks />
      <BlockSpace size="lg" />
      <MansoryGrid direction="RIGHT_LEFT" />
      <BlockSpace size="lg" />
      <FAQs />
    </PageWrapper>
  );
}
