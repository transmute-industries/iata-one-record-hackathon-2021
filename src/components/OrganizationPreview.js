import React from "react";

import { AceEditor } from "./AceEditor";

import { Tabs } from "./Tabs";

export const OrganizationPreview = ({ organization }) => {
  return (
    <Tabs
      tabs={[
        {
          title: "Organization Details",
          content: (
            <AceEditor
              value={JSON.stringify(organization, null, 2)}
              type={"json"}
            />
          ),
        },
      ]}
    />
  );
};
