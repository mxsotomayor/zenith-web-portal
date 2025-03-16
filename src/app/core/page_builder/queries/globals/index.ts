import { gql } from "@apollo/client";
import NavLinkFragmentSimple from "../../fraqments/nav/NavLinkFragmentSimple";

const DefaultGlobalsQuery = gql`
  ${NavLinkFragmentSimple}
  query getGlobals {
    global {
      callBackButton {
        title
        subTitle
        timeOpen
      }
      defaultSite {
        documentId
        navBar {
          documentId
          logo {
            url
            alternativeText
          }
          showLogin
          showSearch
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
        }
        page {
          documentId
        }
      }
      defaultSeo {
        metaDescription
        metaTitle
        shareImage {
          url
        }
      }
      subSites(filters: { publishedAt: { not: null } }) {
        documentId
        title
        slug
      }
    }
  }
`;

export default DefaultGlobalsQuery;
