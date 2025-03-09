type ImportantBlockProps = {
  title: string;
  bgColor?: string;
  blocks: BlockItem[];
};

export type BlockItem = {
  title: string;
  description: string;
  image?: string;
};

 

export default ImportantBlockProps;
