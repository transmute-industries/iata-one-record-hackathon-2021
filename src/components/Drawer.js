import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Link as RouteLink } from "react-router-dom";

import MailIcon from "@material-ui/icons/Mail";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { shipper, carrier, consignee } from "../actors";

import { container, bol } from "../actors";

export const Drawer = () => {
  return (
    <>
      <List subheader={<ListSubheader component="div">Actions</ListSubheader>}>
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

      <Divider />
      <List
        subheader={<ListSubheader component="div">Organizations</ListSubheader>}
      >
        <RouteLink to={"/organizations/" + shipper.document.id}>
          <ListItem button>
            <ListItemIcon>
              <DirectionsBoatIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Shipper"}
              secondary={shipper.name}
              secondaryTypographyProps={{ variant: "h5" }}
            />
          </ListItem>
        </RouteLink>

        <RouteLink to={"/organizations/" + carrier.document.id}>
          <ListItem button>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Carrier"}
              secondary={carrier.name}
              secondaryTypographyProps={{ variant: "h5" }}
            />
          </ListItem>
        </RouteLink>

        <RouteLink to={"/organizations/" + consignee.document.id}>
          <ListItem button>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Consignee"}
              secondary={consignee.name}
              secondaryTypographyProps={{ variant: "h5" }}
            />
          </ListItem>
        </RouteLink>
      </List>

      <Divider />
      <List
        subheader={<ListSubheader component="div">Documents</ListSubheader>}
      >
        <RouteLink to={"/documents/" + container.document.id}>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Container"}
              secondary={container.document.id.split(":").pop()}
            />
          </ListItem>
        </RouteLink>

        <RouteLink to={"/documents/" + bol.document.id}>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Bill Of Lading"}
              secondary={bol.document.id.split(":").pop()}
            />
          </ListItem>
        </RouteLink>
      </List>
    </>
  );
};
