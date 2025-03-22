import { gql } from "@apollo/client";
import SubSite_QF from "../../fraqments/sites/Subsite_QF";

const GetSite_Query = gql`
  ${SubSite_QF}
  query getSubSiteQuery($input: SubSiteFiltersInput) {
    subSites(filters: $input) {
      ...Subsite_QF
    }
  }
`;

export default GetSite_Query;
