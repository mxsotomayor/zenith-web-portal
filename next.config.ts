import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitios/empresas",
        destination: "/sites/business",
        locale: false,
      },
    ];
  },
  i18n: {
    localeDetection: false,

    // These are all the locales you want to support in
    // your application
    locales: ["en-US", "fr"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",
  },
  /* config options here */
  images: {
    remotePatterns: [
      // just for strapi cms
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
