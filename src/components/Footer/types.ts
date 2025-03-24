import { SubMenuBlockProps } from "../Navbar/types";

type Location = {
  name:string;
  address:string;
  phone:string;
  email:string;
}

type FooterProps = {
  logoUrl: string;
  slogan: string;
  blocks: SubMenuBlockProps[];
  locations?:Location[]
};

export default FooterProps;
