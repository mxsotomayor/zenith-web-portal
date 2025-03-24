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
