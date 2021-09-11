export const shipper = {
  name: "Butterfly Rollers",
  role: "shipper",
  website: "https://www.butterfly-rollers.be",
  document: {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/jws-2020/v1",
    ],
    id: "did:web:dcsa.org:shipper:butterfly-rollers",
    verificationMethod: [
      {
        id: "did:web:dcsa.org:shipper:butterfly-rollers#z6MktPngz7FY2SAvBiN5RUivrNq7oSCoLRNPSuZMAL3BS6Uz",
        type: "JsonWebKey2020",
        controller: "did:web:dcsa.org:shipper:butterfly-rollers",
        publicKeyJwk: {
          kty: "OKP",
          crv: "Ed25519",
          x: "zx_xnz24tu09LCrsNNbbfdTjDE5RPhQaVqSzTHTlxRM",
        },
      },
    ],
    assertionMethod: [
      "did:web:dcsa.org:shipper:butterfly-rollers#z6MktPngz7FY2SAvBiN5RUivrNq7oSCoLRNPSuZMAL3BS6Uz",
    ],
    authentication: [
      "did:web:dcsa.org:shipper:butterfly-rollers#z6MktPngz7FY2SAvBiN5RUivrNq7oSCoLRNPSuZMAL3BS6Uz",
    ],
  },
};
