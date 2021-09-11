import React from "react";
import { Button } from "@material-ui/core";

import { useParams } from "react-router-dom";

import { Page } from "../../components/Page";
import { BolPreview } from "../../components/BolPreview";
import { ContainerPreview } from "../../components/ContainerPreview";

import { Loading } from "../../components/Loading";

import { Verifier } from "../../services/Verifier";

import BolVc from "../../data/bol.vc.json";

import { container, bol } from "../../actors";

export const Document = () => {
  const { did } = useParams();

  const [stage, setStage] = React.useState(did ? "preview" : "capture");
  const [action, setAction] = React.useState("verify");

  const handleVerify = async (verifiableCredential) => {
    setStage("verifying");
    const result = await Verifier.verify(verifiableCredential);
    console.info("Verifying...");
    console.info(result);
    setTimeout(() => {
      setAction("");
      setStage("preview");
    }, 1 * 1000);
  };

  const content = {
    [BolVc.id]: (
      <BolPreview actor={bol} action={action} onVerify={handleVerify} />
    ),
    [container.document.id]: (
      <ContainerPreview actor={container} container={container} />
    ),
  };

  const titles = {
    [BolVc.id]: "Bill of Lading",
    [container.document.id]: "Container",
  };

  const title = titles[did];

  return (
    <Page
      title={title}
      callToAction={
        {
          preview: (
            <>
              {did !== container.document.id && (
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  onClick={() => {
                    setAction("verify");
                  }}
                >
                  Verify
                </Button>
              )}
            </>
          ),
        }[stage]
      }
    >
      {
        {
          preview: <> {content[did]}</>,
          verifying: <Loading message={"Verifying credential..."} fullPage />,
        }[stage]
      }
    </Page>
  );
};
