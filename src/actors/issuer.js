export const issuer = {
  name: "Igor Issuer",
  document: {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/jws-2020/v1",
    ],
    id: "did:web:iata.example.com:123",
    verificationMethod: [
      {
        id: "did:web:iata.example.com:123#z6MkfYcBV8jdBM1dzxUkR1Vm7Rwrx55eZNqADGu67ruMBTq1",
        type: "JsonWebKey2020",
        controller: "did:web:iata.example.com:123",
        publicKeyJwk: {
          kty: "OKP",
          crv: "Ed25519",
          x: "EDpb5AwlXWSbu4SUPqEEOot-moIsUGgX5irDANvNGhg",
        },
      },
    ],
    assertionMethod: [
      "did:web:iata.example.com:123#z6MkfYcBV8jdBM1dzxUkR1Vm7Rwrx55eZNqADGu67ruMBTq1",
    ],
    authentication: [
      "did:web:iata.example.com:123#z6MkfYcBV8jdBM1dzxUkR1Vm7Rwrx55eZNqADGu67ruMBTq1",
    ],
  },
};
