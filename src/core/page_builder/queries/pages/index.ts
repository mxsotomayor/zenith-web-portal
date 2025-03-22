import { gql } from "@apollo/client";
import NavLinkFragment from "../../fraqments/nav/NavLinkFragment";
import NavLinkFragmentSimple_QF from "../../fraqments/nav/NavLinkFragmentSimple";
import {
  ComponentAccordionFaq_QF,
  ComponentGridsArticleGrid_QF,
  ComponentGridsFourBlocksGrid_QF,
  ComponentSharedAlertCard_QF,
  ComponentSharedHeroBanner_QF,
  ComponentSharedHeroBannerItem_QF,
  ComponentSharedTwoColumnBanner_QF,
  ComponentSlidersServicesSlider_QF,
  ComponentSlidersMobileAppAd_QF,
} from "../../fraqments/pages/PageBodyDynamicZone";

const GetPageBySlugQuery = gql`
  ${NavLinkFragment}
  ${NavLinkFragmentSimple_QF}

  ${ComponentSharedTwoColumnBanner_QF}
  ${ComponentSharedHeroBanner_QF}
  ${ComponentSlidersServicesSlider_QF}
  ${ComponentSharedHeroBannerItem_QF}
  ${ComponentAccordionFaq_QF}
  ${ComponentGridsFourBlocksGrid_QF}
  ${ComponentGridsArticleGrid_QF}
  ${ComponentSharedAlertCard_QF}
  ${ComponentSlidersMobileAppAd_QF}

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
        ... on ComponentSharedTwoColumnBanner {
          ...ComponentSharedTwoColumnBanner_QF
        }

        ... on ComponentSharedHeroBanner {
          ...ComponentSharedHeroBanner_QF
        }

        ... on ComponentSlidersServicesSlider {
          ...ComponentSlidersServicesSlider_QF
        }

        ... on ComponentSharedRichText {
          __typename
          body
        }

        ... on ComponentSharedHeroBannerItem {
          ...ComponentSharedHeroBannerItem_QF
        }

        ... on ComponentAccordionFaq {
          ...ComponentAccordionFaq_QF
        }

        ... on ComponentGridsFourBlocksGrid {
          ...ComponentGridsFourBlocksGrid_QF
        }

        ... on ComponentGridsArticleGrid {
          ...ComponentGridsArticleGrid_QF
        }

        ... on ComponentSharedAlertCard {
          ...ComponentSharedAlertCard_QF
        }
        

        ... on ComponentSlidersMobileAppAd {
          ...ComponentSlidersMobileAppAd_QF
        }
      }
    }
  }
`;

export const GetPageByIDQuery = gql`
  ${NavLinkFragment}
  ${NavLinkFragmentSimple_QF}

  ${ComponentSharedTwoColumnBanner_QF}
  ${ComponentSharedHeroBanner_QF}
  ${ComponentSlidersServicesSlider_QF}
  ${ComponentSharedHeroBannerItem_QF}
  ${ComponentAccordionFaq_QF}
  ${ComponentGridsFourBlocksGrid_QF}
  ${ComponentGridsArticleGrid_QF}
  ${ComponentSharedAlertCard_QF}
  ${ComponentSlidersMobileAppAd_QF}

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
        ... on ComponentSharedTwoColumnBanner {
          ...ComponentSharedTwoColumnBanner_QF
        }

        ... on ComponentSharedHeroBanner {
          ...ComponentSharedHeroBanner_QF
        }

        ... on ComponentSlidersServicesSlider {
          ...ComponentSlidersServicesSlider_QF
        }

        ... on ComponentSharedRichText {
          __typename
          body
        }

        ... on ComponentSharedHeroBannerItem {
          ...ComponentSharedHeroBannerItem_QF
        }

        ... on ComponentAccordionFaq {
          ...ComponentAccordionFaq_QF
        }

        ... on ComponentGridsFourBlocksGrid {
          ...ComponentGridsFourBlocksGrid_QF
        }

        ... on ComponentGridsArticleGrid {
          ...ComponentGridsArticleGrid_QF
        }

        ... on ComponentSharedAlertCard {
          ...ComponentSharedAlertCard_QF
        }

        ... on ComponentSlidersMobileAppAd {
          ...ComponentSlidersMobileAppAd_QF
        }
      }
    }
  }
`;

export default GetPageBySlugQuery;
