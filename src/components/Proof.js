import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import CardHeader from "@material-ui/core/CardHeader";

import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import { green } from "@material-ui/core/colors";

import moment from "moment";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import { Link as RouteLink } from "react-router-dom";

import * as actors from "../actors";

let actorsIndex = {};
Object.values(actors).forEach((actor) => {
  actorsIndex = { ...actorsIndex, [actor.document.id]: actor };
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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

export const Proof = ({ proof }) => {
  const classes = useStyles();
  const [issuer] = proof.verificationMethod.split("#");

  return (
    <>
      <List
        component="nav"
        aria-labelledby="signatures-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="signatures-subheader"
            style={{ fontSize: "24px" }}
          >
            Signatures
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button>
          <CardHeader
            avatar={
              <Avatar aria-label="proof" className={classes.avatar}>
                <VerifiedUserIcon className={classes.avatarIcon} />
              </Avatar>
            }
            title={
              <RouteLink to={`/organizations/${issuer}`}>
                <Chip
                  variant="outlined"
                  color={"secondary"}
                  avatar={<Avatar>{actorsIndex[issuer].name[0]}</Avatar>}
                  label={issuer}
                  onClick={"#"}
                />
              </RouteLink>
            }
            subheader={`Signed ${moment(proof.created).fromNow()}`}
            subheaderTypographyProps={{
              variant: "h5",
              style: { fontSize: "12px", marginTop: "8px" },
            }}
          />
        </ListItem>
      </List>
    </>
  );
};
