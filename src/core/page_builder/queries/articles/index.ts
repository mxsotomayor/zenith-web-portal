import { gql } from "@apollo/client";

export const getArticlesQuery = gql`
query getArticles($filter: ArticleFiltersInput, $limit: Int!) {
  articles( filters: $filter sort: ["createdAt:DESC"], pagination:  {
     limit: $limit
  }) {
    documentId
    title
    description
    createdAt
    slug
    publishedAt
    author {
      name
      avatar {
        alternativeText
        name
        url
      }
    }
    category {
      slug
    }
    cover {
      alternativeText
      url
      previewUrl
    }
  }
}
`;
