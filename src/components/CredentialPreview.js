import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import _ from "lodash";

import { CredentialField } from "./CredentialField";

import { Proof } from "./Proof";
const sortObjectKeys = (obj) => {
  let orderedFields = {};

  Object.keys(obj).forEach((k) => {
    if (k !== "@context" && k !== "type" && typeof obj[k] === "object") {
      orderedFields = {
        ...orderedFields,
        [k]: obj[k],
      };
    }
  });

  Object.keys(obj).forEach((k) => {
    if (k !== "type" && typeof obj[k] !== "object") {
      orderedFields = {
        ...orderedFields,
        [k]: obj[k],
      };
    }
  });

  if (obj.type) {
    orderedFields = {
      ...orderedFields,
      type: Array.isArray(obj.type) ? obj.type.join(" ") : obj.type,
    };
  }

  let reversed = {};

  const keys = Object.keys(orderedFields);

  // eslint-disable-next-line no-plusplus
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    const value = orderedFields[keys[i]];
    reversed = {
      ...reversed,
      [key]: value,
    };
  }

  return reversed;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "3px",
  },
  accordionSummary: {
    backgroundColor: theme.palette.background.accordionSummary + "!important",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const objToCustomActions = (obj) => {
  if (obj.type) {
    if (obj.type === "PostalAddress" || obj.type.includes("PostalAddress")) {
      return <Grid item></Grid>;
    }
  }
  return undefined;
};

export const CredentialObject = ({ obj }) => {
  const classes = useStyles();
  const sorted = sortObjectKeys(obj);
  const [expanded, setExpanded] = React.useState({});

  const handleChange = (panel) => () => {
    setExpanded({ ...expanded, [panel]: !expanded[panel] });
  };

  const keys = Object.keys(sorted);

  const excludedFields = ["type", "content"];

  return (
    <Grid container spacing={1}>
      {keys.map((k, index) => {
        if (excludedFields.includes(k)) {
          return undefined;
        }
        if (typeof sorted[k] === "object") {
          let label = _.startCase(k);
          if (parseInt(label, 10).toString() === label) {
            label = `Item ${label}`;
          }

          return (
            <Grid key={index} item className={classes.root} xs={12}>
              <Accordion
                expanded={!expanded[`panel-${k}`]}
                onChange={handleChange(`panel-${k}`)}
              >
                <AccordionSummary
                  className={classes.accordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${k}`}
                  id={`panel-header-${k}`}
                  style={{
                    background: "#edeef7",
                    border: "none",
                  }}
                >
                  <Typography className={classes.heading}>{label}</Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{ padding: "8px", flexDirection: "column" }}
                >
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    {objToCustomActions(sorted[k])}
                  </Grid>
                  <CredentialObject obj={sorted[k]} />
                </AccordionDetails>
              </Accordion>
            </Grid>
          );
        }

        return (
          <Grid key={index} item xs={keys.length > 1 ? 6 : 12}>
            <CredentialField label={_.startCase(k)} value={sorted[k]} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export const CredentialPreview = ({ credential }) => {
  return (
    <>
      {credential.proof && <Proof proof={credential.proof} />}
      <CredentialObject obj={credential.credentialSubject} />
    </>
  );
};
