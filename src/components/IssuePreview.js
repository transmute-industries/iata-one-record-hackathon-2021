import React from "react";

import { AceEditor } from "./AceEditor";

import { Tabs } from "./Tabs";

import BolTemplate from "../data/bol.template.json";

import { bol, carrier } from "../actors";

export const IssuePreview = ({ text, onIssue, action }) => {
  const template = React.useMemo(() => {
    return {
      ...BolTemplate,
      // 🔥 overriding template values here.
      id: bol.document.id,
      issuer: carrier.document.id,
    };
  }, []);

  // 🔥 overriding template values here.
  template.credentialSubject.content = text;

  React.useEffect(() => {
    if (action === "issuing") {
      onIssue(template);
    }
  }, [action, template, onIssue]);

  return (
    <Tabs
      tabs={[
        {
          title: "Verifiable Credential",
          content: (
            <AceEditor
              value={JSON.stringify(template, null, 2)}
              type={"json"}
            />
          ),
        },
        {
          title: "Raw Data",
          content: <AceEditor value={text} type={"text"} />,
        },
      ]}
    />
  );
};
