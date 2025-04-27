"use client";

import { ComponentGridsArticleGrid } from "@/__generated__/graphql";
import ArticleGrid from "@/components/ArticleGrid";
import React from "react";
import mapper from "./mapper";
import ApolloWrapperProvider from "@/core/lib/apollo-wrapper";
import { useQuery } from "@apollo/client";
import { getArticlesQuery } from "../../queries/articles";

const LogicNode = (props: ComponentGridsArticleGrid) => {
  const { data, error, loading } = useQuery(getArticlesQuery, {
    variables: {
      filter: {
        category: {
          slug: {
            eq: props.articleCategory?.slug ?? "posts",
          },
        },
      },
      limit: props.maxLength ?? 1,
    },
  });

  if (error) {
    return (
      <div className="container mx-auto py-16 flex items-center justify-center">
        Opss! something went wrong!
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto py-20  grid grid-cols-3 gap-3">
         <div className=" bg-slate-100  aspect-square  rounded-md animate-pulse"></div>
         <div className=" bg-slate-100  aspect-square  rounded-md animate-pulse"></div>
         <div className=" bg-slate-100  aspect-square  rounded-md animate-pulse"></div>
      </div>
    );
  }

  const mapped = mapper(props, data.articles ?? []);

  return <ArticleGrid {...mapped} />;
};

function GridsLatestNewsGridFragment(props: ComponentGridsArticleGrid) {
  return (
    <ApolloWrapperProvider>
      <LogicNode {...props} />
    </ApolloWrapperProvider>
  );
}

export default GridsLatestNewsGridFragment;
