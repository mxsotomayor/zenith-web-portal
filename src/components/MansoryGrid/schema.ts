type MansoryGridProps = {
  direction: "left" | "right";
  banner: {
    type?: "img" | "video";
    url: string;
    title: string;
    description: string;
    cta: {
      text: string;
      url: string;
    };
  };
  items: GridItem[];
};

type GridItem = {
  title: string;
  description: string;
  cta: {
    text: string;
    url: string;
  };
};

export default MansoryGridProps;
