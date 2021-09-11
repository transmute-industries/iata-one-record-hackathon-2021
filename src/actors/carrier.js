export const carrier = {
  name: "MSC",
  role: "carrier",
  website: "https://www.msc.com",
  document: {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/jws-2020/v1",
    ],
    id: "did:web:dcsa.org:carrier:msc",
    verificationMethod: [
      {
        id: "did:web:dcsa.org:carrier:msc#z6MkfYcBV8jdBM1dzxUkR1Vm7Rwrx55eZNqADGu67ruMBTq1",
        type: "JsonWebKey2020",
        controller: "did:web:dcsa.org:carrier:msc",
        publicKeyJwk: {
          kty: "OKP",
          crv: "Ed25519",
          x: "EDpb5AwlXWSbu4SUPqEEOot-moIsUGgX5irDANvNGhg",
        },
      },
    ],
    assertionMethod: [
      "did:web:dcsa.org:carrier:msc#z6MkfYcBV8jdBM1dzxUkR1Vm7Rwrx55eZNqADGu67ruMBTq1",
    ],
    authentication: [
      "did:web:dcsa.org:carrier:msc#z6MkfYcBV8jdBM1dzxUkR1Vm7Rwrx55eZNqADGu67ruMBTq1",
    ],
  },
};
