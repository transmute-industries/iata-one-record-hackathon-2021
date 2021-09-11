import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardHeader from "@material-ui/core/CardHeader";

import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import { blue } from "@material-ui/core/colors";

import CloudDoneIcon from "@material-ui/icons/CloudDone";

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
    backgroundColor: blue[500],
  },
  avatarIcon: {
    height: "42px",
    width: "42px",
    color: "#FFF",
  },
}));

export const TinyCredential = ({ title, issuer, description }) => {
  const classes = useStyles();

  return (
    <>
      <CardHeader
        avatar={
          <Avatar aria-label="proof" className={classes.avatar}>
            <CloudDoneIcon className={classes.avatarIcon} />
          </Avatar>
        }
        title={title}
        subheader={
          <>
            <RouteLink to={`/organizations/${issuer}`}>
              <Chip
                variant="outlined"
                color={"secondary"}
                avatar={<Avatar>{actorsIndex[issuer].name[0]}</Avatar>}
                label={issuer}
                onClick={"#"}
              />
            </RouteLink>
          </>
        }
        subheaderTypographyProps={{
          variant: "h5",
          style: { fontSize: "12px", marginTop: "8px" },
        }}
      />
    </>
  );
};
