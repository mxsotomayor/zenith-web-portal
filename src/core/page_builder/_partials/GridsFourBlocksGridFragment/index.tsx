import { ComponentGridsFourBlocksGrid } from "@/__generated__/graphql";
import ImportantBlock from "@/components/ImportantBlock";
import React from "react";
import mapper from "./mapper";

function GridsFourBlocksGridFragment(props: ComponentGridsFourBlocksGrid) {
  const data = mapper(props);
  return (
    <div>
      <ImportantBlock {...data} />{" "}
    </div>
  );
}

export default GridsFourBlocksGridFragment;
