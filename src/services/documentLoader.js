import { contexts } from "./contexts";

import { carrier } from "../actors";

export const documentLoader = (iri) => {
  if (contexts[iri]) {
    return { document: contexts[iri] };
  }
  if (iri.startsWith(carrier.document.id)) {
    return { document: carrier.document };
  }
  const message = "Unsupported iri " + iri;
  console.error(message);
  throw new Error(message);
};
