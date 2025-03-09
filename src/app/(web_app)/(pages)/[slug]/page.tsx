import Banner from "@/components/Banner";
import HorizServicesLinks from "@/components/HorizServicesLinks";
import MansoryGrid from "@/components/MansoryGrid";
import PageWrapper from "@/components/PageWrapper";
import PromoAlert from "@/components/PromoAlert";
import TwoColumnBanner from "@/components/TwoColBanner";
import React from "react";

function Locations() {
  return (
    <PageWrapper>
      <Banner
        title="Banca Digital"
        subtitle="Get in touch with us using our common contact and location details"
      />
      {/* <TwoColumnBanner direction="RIGHT_LEFT" /> */}
      <PromoAlert />
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
      <MansoryGrid
        direction="right"
        banner={{
          title: "Vive tranquilo en tu hogar",
          description: "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
          url: "/GettyImages-1326458117-e72cd6f16ae44bedbd7f3ca90ffb2053.jpg",
          cta: {
            text: "Vive tranquilo",
            url: "/pagina",
          },
        }}
        items={[
          {
            title: "Vive tranquilo en tu hogar",
            description: "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
          {
            title: "Vive tranquilo en tu hogar",
            description: "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
          {
            title: "Vive tranquilo en tu hogar",
            description: "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
          {
            title: "Vive tranquilo en tu hogar",
            description: "Elige tu casa, consíguela, protégela. En UniBank te ayudamos a administrarla y protegerla.",
            cta: {
              text: "Saber Mas",
              url: "/pagina-text",
            },
          },
        ]}
      />
      <TwoColumnBanner
        direction="right"
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
      <HorizServicesLinks />
    </PageWrapper>
  );
}

export default Locations;
