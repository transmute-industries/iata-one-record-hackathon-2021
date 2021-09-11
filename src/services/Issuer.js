import assertionMethodKey from "../data/carrier.private.key.json";
import { JsonWebKey, JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./documentLoader";
import { verifiable } from "@transmute/vc.js";

import { carrier } from "../actors";

// carrier is the issuer
const issuerKey = { ...assertionMethodKey };
issuerKey.id = issuerKey.id.replace(issuerKey.controller, carrier.document.id);
issuerKey.controller = carrier.document.id;

export const Issuer = {
  issue: async (template) => {
    const suite = new JsonWebSignature({
      key: await JsonWebKey.from(issuerKey),
    });
    const { items } = await verifiable.credential.create({
      credential: { ...template, issuer: issuerKey.controller },
      suite,
      documentLoader,
    });
    const [verifiableCredential] = items;
    return verifiableCredential;
  },
};
