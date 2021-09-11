export const bol = {
  name: "MSCUKK871206",
  role: "bill-of-ladding",
  website: "https://www.msc.com/bol/MSCUKK871206",
  document: {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/jws-2020/v1",
    ],
    id: "did:web:msc.com:bol:MSCUKK871206",
    serivice: [
      {
        type: "BillOfLadingRegistry",
        serviceEndpoint: "https://www.msc.com/bol/MSCUKK871206",
      },
    ],
  },
};
