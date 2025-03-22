import { Article, ComponentGridsArticleGrid } from "@/__generated__/graphql";
import { ArticleProps } from "@/components/ArticleGrid/types";

const mapper = (
  props: ComponentGridsArticleGrid,
  articles: Article[]
): ArticleProps => {
  return {
    title: props.title ?? "",
    articles:
      articles.map((article) => ({
        title: article.title ?? "",
        subtitle: article.title ?? "",
        excerpt: article.description ?? "",
        image:  `${process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API}${article.cover?.url ?? ""}`,
        slug: (article.category?.slug ? "/" + article.category?.slug : "") + "/" + article.slug,
        date: article.createdAt,
        author: article.author
          ? {
              name: article.author.name ?? "",
              avatar: `${process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API}${article.author?.avatar?.url}`,
            }
          : undefined,
      })) ?? [],
  };
};

export default mapper;
