import { ComponentSharedRichText } from "@/__generated__/graphql";
import RichText from "@/components/RichText";
import React from "react";

function ComponentRichText(data: ComponentSharedRichText) {
  return (
    <div>
      <RichText content={data.body ?? `
# React Markdown Example

- Some text
- Some other text

## Subtitle

### Additional info

This is a [link](https://github.com/remarkjs/react-markdown)
`} />
    </div>
  );
}

export default ComponentRichText;
