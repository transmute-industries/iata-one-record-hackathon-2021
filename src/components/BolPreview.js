import React from "react";

import { AceEditor } from "./AceEditor";

import { Tabs } from "./Tabs";

import BolVc from "../data/bol.vc.json";

import { CredentialPreview } from "./CredentialPreview";

export const BolPreview = ({ action, onVerify, actor }) => {
  const vc = React.useMemo(() => {
    return { ...BolVc };
  }, []);

  React.useEffect(() => {
    if (action === "verify") {
      onVerify(vc);
    }
  }, [action, vc, onVerify]);

  return (
    <Tabs
      tabs={[
        {
          title: "Bill of Lading",
          content: <CredentialPreview credential={vc} />,
        },
        {
          title: "DID Document",
          content: (
            <AceEditor value={JSON.stringify(actor, null, 2)} type={"json"} />
          ),
        },
        {
          title: "Verifiable Credential",
          content: (
            <AceEditor value={JSON.stringify(vc, null, 2)} type={"json"} />
          ),
        },
      ]}
    />
  );
};
