import React from "react";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { Page } from "../../components/Page";
import { Loading } from "../../components/Loading";

import { WebcamCapture } from "../../components/WebcamCapture";
import { IssuePreview } from "../../components/IssuePreview";

import { Issuer } from "../../services/Issuer";
import { Scanner } from "../../services/Scanner";

const defaultText = "";
const defaultStage = "capture";

// const defaultText = `
// W1 G T C IO ¥ (AT ,ltlfl_lf_lﬂlilﬂll s
// BILL OF LADING No, MSCUJL010426
// NON-NEGOTIABLE COPY i gt e ot )
// `;

// const defaultStage = `preview`;

export const Issue = () => {
  const history = useHistory();

  const [stage, setStage] = React.useState(defaultStage);
  const [action, setAction] = React.useState("");
  const [text, setText] = React.useState(defaultText);

  const handleCapture = async (image) => {
    console.info("Scanning...");
    console.info(image);
    setStage("processing");
    const text = await Scanner.scan(image);
    console.info("Extracted...");
    console.info(text);
    setText(text);
    setStage("preview");
  };

  const handleIssue = async (template) => {
    setStage("issuing");
    const verifiableCredential = await Issuer.issue(template);
    setTimeout(() => {
      console.info("Issuing...");
      console.info(JSON.stringify(verifiableCredential, null, 2));
      history.push("/documents/" + verifiableCredential.id);
    }, 3 * 1000);
  };

  return (
    <Page
      title={"Document"}
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
                setAction("issuing");
              }}
            >
              Issue
            </Button>
          ),
        }[stage]
      }
    >
      {
        {
          capture: <WebcamCapture action={action} onCapture={handleCapture} />,
          processing: <Loading message={"Processing image..."} fullPage />,
          preview: (
            <IssuePreview action={action} text={text} onIssue={handleIssue} />
          ),
          issuing: <Loading message={"Issuing credential..."} fullPage />,
        }[stage]
      }
    </Page>
  );
};
