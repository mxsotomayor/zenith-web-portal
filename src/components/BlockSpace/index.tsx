import React from "react";

const sizes = {
  sm: "min-h-6",
  md: "min-h-8",
  lg: "min-h-16",
};
function BlockSpace({ size }: { size: "sm" | "md" | "lg" }) {
  return <div data-name="BlockSpace" className={sizes[size]}></div>;
}

export default BlockSpace;
