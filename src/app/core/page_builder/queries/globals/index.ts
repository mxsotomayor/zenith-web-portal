import { gql } from "@apollo/client";

const DefaultGlobalsQuery = gql`
query getGlobals {
  global {
    defaultSite {
      documentId
      navBar {
        documentId
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
