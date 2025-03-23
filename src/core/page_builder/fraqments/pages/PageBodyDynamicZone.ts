import { gql } from "@apollo/client";

export const ComponentSharedHeroBanner_QF = gql`
  fragment ComponentSharedHeroBanner_QF on ComponentSharedHeroBanner {
    __typename
    items {
      ... on ComponentSharedHeroBannerItem {
        title
        description
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
`;

export const ComponentSharedTwoColumnBanner_QF = gql`
  fragment ComponentSharedTwoColumnBanner_QF on ComponentSharedTwoColumnBanner {
    title
    description
    direction
    twoColumnBody {
      body
    }
    externalYtbUrl
    cta {
      ...NavLinkFragment_QF
    }
    media {
      url
      alternativeText
      mime
    }
  }
`;

export const ComponentSlidersServicesSlider_QF = gql`
  fragment ComponentSlidersServicesSlider_QF on ComponentSlidersServicesSlider {
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
`;

export const ComponentSharedHeroBannerItem_QF = gql`
  fragment ComponentSharedHeroBannerItem_QF on ComponentSharedHeroBannerItem {
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
`;

export const ComponentAccordionFaq_QF = gql`
  fragment ComponentAccordionFaq_QF on ComponentAccordionFaq {
    title
    searchPlaceholder
    faqs {
      question
      answer
    }
  }
`;

export const ComponentGridsFourBlocksGrid_QF = gql`
  fragment ComponentGridsFourBlocksGrid_QF on ComponentGridsFourBlocksGrid {
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
`;

export const ComponentGridsArticleGrid_QF = gql`
  fragment ComponentGridsArticleGrid_QF on ComponentGridsArticleGrid {
    title
    articleCategory {
      slug
    }
    maxLength
  }
`;

export const ComponentSharedAlertCard_QF = gql`
  fragment ComponentSharedAlertCard_QF on ComponentSharedAlertCard {
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
`;

export const ComponentSlidersMobileAppAd_QF = gql`
  fragment ComponentSlidersMobileAppAd_QF on ComponentSlidersMobileAppAd {
    title
    subTitle
    appScreens {
      url
      alternativeText
    }
    appleStoreUrl
    googlePlayUrl
  }
`;
