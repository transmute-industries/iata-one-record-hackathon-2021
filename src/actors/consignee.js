export const consignee = {
  name: "Go Monkey Toys",
  role: "consignee",
  website: "https://www.gomonkeytoys.com",
  credentials: [
    {
      title: "Excellent Partner",
      issuer: "did:web:dcsa.org:shipper:butterfly-rollers",
    },
  ],
  document: {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/jws-2020/v1",
    ],
    id: "did:web:dcsa.org:consignee:go-monkey",
    verificationMethod: [
      {
        id: "did:web:dcsa.org:consignee:go-monkey#z6MkhQLRRd8WL8gAi6x1uZN98h2KizeTBBKZC9jKrfddpauQ",
        type: "JsonWebKey2020",
        controller: "did:web:dcsa.org:consignee:go-monkey",
        publicKeyJwk: {
          kty: "OKP",
          crv: "Ed25519",
          x: "K9NETkdYkMuU9cY1Tzl-893oWlWFYdFzAbyYXNGxyZs",
        },
      },
    ],
    assertionMethod: [
      "did:web:dcsa.org:consignee:go-monkey#z6MkhQLRRd8WL8gAi6x1uZN98h2KizeTBBKZC9jKrfddpauQ",
    ],
    authentication: [
      "did:web:dcsa.org:consignee:go-monkey#z6MkhQLRRd8WL8gAi6x1uZN98h2KizeTBBKZC9jKrfddpauQ",
    ],
  },
};
