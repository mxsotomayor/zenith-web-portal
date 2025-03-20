import { gql } from "@apollo/client";

const NavLinkFragmentSimple_QF = gql`
  fragment NavLinkFragmentSimple_QF on ComponentNavNavLink {
    text
    href
    target
    article {
      title
      description
      category {
        slug
      }
      slug
    }
    campaign {
      start
      end
      title
      description
      slug
      hightlights {
        highlight
      }
    }
    page {
      metaTitle
      metaDescription
      slug
    }
  }
`;

export default NavLinkFragmentSimple_QF;
