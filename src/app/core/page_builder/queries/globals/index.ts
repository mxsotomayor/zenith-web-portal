import { gql } from "@apollo/client";
import NavLinkFragmentSimple_QF from "../../fraqments/nav/NavLinkFragmentSimple";
import SubSite_QF from "../../fraqments/sites/Subsite_QF";

const DefaultGlobalsQuery = gql`
  ${NavLinkFragmentSimple_QF}
  ${SubSite_QF}
  query getGlobals {
    global {
      callBackButton {
        title
        subTitle
        timeOpen
      }
      defaultSite {
        ...Subsite_QF
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
