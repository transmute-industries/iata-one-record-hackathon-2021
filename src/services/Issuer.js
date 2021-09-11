import assertionMethodKey from "../data/assertionMethod.key.json";
import { JsonWebKey, JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./documentLoader";
import { verifiable } from "@transmute/vc.js";

import { issuer } from "../actors";

const issuerKey = { ...assertionMethodKey };
issuerKey.id = issuerKey.id.replace(issuerKey.controller, issuer.document.id);
issuerKey.controller = issuer.document.id;

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
