import { gql } from "@apollo/client";

const NavLinkFragment = gql`
 fragment NavLinkFragment_QF on ComponentNavNavLink {
  text
  href
  target
  article {
    title
    description
    slug
    category{
        slug
    }
    cover {
      url
      alternativeText
    }
  }
  campaign {
    title
    description
    slug
    bg {
      url
      alternativeText
    }
  }
  page {
    metaTitle
    slug
    metaDescription
    sharedImage {
      url
      alternativeText
    }
  }
}
`;

export default NavLinkFragment;
