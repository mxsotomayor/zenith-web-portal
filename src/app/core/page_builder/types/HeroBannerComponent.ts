type HeroBannerComponent = {
  __typename: "HeroBannerComponent";
  items: HeroBannerComponentItem[];
};

type HeroBannerComponentItem = {
  __typename: "ComponentSharedHeroBannerItem";
  text: string;
  href: string;
  target: "_self" | "_blank" | null;
  campaign:string
};

export default HeroBannerComponent;
