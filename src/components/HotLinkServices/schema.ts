type HotlinksProps = {
  title:string;
  items: LinkItem[];
};

export type LinkItem = {
  text: string;
  icon: string;
  href: string;
};

export default HotlinksProps;
