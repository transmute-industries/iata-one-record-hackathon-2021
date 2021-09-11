import React from "react";
import { Button } from "@material-ui/core";

import { useParams, useHistory } from "react-router-dom";

import { Page } from "../../components/Page";
import { BolPreview } from "../../components/BolPreview";
import { Loading } from "../../components/Loading";

import { Verifier } from "../../services/Verifier";

import { WebcamCapture } from "../../components/WebcamCapture";

import { Scanner } from "../../services/Scanner";

import BolVc from "../../data/bol.vc.json";

export const Verify = () => {
  const history = useHistory();

  const { did } = useParams();

  const [stage, setStage] = React.useState(did ? "preview" : "capture");
  const [action, setAction] = React.useState("verify");

  const handleCapture = async (image) => {
    console.info("Scanning...");
    console.info(image);
    setStage("processing");
    const text = await Scanner.scan(image);
    console.info("Extracted...");
    console.info(text);
    setStage("preview");
    history.push("/verify/" + BolVc.id);
  };

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
    "did:web:dcsa.example.com:bol:MSCUJL010426": (
      <BolPreview action={action} onVerify={handleVerify} />
    ),
  };

  return (
    <Page
      title={did ? "Document " + did : "Scan Document"}
      callToAction={
        {
          capture: (
            <Button
              variant={"contained"}
              color={"secondary"}
              onClick={() => {
                setAction("processing");
              }}
            >
              Scan
            </Button>
          ),
          preview: (
            <Button
              variant={"contained"}
              color={"secondary"}
              onClick={() => {
                setAction("verify");
              }}
            >
              Verify
            </Button>
          ),
        }[stage]
      }
    >
      {
        {
          capture: <WebcamCapture action={action} onCapture={handleCapture} />,
          processing: <Loading message={"Processing image..."} fullPage />,
          preview: <> {content[did]}</>,
          verifying: <Loading message={"Verifying credential..."} fullPage />,
        }[stage]
      }
    </Page>
  );
};
