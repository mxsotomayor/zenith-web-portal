import { SubSite } from "@/__generated__/graphql";
import { getClient } from "../lib/graphqlClient";
import GetSite_Query from "../page_builder/queries/sites";

class CMSSubSiteService {
  static async getBySlug(slug: string): Promise<SubSite | false> {
    const { data } = await getClient().query({
      query: GetSite_Query,
      variables: {
        input: {
          slug: {
            eq: slug,
          },
        },
      },
    });
    return data.subSites.length > 0 ? (data.subSites[0] as SubSite) : false;
  }
}

export default CMSSubSiteService;
