export const container = {
  name: "MSCU891823",
  role: "container",
  website: "https://www.bic-boxtech.org/container/MSCU891823",
  document: {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/jws-2020/v1",
    ],
    id: "did:web:bic-boxtech.org:container:MSCU891823",
    service: [
      {
        type: "ContainerRegistry",
        serviceEndpoint: "https://www.bic-boxtech.org/container/MSCU891823",
      },
    ],
  },
};
