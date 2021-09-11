import React from "react";

import { AceEditor } from "./AceEditor";

import { Tabs } from "./Tabs";

export const ContainerPreview = ({ container }) => {
  return (
    <Tabs
      tabs={[
        {
          title: "Container",
          content: (
            <AceEditor
              value={JSON.stringify(container, null, 2)}
              type={"json"}
            />
          ),
        },
        {
          title: "DID Document",
          content: (
            <AceEditor
              value={JSON.stringify(container.document, null, 2)}
              type={"json"}
            />
          ),
        },
      ]}
    />
  );
};
