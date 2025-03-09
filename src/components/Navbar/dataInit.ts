import { MenuLink, MenuProps } from "./schema";

export const mainMenuItems: MenuLink[] = [
  {
    text: "Nosotros",
    // href: null,
    // target: null,
    subMenu: {
      blocks: [
        {
          title: "Personas",
          items: [
            {
              text: "Junta Directiva",
              href: "#",
              target: "_blank",
            },
            {
              text: "Uni - Lideres",
              href: "#",
              target: "_blank",
            },
          ],
        },
        {
          title: "Compromisos y Resultados",
          items: [
            {
              text: "Estados Financieros",
              href: "#",
              target: "_blank",
            },
            {
              text: "Sostenibilidad",
              href: "#",
              target: "_blank",
            },
            {
              text: "Calificación de Riesgo",
              href: "#",
              target: "_blank",
            },
          ],
        },
        {
          title: "Documentos",
          items: [
            {
              text: "Manual de Gobierno Corporativo",
              href: "#",
              target: "_blank",
            },
            {
              text: "Cumplimiento Normativo y Prevención",
              href: "#",
              target: "_blank",
            },
          ],
        },
      ],
    },
  },
  {
    text: "Para Personas",
    // href: null,
    // target: null,
    subMenu: {
      blocks: [
        {
          title: "Cuentas de Depósitos",
          items: [
            {
              text: "Cuenta Naranja +",
              href: "#",
              target: "_blank",
            },
            {
              text: "Cuenta de Ahorros",
              href: "#",
              target: "_blank",
            },
            {
              text: "Cuenta Corriente",
              href: "#",
              target: "_blank",
            },
            {
              text: "Depósitos a Plazo Fijo",
              href: "#",
              target: "_blank",
            },
          ],
        },
        {
          title: "Financiamientos",
          items: [
            {
              text: "Prestamo de Auto",
              href: "#",
              target: "_blank",
            },
            {
              text: "Invertis Global Income Fund",
              href: "#",
              target: "_blank",
            },
          ],
        },
        {
          title: "Mas Servicios",
          items: [
            {
              text: "Cajillas de Seguridad",
              href: "#",
              target: "_blank",
            },
            {
              text: "MasterCard Black CRedito",
              href: "#",
              target: "_blank",
            },
          ],
        },
      ],
    },
  },
  {
    text: "Para Compañias",
    // href: null,
    // target: null,

    subMenu: {
      campaign: {
        cta: {
          href: "",
          text: "string",
          // target: "",
        },
        image: {
          url: "/padre-hija-desayunando.im1735665141640im.avif",
          altText: "",
        },

        title: " Aprovecha ahora y adhiere a nuestros banco",
        subTitle:
          "Ahora puedes usar nuestras tarifas com menos de 5% de  descuentos para clientes nacionales",
      },
      blocks: [
        {
          title: "Cuentas de Depósitos",
          items: [
            {
              text: "Cuenta Corriente",
              href: "#",
              target: "_blank",
            },
            {
              text: "Cuenta de Ahorro",
              href: "#",
              target: "_blank",
            },
          ],
        },
        {
          title: "Financiamientos",
          items: [
            {
              text: "Prestámos Comerciales",
              href: "#",
              target: "_blank",
            },
            {
              text: "Prestamos Agroindustriales",
              href: "#",
              target: "_blank",
            },
            {
              text: "Financiamiento de Propiedades Comerciales",
              href: "#",
              target: "_blank",
            },
            {
              text: "Líneas de Créditos",
              href: "#",
              target: "_blank",
            },
            {
              text: "Emisión de Valores",
              href: "#",
              target: "_blank",
            },
          ],
        },
        {
          title: "Mas Servicios",
          items: [
            {
              text: "Pago de Planilla Empresarial",
              href: "#",
              target: "_blank",
            },
            {
              text: "MasterCard Black Débito",
              href: "#",
              target: "_blank",
            },
          ],
        },
      ],
    },
  },

  {
    text: "Banca Digital",
    href: "/our-team",
    // target: null,
  },
  {
    text: "UniLeasing &trade;",
    href: "/our-team",
    // target: null,
  },
  {
    text: "UniTrust &trade;",
    href: "/our-team",
    // target: null,
  },
];

export const menuSettings : MenuProps = {
  logoUrl: "/oie_liyvudiqai3a.png",
  logoAltText: "mi banco",
  showLogin: true,
  showSearch: true,
  topRightMenus: [
    {
      text: "Contact",
      href: "/contact",
      target: "_self",
    },
    {
      text: "Customer Support",
      href: "/help",
      target: "_self",
    },
  ],
  subSites: [
    {
      keyName: "personal",
      displayName: "Personal",
      subPath: "", // leave blank
    },
    {
      keyName: "corporate",
      displayName: "Corporate",
      subPath: "/sites/business",
    },
  ],
  items: mainMenuItems,
};
