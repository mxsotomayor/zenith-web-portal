import BlockSpace from "@/components/BlockSpace";
import FAQs from "@/components/FAQs";
import HeroBanner from "@/components/HeroBanner";
import HorizServicesLinks from "@/components/HorizServicesLinks";
import HorizServicesLinksItems from "@/components/HorizServicesLinks/dataInit";
import HotLinkServices from "@/components/HotLinkServices";
import HotLinkServicesItems from "@/components/HotLinkServices/dataInit";
import ImportantBlock from "@/components/ImportantBlock";
import ImportantBlockInitProps from "@/components/ImportantBlock/dataInit";
import MansoryGrid from "@/components/MansoryGrid";
import NewsGrid from "@/components/NewsGrid";
import PageWrapper from "@/components/PageWrapper";
import PromoAlert from "@/components/PromoAlert";
import TwoColumnBanner from "@/components/TwoColBanner";

export default function Home() {
  return (
    <PageWrapper>
      <HeroBanner />
      <HotLinkServices items={HotLinkServicesItems} />
      <ImportantBlock {...ImportantBlockInitProps} />
      <PromoAlert />
      <NewsGrid />
      <PromoAlert />
      <MansoryGrid
        direction="right"
        banner={{
          title: "Vive tranquilo en tu hogar",
          description:
            "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
          url: "/GettyImages-1326458117-e72cd6f16ae44bedbd7f3ca90ffb2053.jpg",
          cta: {
            text: "Vive tranquilo",
            url: "/pagina",
          },
        }}
        items={[
          {
            title: "Vive tranquilo en tu hogar",
            description:
              "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
          {
            title: "Vive tranquilo en tu hogar",
            description:
              "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
          {
            title: "Vive tranquilo en tu hogar",
            description:
              "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
          {
            title: "Vive tranquilo en tu hogar",
            description:
              "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
        ]}
      />
      <TwoColumnBanner
        direction="left"
        title="Unitoken"
        cta={{
          text: "Crear cuenta",
        }}
        subTitle=" Realiza tus transferencias de forma segura con UniToken, que es el
            código que actúa como segundo factor de autenticación para validar
            tu transacción."
        body={[
          " Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción.",
          [
            "Realiza tus transferencias de forma segura con UniToken",
            "Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción.",
          ],
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
          [
            "Realiza tus transferencias de forma segura con UniToken",
            "Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción.",
          ],
          " Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción.",
          " Realiza tus transferencias de forma segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción. segura con UniToken, que es el código que actúa como segundo factor de autenticación para validar tu transacción.",
        ]}
        media={{
          type: "video",
          url: "https://youtube.com/embed/WMT55v4LvlE?autoplay=1&muted=1",
        }}
      />

      <HorizServicesLinks items={HorizServicesLinksItems} />
      <MansoryGrid
        direction="left"
        banner={{
          title: "Vive tranquilo en tu hogar",
          description:
            "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
          url: "/GettyImages-1326458117-e72cd6f16ae44bedbd7f3ca90ffb2053.jpg",
          cta: {
            text: "Vive tranquilo",
            url: "/pagina",
          },
        }}
        items={[
          {
            title: "Vive tranquilo en tu hogar",
            description:
              "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
          {
            title: "Vive tranquilo en tu hogar",
            description:
              "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
          {
            title: "Vive tranquilo en tu hogar",
            description:
              "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
          {
            title: "Vive tranquilo en tu hogar",
            description:
              "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
        ]}
      />
      <BlockSpace size="lg" />
      <FAQs
        title="Frequently Asked Questions"
        search={{ placeholder: "Search FAQ" }}
        items={[
          {
            question: "What is Open Banking?",
            answer:
              "Open Banking is a secure way for you to give providers access to your financial information. It allows you to share your data with authorized third-party providers, enabling them to offer you personalized financial products and services.",
          },
          {
            question: "Is Open Banking safe?",
            answer:
              "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
          },
          {
            question: "Is Open Banking safe?",
            answer:
              "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
          },
          {
            question: "Is Open Banking safe?",
            answer:
              "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
          },
        ]}
      />
    </PageWrapper>
  );
}
