import React from "react";

import { useParams } from "react-router-dom";

import { Page } from "../../components/Page";

import { OrganizationPreview } from "../../components/OrganizationPreview";
import { shipper, carrier, consignee } from "../../actors";

export const Organization = () => {
  const { did } = useParams();

  const content = {
    [carrier.document.id]: <OrganizationPreview organization={carrier} />,
    [shipper.document.id]: <OrganizationPreview organization={shipper} />,
    [consignee.document.id]: <OrganizationPreview organization={consignee} />,
  };

  return <Page title={did}>{content[did]}</Page>;
};
