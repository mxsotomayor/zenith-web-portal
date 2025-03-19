 

type TwoColBannerProps = {
  direction: "left" | "right";
  title: string;
  subTitle: string;
  body: string;
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
