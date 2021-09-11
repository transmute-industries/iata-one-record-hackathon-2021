export const service = {
  name: "Transmute",
  role: "service",
  website: "https://transmute.industries",
  document: {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/jws-2020/v1",
    ],
    id: "did:web:transmute.industries",
    verificationMethod: [
      {
        id: "did:web:transmute.industries#key-0",
        type: "JsonWebKey2020",
        controller: "did:web:transmute.industries",
        publicKeyJwk: {
          kty: "EC",
          crv: "BLS12381_G1",
          x: "jzYzriKwjV1yJhJecLV_s2Tz9VnLqDxfz3l51WpoycwrPO4cQMFxM3sqj080AbjY",
        },
      },
      {
        id: "did:web:transmute.industries#key-1",
        type: "JsonWebKey2020",
        controller: "did:web:transmute.industries",
        publicKeyJwk: {
          kty: "EC",
          crv: "BLS12381_G2",
          x: "uGRlv7nh_kL3oNFzmBCSd1_XskDvQnLBRZqBf1j1qXt6bV44DhUL1yr4u4sdtLidCYRkkSFVlNbqw4JeGDMEox4Deq1vek4WUdJOeR2XbbNV3ZrvVY2v0x5G0y1-Hgtj",
        },
      },
    ],
    assertionMethod: [
      "did:web:transmute.industries#key-0",
      "did:web:transmute.industries#key-1",
    ],
    authentication: [
      "did:web:transmute.industries#key-0",
      "did:web:transmute.industries#key-1",
    ],
    capabilityInvocation: [
      "did:web:transmute.industries#key-0",
      "did:web:transmute.industries#key-1",
    ],
    capabilityDelegation: [
      "did:web:transmute.industries#key-0",
      "did:web:transmute.industries#key-1",
    ],
  },
};
