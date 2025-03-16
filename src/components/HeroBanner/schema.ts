type Banner = {
  media: {
    type: "img" | "video";
    url: string;
    alt: string;
  };
  title: string;
  description: string;
  cta: {
    text: string;
    url: string;
  };
  listItems?: string[];
  topPill?: string;
};

export default Banner;
