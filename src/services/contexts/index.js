import did from "@transmute/did-context";
import vc from "@transmute/credentials-context";
import sec from "@transmute/security-context";
export const contexts = {
  [did.constants.DID_CONTEXT_V1_URL]: did.contexts.get(
    did.constants.DID_CONTEXT_V1_URL
  ),
  [vc.constants.CREDENTIALS_CONTEXT_V1_URL]: vc.contexts.get(
    vc.constants.CREDENTIALS_CONTEXT_V1_URL
  ),
  [sec.constants.JSON_WEB_SIGNATURE_2020_V1_URL]: sec.contexts.get(
    sec.constants.JSON_WEB_SIGNATURE_2020_V1_URL
  ),
  "https://w3id.org/traceability/v1": require("./trace-v1.json"),
};
