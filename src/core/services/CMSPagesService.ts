import { Page } from "@/__generated__/graphql";
import { getClient } from "../lib/graphqlClient";
import GetPageBySlugQuery, {
  GetPageByIDQuery,
} from "../page_builder/queries/pages";

class CMSPagesService {
  static async getByID(id: string): Promise<Page> {
    const { data } = await getClient().query({
      query: GetPageByIDQuery,
      variables: {
        documentId: id,
      },
    });
    return data.page as Page;
  }

  static async getBySlug(
    slug: string,
    subSiteSlug: string | null = null
  ): Promise<Page> {
    const { data } = await getClient().query({
      query: GetPageBySlugQuery,
      variables: {
        filterInput: {
          slug: {
            eq: slug,
          },
          subSiteOwner: {
            or: {
              slug: {
                eq: subSiteSlug,
              },
            },
          },
        },
      },
    });
    return data.pages[0] as Page;
  }
}

export default CMSPagesService;
