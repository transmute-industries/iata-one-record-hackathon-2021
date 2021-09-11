import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Link as RouteLink } from "react-router-dom";

import MailIcon from "@material-ui/icons/Mail";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

export const Drawer = () => {
  return (
    <>
      <List>
        <RouteLink to="/issue">
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Issue"} />
          </ListItem>
        </RouteLink>

        <RouteLink to="/verify">
          <ListItem button>
            <ListItemIcon>
              <VerifiedUserIcon />
            </ListItemIcon>
            <ListItemText primary={"Verify"} />
          </ListItem>
        </RouteLink>
      </List>
    </>
  );
};
