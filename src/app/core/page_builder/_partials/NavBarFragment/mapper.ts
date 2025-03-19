import { Navbar } from "@/__generated__/graphql";
import { MenuProps } from "@/components/Navbar/schema";
import { extractNavLinkHref, extractNavLinkText } from "../../utils";

const mapper = (props: Navbar): MenuProps => {
  return {
    logoUrl: `${process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API}${props?.logo?.url}`,
    logoAltText: props.logo?.alternativeText ?? "",
    showLogin: props.showLogin ?? false,
    showSearch: props.showSearch ?? false,
    loginButton: props.loginButton
      ? {
          text: props.loginButton?.text ?? "",
          href: props.loginButton?.href ?? "",
        }
      : undefined,
    subSites:
      props.sub_sites?.map((subsite) => ({
        displayName: subsite?.displayName ?? "",
        keyName: subsite?.displayName ?? "",
        subPath: subsite?.slug ? "/sites/" + subsite?.slug : "",
      })) ?? [],
    topRightMenus:
      props.topRightMenu?.map((item) => ({
        text: extractNavLinkText(item),
        href: extractNavLinkHref(item),
      })) ?? [],
    items:
      props.menus?.map((item) => ({
        text: extractNavLinkText(item?.link),
        href: extractNavLinkHref(item?.link),
        subMenu: item?.sections?.length
          ? {
              campaign: item?.campaign
                ? {
                    title: item?.campaign?.title ?? "",
                    subTitle: item?.campaign?.description ?? "",
                    cta: {
                      text: item.campaign.ctaText ?? "Saber mas",
                      href: "/campaign/" + (item.campaign.slug ?? ""),
                    },
                    image: {
                      url: `${process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API}${
                        item?.campaign?.bg?.url ?? ""
                      }`,
                      altText: item?.campaign?.bg?.alternativeText ?? "",
                    },
                  }
                : undefined,
              blocks:
                item?.sections?.map((block) => ({
                  title: block?.title ?? "",

                  items:
                    block?.items?.map((menuitem) => ({
                      text: extractNavLinkText(menuitem),
                      href: extractNavLinkHref(menuitem),
                      //   target: "_blank",
                    })) ?? [],
                })) ?? [],
            }
          : undefined,
      })) ?? [],
  };
};

export default mapper;
