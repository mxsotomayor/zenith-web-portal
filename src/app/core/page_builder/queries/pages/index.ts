import { gql } from "@apollo/client";
import NavLinkFragment from "../../fraqments/nav/NavLinkFragment";
import NavLinkFragmentSimple_QF from "../../fraqments/nav/NavLinkFragmentSimple";

const GetPageBySlugQuery = gql`
  ${NavLinkFragment}
  ${NavLinkFragmentSimple_QF}

  query getPageOne($filterInput: PageFiltersInput) {
    pages(filters: $filterInput) {
      documentId
      metaTitle
      metaDescription
      sharedImage {
        url
      }
      slug
      body {
        ... on ComponentSharedHeroBanner {
          __typename
          items {
            ... on ComponentSharedHeroBannerItem {
              bg {
                alternativeText
                url
              }
              cta {
                ...NavLinkFragment_QF
              }
            }
          }
        }

        ... on ComponentSlidersServicesSlider {
          __typename
          title
          services_items {
            icon {
              alternativeText
              url
            }
            cta {
              ...NavLinkFragmentSimple_QF
            }
          }
        }

        ... on ComponentSharedRichText {
          __typename
          body
        }

        ... on ComponentSharedHeroBannerItem {
          bg {
            url
            alternativeText
          }
          cta {
            ...NavLinkFragmentSimple_QF
          }
          title
          description
        }

        ... on ComponentAccordionFaq {
          title
          searchPlaceholder
          faqs {
            question
            answer
          }
        }

        ... on ComponentGridsFourBlocksGrid {
          title
          blocks_items {
            title
            description
            bg {
              url
              alternativeText
            }
            cta {
              ...NavLinkFragmentSimple_QF
            }
          }
        }

        ... on ComponentGridsArticleGrid {
          title
          articleCategory {
            slug
          }
          maxLength
        }

        ... on ComponentSharedAlertCard {
          title
          subTitle
          icon {
            url
            alternativeText
          }
          cta {
            ...NavLinkFragmentSimple_QF
          }
        }
      }
    }
  }
`;

export const GetPageByIDQuery = gql`
  ${NavLinkFragment}
  ${NavLinkFragmentSimple_QF}

  query getPageByID($documentId: ID!) {
    page(documentId: $documentId) {
      documentId
      metaTitle
      metaDescription
      sharedImage {
        url
      }
      slug
      body {
        ... on ComponentSharedHeroBanner {
          __typename
          items {
            ... on ComponentSharedHeroBannerItem {
              bg {
                alternativeText
                url
              }
              cta {
                ...NavLinkFragment_QF
              }
            }
          }
        }

        ... on ComponentSlidersServicesSlider {
          __typename
          title
          services_items {
            icon {
              alternativeText
              url
            }
            cta {
              ...NavLinkFragmentSimple_QF
            }
          }
        }

        ... on ComponentSharedRichText {
          __typename
          body
        }

        ... on ComponentSharedHeroBannerItem {
          bg {
            url
            alternativeText
          }
          cta {
            ...NavLinkFragmentSimple_QF
          }
          title
          description
        }

        ... on ComponentAccordionFaq {
          title
          searchPlaceholder
          faqs {
            question
            answer
          }
        }

        ... on ComponentGridsFourBlocksGrid {
          title
          blocks_items {
            title
            description
            bg {
              url
              alternativeText
            }
            cta {
              ...NavLinkFragmentSimple_QF
            }
          }
        }

        ... on ComponentGridsArticleGrid {
          title
          articleCategory {
            slug
          }
          maxLength
        }

        ... on ComponentSharedAlertCard {
          title
          subTitle
          icon {
            url
            alternativeText
          }
          cta {
            ...NavLinkFragmentSimple_QF
          }
        }
      }
    }
  }
`;

export default GetPageBySlugQuery;
