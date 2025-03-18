import { gql } from "@apollo/client";
import NavLinkFragmentSimple_QF from "../../fraqments/nav/NavLinkFragmentSimple";

export const getCampaignQuery = gql`
  ${NavLinkFragmentSimple_QF}
query getCampaignQuery($filter: CampaignFiltersInput){
  campaigns(filters:  $filter) {
    createdAt
    title
    description
    slug
    bg {
      url
    }
    body{
      ... on ComponentSharedRichText{
        body
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
`

