import { gql } from "@apollo/client";
import NavLinkFragmentSimple_QF from "../nav/NavLinkFragmentSimple";

const SubSite_QF = gql`
  ${NavLinkFragmentSimple_QF}

  fragment Subsite_QF on SubSite {
    slug
    title
    displayName
    documentId
    navBar {
      documentId
      logo {
        url
        alternativeText
      }
      showLogin
      showSearch
      loginButton {
        href
        text
      }
      showChat
      topRightMenu {
        ...NavLinkFragmentSimple_QF
      }
      sub_sites {
        displayName
        slug
      }
      menus {
        link {
          ...NavLinkFragmentSimple_QF
        }

        campaign {
          slug
          title
          description
          bg {
            url
            alternativeText
          }
        }
        sections {
          title
          items {
            ...NavLinkFragmentSimple_QF
          }
        }
      }
    }
    footer {
      documentId
      sections {
        title
        items {
          ...NavLinkFragmentSimple_QF
        }
      }
    }
    page {
      documentId
    }
  }
`;

export default SubSite_QF;
