import { contexts } from "./contexts";

import { issuer } from "../actors";

export const documentLoader = (iri) => {
  if (contexts[iri]) {
    return { document: contexts[iri] };
  }
  if (iri.startsWith(issuer.document.id)) {
    return { document: issuer.document };
  }
  const message = "Unsupported iri " + iri;
  console.error(message);
  throw new Error(message);
};
