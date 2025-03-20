import { Global } from "@/__generated__/graphql";
import { getClient } from "../lib/graphqlClient";
import DefaultGlobalsQuery from "../page_builder/queries/globals";

class CMSGlobalService {
  static async get(): Promise<Global> {
    const { data } = await getClient().query({
      query: DefaultGlobalsQuery,
    });


    return data.global as Global;
  }
}

export default CMSGlobalService;
