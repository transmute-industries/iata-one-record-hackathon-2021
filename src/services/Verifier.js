import { JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./documentLoader";
import { verifiable } from "@transmute/vc.js";

export const Verifier = {
  verify: async (credential) => {
    const suite = new JsonWebSignature();
    const result = await verifiable.credential.verify({
      credential,
      suite,
      documentLoader,
    });
    return result;
  },
};
