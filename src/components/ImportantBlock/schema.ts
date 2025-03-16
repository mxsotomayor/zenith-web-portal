type ImportantBlockProps = {
  title: string;
  bgColor?: string;
  blocks: BlockItem[];
};

export type BlockItem = {
  title: string;
  description: string;
  image?: string;
  href?:string
};

 

export default ImportantBlockProps;
