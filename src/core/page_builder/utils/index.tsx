import { ComponentNavNavLink, Maybe } from "@/__generated__/graphql";

export const DumpPre = (data: unknown) => {
  return <pre>{JSON.stringify(data, null, "  ") ?? ""}</pre>;
};

export const extractNavLinkText = (item: Maybe<ComponentNavNavLink> | undefined) => {
  if (!item) return "[no-text]";
  return (
    item?.text ??
    item?.page?.metaTitle ??
    item?.campaign?.title ??
    item?.article?.title ??
    "[no-text]"
  );
};

export const extractNavLinkHref = (item: Maybe<ComponentNavNavLink> | undefined) => {
  if (!item) return "";
  return (
    item?.href ??
    (item?.page?.slug && `/${item?.page?.slug}` ) ??
    ((item?.campaign?.externalLink || item?.campaign?.slug) && (`/campaign/${item?.campaign?.externalLink ?? item?.campaign?.slug}`) ) ??
    (item?.article?.slug && ("/" + item?.article?.category?.slug + "/" + item?.article?.slug)) ??
    ""
  );
};
