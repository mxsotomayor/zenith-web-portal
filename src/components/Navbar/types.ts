export type NavBarProps = {
  selectedSite?: number;
  menu: MenuProps;
};

export type MenuProps = {
  logoUrl: string;
  logoAltText: string;
  showLogin?: boolean;
  loginButton?: {
    text: string;
    href: string;
  };
  showSearch: boolean;
  topRightMenus: MenuLink[];
  subSites: SubSite[];
  items: MenuLink[];
};

export type SubSite = {
  keyName: string;
  displayName: string;
  subPath: string;
};

export type MenuLink = {
  text: string;
  href?: string;
  target?: "_self" | "_blank";
  subMenu?: SubMenuProps;
};

type SubMenuProps = {
  campaign?: {
    title: string;
    subTitle: string;
    cta: AProps;
    image: {
      url: string;
      altText: string;
    };
  };
  blocks: SubMenuBlockProps[];
};

export type SubMenuBlockProps = { title: string; items: AProps[] };

type AProps = {
  text: string;
  href: string;
  target?: "_blank" | "_self";
};
