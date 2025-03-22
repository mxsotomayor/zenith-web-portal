import { ComponentSharedAlertCard } from "@/__generated__/graphql";
import PromoAlertProps from "@/components/PromoAlert/types";
import { extractNavLinkHref, extractNavLinkText } from "../../utils";

const mapper = (props: ComponentSharedAlertCard): PromoAlertProps => {
  return {
    title: props.title ?? "",
    subTitle: props.subTitle ?? "",
    icon: `${process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API}${
      props?.icon?.url ?? ""
    }`,
    cta:
      extractNavLinkText(props.cta) != "[no-text]"
        ? {
            text: extractNavLinkText(props.cta),
            href: extractNavLinkHref(props.cta),
          }
        : undefined,
  };
};

export default mapper;
