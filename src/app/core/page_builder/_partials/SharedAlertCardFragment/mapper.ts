import { ComponentSharedAlertCard } from "@/__generated__/graphql";
import PromoAlertProps from "@/components/PromoAlert/schema";
import { extractNavLinkHref, extractNavLinkText } from "../../utils";

const mapper = (props: ComponentSharedAlertCard): PromoAlertProps => {
  return {
    title: props.title ?? "",
    subTitle: props.subTitle ?? "",
    icon: `${process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API}${
      props?.icon?.url ?? ""
    }`,
    cta: {
      text: extractNavLinkText(props.cta),
      href: extractNavLinkHref(props.cta),
    }, 
  };
};

export default mapper;
