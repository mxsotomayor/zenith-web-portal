import ImportantBlockProps, { BlockItem } from "./schema";

const blocks: BlockItem[] = [
  {
    title: "Funcionalidades de la app",
    description:
      "Puedes realizar operaciones bancarias estés donde estés, conectándote con " +
      process.env.NEXT_PUBLIC_VENDOR_NAME +
      " desde tu celular.",
    image: "/hand-phone.png",
  },
  {
    title: "Puedes realizar operaciones bancarias",
    description: "Conoce más",
    image: "/hand-phone.png",
  },
  {
    title:
      "Operaciones bancarias estés donde estés, conectándote con " +
      process.env.NEXT_PUBLIC_VENDOR_NAME +
      " desde tu celular.",
    description: "Conoce más",
    image: "/hand-phone.png",
  },
  {
    title:
      "conectándote con " +
      process.env.NEXT_PUBLIC_VENDOR_NAME +
      " desde tu celular.",
    description: "Conoce más",
    image: "/hand-phone.png",
  },
];
const ImportantBlockInitProps: ImportantBlockProps = {
  title: "dsfgsdfg",
  bgColor: "orange",
  blocks,
};

export default ImportantBlockInitProps;
