import PageWrapper from "@/components/PageWrapper";
import React from "react";
import dynamic from "next/dynamic";
import partialScaffoldMap from "./config";
import { ImportProps } from "./schemas";
import { AlertCircle } from "lucide-react";

const ErrorContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-8 font-mono bg-pink-100 px-4">
      <div className="container mx-auto"><AlertCircle size="40" className="text-red-900" /></div>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

const DynamicComponentLoader = (data: ImportProps) => {
  try {
    if (!partialScaffoldMap[data._component]) {
      return (
        <ErrorContainer>
          <h1 className="text-3xl font-bold py-4 text-pink-400">
            Wrapper not :&apos;{data._component}&apos; [NOT_FOUND]
          </h1>
          <p>
            Seems that this wrapper in declared in CMS but not found in config
            file, we cant render nothing
          </p>
          <p>Please declared what we must render</p>
        </ErrorContainer>
      );
    }
    const DynamicHeader = dynamic(
      () =>
        import("./_partials/" + partialScaffoldMap[data._component] + "").catch(() => {
          const FailedToLoad = () => (
            <ErrorContainer>
              <h1 className="text-3xl font-bold py-4 text-pink-400">
                oops... this failed to load &apos;
                {"./_partials/" + partialScaffoldMap[data._component] + ""}&apos;
              </h1>
              <p>Seem to exist nothing in this path, we cant import nothing</p>
            </ErrorContainer>
          );
          FailedToLoad.displayName = "FailedToLoad";
          return FailedToLoad;
        }),
      {
        loading: () => <p>Loading... {partialScaffoldMap[data._component]}`</p>,
      }
    );

    return <DynamicHeader {...data.props} />;
  } catch {
    return <span>Error loading &apos;{partialScaffoldMap[data._component]}&apos;</span>;
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
