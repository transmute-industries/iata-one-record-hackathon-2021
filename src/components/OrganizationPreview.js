import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/ListSubheader";

import CardHeader from "@material-ui/core/CardHeader";

import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import { green } from "@material-ui/core/colors";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import { Link as RouteLink } from "react-router-dom";

import { AceEditor } from "./AceEditor";

import { Tabs } from "./Tabs";

import * as actors from "../actors";

import { TinyCredential } from "./TinyCredential";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  cardHeader: {
    marginBottom: "32px",
  },
  avatar: {
    height: "64px",
    width: "64px",
    backgroundColor: green[500],
  },
  avatarIcon: {
    height: "42px",
    width: "42px",
    color: "#FFF",
  },
}));

const organizationCredentials = {
  [actors.carrier.document.id]: [
    {
      title: "DCSA Member Carrier",
      issuer: "did:web:transmute.industries",
    },
  ],
  [actors.shipper.document.id]: [
    {
      title: "DCSA Trusted Shipper",
      issuer: "did:web:transmute.industries",
    },
  ],
  [actors.consignee.document.id]: [
    {
      title: "IATA Trusted Shipper",
      issuer: "did:web:transmute.industries",
    },
  ],
};

let actorsIndex = {};
Object.values(actors).forEach((actor) => {
  actorsIndex = {
    ...actorsIndex,
    [actor.document.id]: {
      ...actor,
      credentials: organizationCredentials[actor.document.id],
    },
  };
});

export const OrganizationPreview = ({ organization }) => {
  const classes = useStyles();
  return (
    <>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="proof" className={classes.avatar}>
            <VerifiedUserIcon className={classes.avatarIcon} />
          </Avatar>
        }
        title={
          <RouteLink to={`/organizations/${organization.document.id}`}>
            <Chip
              variant="outlined"
              color={"secondary"}
              avatar={<Avatar>{organization.name[0]}</Avatar>}
              label={organization.document.id}
              onClick={"#"}
            />
          </RouteLink>
        }
        subheader={organization.website}
        subheaderTypographyProps={{
          onClick: () => {
            window.open(organization.website);
          },
          variant: "h5",
          style: { cursor: "pointer", marginTop: "8px", fontSize: "14px" },
        }}
      />
      <Tabs
        tabs={[
          {
            title: "Credentials",
            content: (
              <>
                {actorsIndex[organization.document.id].credentials &&
                  actorsIndex[organization.document.id].credentials.map(
                    (vc) => {
                      return <TinyCredential {...vc} />;
                    }
                  )}
              </>
            ),
          },
          {
            title: "DID Document",
            content: (
              <AceEditor
                value={JSON.stringify(organization.document, null, 2)}
                type={"json"}
              />
            ),
          },
        ]}
      />
    </>
  );
};
