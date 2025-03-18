import { gql } from "@apollo/client";
import NavLinkFragment from "../nav/NavLinkFragment";
import NavLinkFragmentSimple_QF from "../nav/NavLinkFragmentSimple";

const PageBodyDynamicZone = gql`
${NavLinkFragment}
${NavLinkFragmentSimple_QF}

fragment PageDynamicZone on PageBodyDynamicZone {
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
      slider_items: items {
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
  }
`;

export default PageBodyDynamicZone;
