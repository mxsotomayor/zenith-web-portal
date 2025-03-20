import { gql } from "@apollo/client";
import NavLinkFragmentSimple_QF from "../../fraqments/nav/NavLinkFragmentSimple";
import NavLinkFragment from "../../fraqments/nav/NavLinkFragment";
import {
  ComponentAccordionFaq_QF,
  ComponentSharedAlertCard_QF,
  ComponentSharedTwoColumnBanner_QF,
} from "../../fraqments/pages/PageBodyDynamicZone";

export const getCampaignQuery = gql`
  ${NavLinkFragment}
  ${NavLinkFragmentSimple_QF}

  ${ComponentSharedAlertCard_QF}
  ${ComponentSharedTwoColumnBanner_QF}
  ${ComponentAccordionFaq_QF}

  query getCampaignQuery($filter: CampaignFiltersInput) {
    campaigns(filters: $filter) {
      createdAt
      title
      description
      slug
      bg {
        url
      }
      body {
        ... on ComponentSharedRichText {
          body
        }

        ... on ComponentSharedAlertCard {
          ...ComponentSharedAlertCard_QF
        }

        ... on ComponentSharedTwoColumnBanner {
          ...ComponentSharedTwoColumnBanner_QF
        }

        ... on ComponentAccordionFaq {
          ...ComponentAccordionFaq_QF
        }
      }
    }
  }
`;
