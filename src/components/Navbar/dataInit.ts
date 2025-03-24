import { MenuLink, MenuProps } from "./types";

export const mainMenuItems: MenuLink[] = [
  {
    text: "Nosotros",
    subMenu: {
      blocks: [
        {
          title: "Personas",
          items: [
            {
              text: "Junta Directiva",
              href: "/junta-directiva",
              target: "_self",
            },
            {
              text: "Uni - Lideres",
              href: "#",
              target: "_self",
            },
          ],
        },
        {
          title: "Compromisos y Resultados",
          items: [
            {
              text: "Estados Financieros",
              href: "#",
              target: "_self",
            },
            {
              text: "Sostenibilidad",
              href: "#",
              target: "_self",
            },
            {
              text: "Calificación de Riesgo",
              href: "#",
              target: "_self",
            },
          ],
        },
        {
          title: "Documentos",
          items: [
            {
              text: "Manual de Gobierno Corporativo",
              href: "#",
              target: "_self",
            },
            {
              text: "Cumplimiento Normativo y Prevención",
              href: "#",
              target: "_self",
            },
          ],
        },
      ],
    },
  },
  {
    text: "Para Personas",
    subMenu: {
      blocks: [
        {
          title: "Cuentas de Depósitos",
          items: [
            {
              text: "Cuenta Naranja +",
              href: "#",
              target: "_self",
            },
            {
              text: "Cuenta de Ahorros",
              href: "#",
              target: "_self",
            },
            {
              text: "Cuenta Corriente",
              href: "#",
              target: "_self",
            },
            {
              text: "Depósitos a Plazo Fijo",
              href: "#",
              target: "_self",
            },
          ],
        },
        {
          title: "Financiamientos",
          items: [
            {
              text: "Prestamo de Auto",
              href: "#",
              target: "_self",
            },
            {
              text: "Invertis Global Income Fund",
              href: "#",
              target: "_self",
            },
          ],
        },
        {
          title: "Mas Servicios",
          items: [
            {
              text: "Cajillas de Seguridad",
              href: "#",
              target: "_self",
            },
            {
              text: "MasterCard Black CRedito",
              href: "#",
              target: "_self",
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
          href: "/campanha",
          text: "Obtener ahora",
          // target: "",
        },
        image: {
          url: "/padre-hija-desayunando.im1735665141640im.avif",
          altText: "",
        },

        title: "Aprovecha ahora y adhiere a nuestros banco",
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
              target: "_self",
            },
            {
              text: "Cuenta de Ahorro",
              href: "#",
              target: "_self",
            },
          ],
        },
        {
          title: "Financiamientos",
          items: [
            {
              text: "Prestámos Comerciales",
              href: "#",
              target: "_self",
            },
            {
              text: "Prestamos Agroindustriales",
              href: "#",
              target: "_self",
            },
            {
              text: "Financiamiento de Propiedades Comerciales",
              href: "#",
              target: "_self",
            },
            {
              text: "Líneas de Créditos",
              href: "#",
              target: "_self",
            },
            {
              text: "Emisión de Valores",
              href: "#",
              target: "_self",
            },
          ],
        },
        {
          title: "Mas Servicios",
          items: [
            {
              text: "Pago de Planilla Empresarial",
              href: "#",
              target: "_self",
            },
            {
              text: "MasterCard Black Débito",
              href: "#",
              target: "_self",
            },
          ],
        },
      ],
    },
  },

  {
    text: "Banca Digital",
    href: "/banca-digital",
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
