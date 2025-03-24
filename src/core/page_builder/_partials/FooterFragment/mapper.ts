import { Footer } from "@/__generated__/graphql";
import FooterProps from "@/components/Footer/types";
import {
  extractNavLinkHref,
  extractNavLinkText,
  generateCMSMedia,
} from "../../utils";

const mapper = (props: Footer): FooterProps => {
  return {
    logoUrl: generateCMSMedia(props.footerLogo?.url ?? ""),
    slogan: props.footerSlogan ?? "",
    locations: props.banks_locations?.map((item)=> ({
        name: item?.name ?? "",
        address: item?.address ?? "",
        phone: item?.phone ?? "",
        email: item?.email ?? ""
    })) ?? [],
    blocks:
      props.sections?.map((section) => ({
        title: section?.title ?? "",
        items:
          section?.items?.map((item) => ({
            text: extractNavLinkText(item),
            href: extractNavLinkHref(item),
          })) ?? [],
      })) ?? [],
  };
};

export default mapper;
