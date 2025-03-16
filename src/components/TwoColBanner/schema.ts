export type ListText = string[];

type BodyItem = (string | ListText)[];

type TwoColBannerProps = {
  direction: "left" | "right";
  title: string;
  subTitle: string;
  body: BodyItem;
  media: {
    type: "img" | "video";
    url: string;
  },
  cta?:{
    text:string,
    url?:string
  }
};

export default TwoColBannerProps;
