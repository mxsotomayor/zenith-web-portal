import { Campaign } from "@/__generated__/graphql";
import { getClient } from "../lib/graphqlClient";
import { getCampaignQuery } from "../page_builder/queries/campaign";

class CMSCampaignService {
  static async getByID(slug: string): Promise<Campaign| false> {
    const { data } = await getClient().query({
      query: getCampaignQuery,
      variables: {
        filter: {
          slug: {
            eq: slug,
          },
        },
      },
    });

    return data.campaigns.length > 0 ? data.campaigns[0] as Campaign: false;
  }
}

export default CMSCampaignService;
