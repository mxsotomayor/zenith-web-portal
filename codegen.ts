import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://127.0.0.1:1337/graphql/",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/__generated__/": {
      preset: "client",
    //   presetConfig: {
    //     gqlTagName: "gql",
    //   },
    },
  },
  //   generates: {
  //     './src/graphql/': {
  //       preset: 'client',
  //       config: {
  //         documentMode: 'string'
  //       }
  //     },
  //     './schema.graphql': {
  //       plugins: ['schema-ast'],
  //       config: {
  //         includeDirectives: true
  //       }
  //     }
  //   }
};

export default config;
