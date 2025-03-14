type PromoAlertProps = {
  icon: string;
  title: string;
  subTitle: string;
  cta?: {
    text: string;
    href: string;
  };
  altCta?: {
    text: string;
    href: string;
  };
};

export default PromoAlertProps;
