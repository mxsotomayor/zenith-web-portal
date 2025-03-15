import { gql } from "@apollo/client";

const NavLinkFragmentSimple = gql`
  fragment NavLinkFragmentSimple_QF on ComponentNavNavLink {
    text
    href
    target
    article {
      title
      description
      category{
        slug
      }
      slug
    }
    campaign {
      title
      description
      slug
    }
    page {
      metaTitle
      metaDescription
      slug
    }
  }
`;

export default NavLinkFragmentSimple;
