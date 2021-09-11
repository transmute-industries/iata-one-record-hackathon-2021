import React from "react";

import { AceEditor } from "./AceEditor";

import { Tabs } from "./Tabs";

import BolVc from "../data/bol.vc.json";

export const BolPreview = ({ action, onVerify }) => {
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
          title: "Verifiable Credential",
          content: (
            <AceEditor value={JSON.stringify(vc, null, 2)} type={"json"} />
          ),
        },
      ]}
    />
  );
};
