import PageWrapper from "@/components/PageWrapper";
import React from "react";
import dynamic from "next/dynamic";
import settings from "./config";
import { ImportProps } from "./schemas";

const DynamicComponentLoader = (data: ImportProps) => {
  try {

    if(!settings[data._component]){
      return <div className="py-3 font-mono bg-pink-100 px-4"><h1 className="text-3xl font-bold py-4 text-pink-400">Wrapper not :{data._component} [NOT_FOUND]</h1> 
      <p>Seems that this wrapper in declared in CMS but not found in config file, we cant render nothing</p>
      <p>Please declared what we must render</p>
      </div>
    }
    const DynamicHeader = dynamic(
      () => import("./wrappers/" + settings[data._component] + "")
      .catch(() => {
        const FailedToLoad = () => (
          <div className="py-3 font-mono bg-pink-100 px-4">
            <h1 className="text-3xl font-bold py-4 text-pink-400">oops... this failed to load &apos;{"./wrappers/" + settings[data._component] + ""}&apos;</h1>
            <p>Seem to exist nothing in this path, we cant import nothing</p>
          </div>
        );
        FailedToLoad.displayName = "FailedToLoad";
        return FailedToLoad;
      }),
      {
        loading: () => <p>Loading... {settings[data._component]}`</p>,
      }
    );

    return <DynamicHeader {...data.props} />;
  } catch {
    return <span>Error loading &apos;{settings[data._component]}&apos;</span>;
  }
};

function PageBuilder({ items }: { items: ImportProps[] }) {
  return (
    <PageWrapper>
      {items.map((_data, index) => (
        <DynamicComponentLoader key={index} {..._data} />
      ))}
    </PageWrapper>
  );
}

export default PageBuilder;
